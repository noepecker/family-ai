"use client";

import { useEffect, useState } from "react";
import { getSlideLink } from "@/content/slide-map";

/**
 * Detecta `?from=<slide-id>` y muestra una pista contextual con botón
 * "volver a la charla". El slide-id viene del mapa content/slide-map.ts.
 */
export function FromSlideBanner() {
  const [slide, setSlide] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const from = url.searchParams.get("from");
    if (from) setSlide(from);
  }, []);

  if (!slide || hidden) return null;
  const info = getSlideLink(slide);

  return (
    <div
      className="border-b border-[var(--color-border)]"
      style={{
        background: "linear-gradient(90deg, rgba(255,87,34,0.10), rgba(255,87,34,0.02))",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4 text-sm flex-wrap">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          ↩ Vienes desde la charla
        </span>
        <span className="text-[var(--color-fg-soft)]">
          {info ? (
            <>
              <strong className="text-[var(--color-fg)]">{info.title}</strong> · esto es el material para profundizar.
            </>
          ) : (
            <>Esta es la página web que profundiza esa slide.</>
          )}
        </span>
        <span className="flex-1" />
        <a
          href={`/charla#${slide}`}
          className="font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-accent-soft)] inline-flex items-center gap-1.5"
        >
          ← Volver a la slide
        </a>
        <button
          type="button"
          onClick={() => setHidden(true)}
          aria-label="Cerrar"
          className="text-[var(--color-fg-mute)] hover:text-[var(--color-fg)] font-mono text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
