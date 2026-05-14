"use client";

import { useEffect, useState } from "react";

const PROMPT = "Explícame qué es la IA";
const RESPONSE_TOKENS = [
  "La ",
  "IA ",
  "no ",
  "es ",
  "magia.",
  " ",
  "Es ",
  "un ",
  "autocompletar ",
  "× ",
  "10.000 ",
  "millones.",
];

/**
 * Animación de tokens generándose. Muestra cómo un LLM "habla" token a token.
 * Pensada para el hero. Sin librerías; solo state + setTimeout.
 */
export function TokenStream() {
  const [shown, setShown] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (shown < RESPONSE_TOKENS.length) {
      const delay = 80 + Math.random() * 180;
      const t = setTimeout(() => setShown((s) => s + 1), delay);
      return () => clearTimeout(t);
    }
    const reset = setTimeout(() => {
      setShown(0);
      setCycle((c) => c + 1);
    }, 4000);
    return () => clearTimeout(reset);
  }, [shown]);

  return (
    <div className="font-mono text-sm md:text-base bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-5 md:p-6 max-w-2xl shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-bad)]"></span>
        <span className="w-2 h-2 rounded-full bg-[var(--color-warn)]"></span>
        <span className="w-2 h-2 rounded-full bg-[var(--color-good)]"></span>
        <span className="text-[var(--color-fg-mute)] text-xs ml-2">chat.txt</span>
      </div>
      <div className="text-[var(--color-fg-mute)] mb-1">{">"} {PROMPT}</div>
      <div className="text-[var(--color-fg)] leading-relaxed min-h-[3em]">
        {RESPONSE_TOKENS.slice(0, shown).map((t, i) => (
          <span
            key={`${cycle}-${i}`}
            className="inline-block"
            style={{
              animation: "token-pop 0.3s ease-out",
              animationFillMode: "backwards",
            }}
          >
            {t}
          </span>
        ))}
        {shown < RESPONSE_TOKENS.length && (
          <span className="inline-block w-2 h-4 bg-[var(--color-accent)] align-middle animate-pulse"></span>
        )}
      </div>
    </div>
  );
}
