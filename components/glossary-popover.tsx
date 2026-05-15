"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getTerm } from "@/content/glosario";

type PopState = { id: string; anchor: DOMRect };

/**
 * Escucha los clics sobre los <button.gloss-term> que lib/markdown.ts inserta
 * en los artículos y muestra un popup con la definición del término.
 * Se monta una sola vez por página. Cierra al pulsar fuera o con Escape.
 */
export function GlossaryPopover() {
  const [pop, setPop] = useState<PopState | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ left: number; top: number; above: boolean }>({
    left: 0,
    top: 0,
    above: false,
  });

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const term = target.closest<HTMLElement>(".gloss-term");
      if (term) {
        e.preventDefault();
        const id = term.dataset.term;
        if (id) setPop({ id, anchor: term.getBoundingClientRect() });
        return;
      }
      // clic fuera del término y fuera de la tarjeta → cerrar
      if (!target.closest(".gloss-popover")) setPop(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setPop(null);
    }
    function onScrollOrResize() {
      setPop(null);
    }
    document.addEventListener("click", onPointerDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      document.removeEventListener("click", onPointerDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useLayoutEffect(() => {
    if (!pop || !cardRef.current) return;
    const card = cardRef.current.getBoundingClientRect();
    const margin = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const a = pop.anchor;

    let left = a.left + a.width / 2 - card.width / 2;
    left = Math.max(margin, Math.min(left, vw - card.width - margin));

    const spaceBelow = vh - a.bottom;
    const above = spaceBelow < card.height + margin + 8 && a.top > card.height + margin;
    const top = above ? a.top - card.height - 8 : a.bottom + 8;

    setCoords({ left, top, above });
  }, [pop]);

  if (!pop) return null;
  const term = getTerm(pop.id);
  if (!term) return null;

  return (
    <div
      ref={cardRef}
      className="gloss-popover"
      role="dialog"
      aria-label={`Definición de ${term.term}`}
      style={{ left: coords.left, top: coords.top }}
    >
      <div className="gloss-popover-head">
        <span className="gloss-popover-term">{term.term}</span>
        <button
          type="button"
          className="gloss-popover-close"
          aria-label="Cerrar"
          onClick={() => setPop(null)}
        >
          ×
        </button>
      </div>
      <p className="gloss-popover-def">{term.def}</p>
      <a
        className="gloss-popover-more"
        href={`/explorar/herramientas-actuales#5-glosario-para-entender-las-noticias`}
      >
        Ver el glosario completo →
      </a>
    </div>
  );
}
