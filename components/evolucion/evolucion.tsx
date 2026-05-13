"use client";

import { useState } from "react";
import { questions, type ModelAnswer } from "./data";

export function Evolucion() {
  const [selected, setSelected] = useState(0);
  const q = questions[selected];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {questions.map((qq, i) => (
          <button
            key={qq.id}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${selected === i ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "bg-[var(--color-bg-card)] text-[var(--color-fg-soft)] hover:bg-white/5"}`}
          >
            Pregunta {i + 1}
          </button>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] mb-8">
        <div className="font-mono text-xs text-[var(--color-fg-mute)] uppercase tracking-wider mb-2">
          Pregunta para la IA
        </div>
        <p className="text-2xl text-[var(--color-fg)] mb-3 font-medium leading-snug">
          {q.question}
        </p>
        <p className="text-sm text-[var(--color-fg-mute)] italic">{q.context}</p>
      </div>

      <div className="relative">
        <div className="absolute left-7 top-0 bottom-0 w-px bg-[var(--color-border-strong)]" />
        <div className="space-y-6">
          {q.answers.map((a, i) => (
            <AnswerCard key={i} answer={a} delay={i * 80} />
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
        <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
          Lección
        </div>
        <p className="text-base text-[var(--color-fg)] leading-relaxed">{q.lesson}</p>
      </div>
    </div>
  );
}

const verdictMap: Record<ModelAnswer["verdict"], { label: string; color: string; icon: string }> = {
  wrong: { label: "Fallo", color: "var(--color-bad)", icon: "✗" },
  partial: { label: "A medias", color: "var(--color-warn)", icon: "≈" },
  good: { label: "Acierta", color: "var(--color-good)", icon: "✓" },
};

function AnswerCard({ answer, delay }: { answer: ModelAnswer; delay: number }) {
  const v = verdictMap[answer.verdict];
  return (
    <div className="relative pl-16 animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div
        className="absolute left-4 top-3 w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm font-bold border-2 z-10"
        style={{ background: "var(--color-bg)", color: v.color, borderColor: v.color }}
      >
        {v.icon}
      </div>
      <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
          <div>
            <span className="font-mono font-bold text-base text-[var(--color-fg)]">{answer.model}</span>
            <span className="font-mono text-sm text-[var(--color-fg-mute)] ml-3">{answer.year}</span>
          </div>
          <span className="font-mono text-xs px-2 py-1 rounded uppercase tracking-wider" style={{ background: `${v.color}20`, color: v.color }}>
            {v.label}
          </span>
        </div>
        <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-sm whitespace-pre-wrap leading-relaxed text-[var(--color-fg-soft)] mb-3">
          {answer.response}
        </div>
        {answer.note && (
          <p className="text-xs text-[var(--color-fg-mute)] italic leading-relaxed">{answer.note}</p>
        )}
      </div>
    </div>
  );
}
