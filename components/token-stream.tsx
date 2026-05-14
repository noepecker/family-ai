"use client";

import { useEffect, useRef, useState } from "react";

type Demo = {
  id: string;
  prompt: string;
  tokens: string[];
  /** ms entre tokens (la dispersión añade naturalidad) */
  speed?: number;
};

const DEMOS: Demo[] = [
  {
    id: "que-es",
    prompt: "Explícame qué es la IA en una frase",
    tokens: [
      "La ", "IA ", "no ", "es ", "magia: ", "es ", "un ", "autocompletar ",
      "× ", "10.000 ", "millones, ", "entrenado ", "con ", "casi ", "todo ",
      "lo ", "que ", "se ", "ha ", "escrito ", "en ", "internet.",
    ],
  },
  {
    id: "como-aprende",
    prompt: "¿Cómo aprende un LLM?",
    tokens: [
      "Le ", "tapas ", "una ", "palabra. ", "Adivina. ", "Falla. ", "Ajusta. ",
      "Repite ", "billones ", "de ", "veces. ", "Eso ", "es ", "todo.",
    ],
  },
  {
    id: "puede-pensar",
    prompt: "¿Puede pensar la IA?",
    tokens: [
      "Predice ", "patrones, ", "no ", "razona. ", "Aunque ", "los ", "modelos ",
      "“reasoning” ", "(o3, ", "Claude ", "thinking) ", "generan ", "texto ",
      "antes ", "de ", "responder. ", "Si ", "eso ", "es ", "pensar… ",
      "ese ", "es ", "el ", "debate ", "del ", "siglo.",
    ],
  },
];

export function TokenStream() {
  const [demoIdx, setDemoIdx] = useState(0);
  const [shown, setShown] = useState(0);
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(1); // multiplicador 1× / 0.5× / 2×
  const timeoutRef = useRef<number | null>(null);

  const demo = DEMOS[demoIdx];

  useEffect(() => {
    if (!running) return;
    if (shown < demo.tokens.length) {
      const baseDelay = 70 + Math.random() * 160;
      const delay = baseDelay / speed;
      timeoutRef.current = window.setTimeout(
        () => setShown((s) => s + 1),
        delay,
      );
    } else {
      timeoutRef.current = window.setTimeout(() => {
        setShown(0);
      }, 3500 / speed);
    }
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [shown, demo, running, speed]);

  const onSelect = (i: number) => {
    setDemoIdx(i);
    setShown(0);
    setRunning(true);
  };

  return (
    <div className="max-w-2xl">
      <div className="font-mono text-sm md:text-base bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-5 md:p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-bad)]"></span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-warn)]"></span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-good)]"></span>
          <span className="text-[var(--color-fg-mute)] text-xs ml-2">
            chat · token-by-token
          </span>
          <span className="flex-1" />
          <span className="text-[var(--color-fg-mute)] text-[10px] uppercase tracking-wider">
            {shown}/{demo.tokens.length} tokens
          </span>
        </div>
        <div className="text-[var(--color-fg-mute)] mb-2 text-sm">
          {">"} {demo.prompt}
        </div>
        <div className="text-[var(--color-fg)] leading-relaxed min-h-[5em] text-base">
          {demo.tokens.slice(0, shown).map((t, i) => (
            <span
              key={`${demo.id}-${i}`}
              className="inline-block px-0.5 rounded"
              style={{
                animation: "token-pop 0.3s ease-out",
                animationFillMode: "backwards",
                background:
                  i === shown - 1
                    ? "rgba(255, 87, 34, 0.18)"
                    : "transparent",
                transition: "background 0.6s ease",
              }}
            >
              {t}
            </span>
          ))}
          {shown < demo.tokens.length && (
            <span className="inline-block w-2 h-4 bg-[var(--color-accent)] align-middle animate-pulse ml-0.5"></span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 flex-wrap text-xs font-mono">
        <span className="text-[var(--color-fg-mute)] uppercase tracking-wider text-[0.65rem]">
          Prueba otra:
        </span>
        {DEMOS.map((d, i) => (
          <button
            key={d.id}
            type="button"
            onClick={() => onSelect(i)}
            className="px-3 py-1.5 rounded-full transition-all"
            style={{
              background:
                i === demoIdx ? "var(--color-accent)" : "var(--color-bg-card)",
              color:
                i === demoIdx
                  ? "var(--color-on-accent)"
                  : "var(--color-fg-soft)",
              border: `1px solid ${i === demoIdx ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            {d.prompt}
          </button>
        ))}
        <span className="text-[var(--color-fg-mute)] mx-2">·</span>
        <button
          type="button"
          onClick={() => setSpeed(speed === 1 ? 2 : speed === 2 ? 0.5 : 1)}
          className="px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-fg-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Cambiar velocidad de generación"
        >
          {speed === 1 ? "1×" : speed === 2 ? "2×" : "0.5×"}
        </button>
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-fg-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          aria-label={running ? "Pausar" : "Reanudar"}
        >
          {running ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}
