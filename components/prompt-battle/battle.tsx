"use client";

import { useState } from "react";
import { battles, type Battle } from "./data";

export function PromptBattle() {
  const [selected, setSelected] = useState(0);
  const battle = battles[selected];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {battles.map((b, i) => (
          <button
            key={b.id}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${selected === i ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "bg-[var(--color-bg-card)] text-[var(--color-fg-soft)] hover:bg-white/5"}`}
          >
            Escenario {i + 1}
          </button>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] mb-6">
        <div className="font-mono text-xs text-[var(--color-fg-mute)] uppercase tracking-wider mb-2">
          Objetivo
        </div>
        <p className="text-xl text-[var(--color-fg)]">{battle.scenario}</p>
      </div>

      <BattleView battle={battle} />
    </div>
  );
}

function BattleView({ battle }: { battle: Battle }) {
  const [revealed, setRevealed] = useState<"none" | "good" | "both">("none");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Side
        kind="bad"
        prompt={battle.bad.prompt}
        response={battle.bad.response}
        why={battle.bad.whyBad}
      />
      {revealed === "none" ? (
        <div className="p-8 rounded-2xl border-2 border-dashed border-[var(--color-border-strong)] flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-4">🆚</div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">Versus</div>
          <h3 className="text-2xl font-bold mb-4">¿Qué crees que mejorará?</h3>
          <p className="text-sm text-[var(--color-fg-soft)] mb-6 max-w-xs">
            Imagínate el mismo objetivo, pero esta vez con todas las técnicas de prompting bien aplicadas.
          </p>
          <button
            onClick={() => setRevealed("good")}
            className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Revelar el buen prompt →
          </button>
        </div>
      ) : (
        <Side
          kind="good"
          prompt={battle.good.prompt}
          response={battle.good.response}
          why={battle.good.whyGood}
        />
      )}
    </div>
  );
}

function Side({ kind, prompt, response, why }: { kind: "bad" | "good"; prompt: string; response: string; why: string[] }) {
  const color = kind === "bad" ? "var(--color-bad)" : "var(--color-good)";
  const label = kind === "bad" ? "Prompt truño" : "Prompt bueno";
  const icon = kind === "bad" ? "👎" : "👍";

  return (
    <div
      className="p-6 rounded-2xl border-t-4 bg-[var(--color-bg-card)]"
      style={{ borderTopColor: color }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="font-mono text-xs uppercase tracking-wider" style={{ color }}>
          {label}
        </div>
        <div className="text-2xl">{icon}</div>
      </div>

      <div className="mb-5">
        <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">PROMPT</div>
        <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm leading-relaxed whitespace-pre-wrap font-mono text-[var(--color-fg-soft)]">
          {prompt}
        </div>
      </div>

      <div className="mb-5">
        <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">RESPUESTA</div>
        <div className="p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm leading-relaxed whitespace-pre-wrap">
          {response}
        </div>
      </div>

      <div>
        <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
          POR QUÉ {kind === "bad" ? "FALLA" : "FUNCIONA"}
        </div>
        <ul className="space-y-2">
          {why.map((w, i) => (
            <li key={i} className="text-sm text-[var(--color-fg-soft)] flex gap-2">
              <span style={{ color }} className="flex-shrink-0">→</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
