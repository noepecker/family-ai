"use client";

import { useState, useMemo } from "react";

const SAMPLES = [
  {
    name: "Frase corta",
    text: "Buenos días, ¿qué tal estás hoy?",
  },
  {
    name: "Cervantes",
    text: "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
  },
  {
    name: "Email tipo",
    text: "Hola Diego,\n\nTe escribo para confirmarte la reunión del próximo jueves a las 10:00. Adjunto la presentación con los puntos a tratar. Si necesitas algo más antes, dime.\n\nUn saludo,\nCarmen",
  },
  {
    name: "Código JavaScript",
    text: 'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nconsole.log(fibonacci(10));',
  },
  {
    name: "Texto en chino",
    text: "你好，今天天气怎么样？我想去公园散步。",
  },
];

// Aproximación de tokens estilo BPE de OpenAI:
// 1 token ≈ 4 chars en inglés/español
// 1 token ≈ 1-2 chars en idiomas asiáticos
// Para ser más realista, separamos por palabras + signos.
function tokenize(text: string): string[] {
  if (!text) return [];
  const tokens: string[] = [];
  // Regex que divide en: palabras, espacios, puntuación, símbolos chinos/japoneses (1 token cada uno)
  const regex = /[一-鿿぀-ゟ゠-ヿ]|\s+|[a-zA-ZáéíóúñÁÉÍÓÚÑ]+|[\d]+|[^\sa-zA-Z\d一-鿿぀-ゟ゠-ヿ]/g;
  const matches = text.match(regex) || [];
  for (const m of matches) {
    // Palabras largas: las partimos cada ~4-6 chars (como BPE haría)
    if (m.length > 6 && /^[a-zA-ZáéíóúñÁÉÍÓÚÑ]+$/.test(m)) {
      let i = 0;
      while (i < m.length) {
        const len = Math.min(5, m.length - i);
        tokens.push(m.slice(i, i + len));
        i += len;
      }
    } else {
      tokens.push(m);
    }
  }
  return tokens;
}

const TOKEN_COLORS = [
  "rgba(255, 87, 34, 0.25)",
  "rgba(56, 189, 248, 0.25)",
  "rgba(236, 72, 153, 0.25)",
  "rgba(16, 185, 129, 0.25)",
  "rgba(245, 158, 11, 0.25)",
  "rgba(139, 92, 246, 0.25)",
];

export function TokenCounter() {
  const [text, setText] = useState(SAMPLES[1].text);
  const tokens = useMemo(() => tokenize(text), [text]);

  const stats = {
    chars: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    tokens: tokens.length,
    ratio: text.length ? (text.length / tokens.length).toFixed(2) : "—",
  };

  // GPT-5 API pricing approx: input $1.25 / 1M, output $10 / 1M
  const inputCostMicrocents = (tokens.length * 1.25) / 1000; // En centavos
  const equivQueries = Math.round(tokens.length / 50);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="font-mono text-xs text-[var(--color-fg-mute)] self-center mr-2">EJEMPLOS:</span>
        {SAMPLES.map((s) => (
          <button
            key={s.name}
            onClick={() => setText(s.text)}
            className="px-3 py-1.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] font-mono text-xs transition-colors"
          >
            {s.name}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        className="w-full p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-base text-[var(--color-fg)] font-mono leading-relaxed focus:outline-none focus:border-[var(--color-accent)] resize-none"
        placeholder="Pega cualquier texto aquí…"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <Stat label="Caracteres" value={stats.chars} />
        <Stat label="Palabras" value={stats.words} />
        <Stat label="Tokens (aprox)" value={stats.tokens} accent />
        <Stat label="Ratio chars/token" value={stats.ratio} />
      </div>

      <div className="mt-8">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
          Cómo lo "ve" el modelo
        </div>
        <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] leading-loose">
          {tokens.length === 0 && (
            <div className="text-[var(--color-fg-mute)] italic">Pega texto para visualizar tokens.</div>
          )}
          {tokens.map((t, i) => (
            <span
              key={i}
              className="inline-block px-1.5 py-0.5 rounded mx-px font-mono text-sm"
              style={{ background: TOKEN_COLORS[i % TOKEN_COLORS.length], color: "#fff" }}
              title={`Token ${i + 1}`}
            >
              {t === "\n" ? "↵" : t === " " ? "·" : t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
            Coste estimado (GPT-5 input)
          </div>
          <div className="font-mono text-3xl font-bold text-[var(--color-accent)]">
            ${(inputCostMicrocents / 100000).toFixed(8)}
          </div>
          <div className="font-mono text-xs text-[var(--color-fg-soft)] mt-1">
            Precio actual: $1,25 por millón de tokens (input)
          </div>
        </div>
        <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
            Equivale a
          </div>
          <div className="font-mono text-3xl font-bold text-[var(--color-cool)]">
            ~{equivQueries} consultas
          </div>
          <div className="font-mono text-xs text-[var(--color-fg-soft)] mt-1">
            Comparado con una consulta corta tipo "¿qué hora es?"
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(56,189,248,0.08)] border border-[var(--color-cool)]/30">
        <div className="font-mono text-xs text-[var(--color-cool)] uppercase tracking-wider mb-3">
          Por qué importa
        </div>
        <ul className="space-y-2 text-[var(--color-fg-soft)] text-sm leading-relaxed">
          <li><strong className="text-[var(--color-fg)]">Facturación:</strong> las APIs cobran por tokens, no por palabras ni caracteres.</li>
          <li><strong className="text-[var(--color-fg)]">Ventana de contexto:</strong> "1M tokens" = un libro de 750 páginas aproximadamente.</li>
          <li><strong className="text-[var(--color-fg)]">Idiomas:</strong> el chino y el árabe usan más tokens por palabra. Por eso a veces son más caros.</li>
          <li><strong className="text-[var(--color-fg)]">Código:</strong> separadores y símbolos = muchos tokens. Una función JS larga puede gastar 200+.</li>
        </ul>
        <p className="mt-4 text-xs text-[var(--color-fg-mute)] font-mono italic">
          Nota: esto es una aproximación didáctica. El tokenizer real de cada modelo (BPE,
          tiktoken, SentencePiece) puede dar resultados ligeramente distintos.
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number | string; accent?: boolean }) {
  return (
    <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-1">{label}</div>
      <div className={`font-mono text-3xl font-bold ${accent ? "text-[var(--color-accent)]" : ""}`}>
        {value}
      </div>
    </div>
  );
}
