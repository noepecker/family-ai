import Link from "next/link";

export const metadata = { title: "Jugar · Acércate a la IA" };

type Juego = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  duration: string;
  who: string;
  kind: "test" | "interactivo" | "comparativa";
};

const juegos: Juego[] = [
  {
    slug: "arc-agi",
    title: "ARC-AGI · 5 puzzles visuales",
    description: "5 puzzles donde la regla NUNCA está escrita: la deduces mirando ejemplos. Tú aciertas en segundos. Mejor IA del mundo: 0,5% en la versión real.",
    emoji: "🎮",
    color: "var(--color-good)",
    duration: "5-10 min",
    who: "Todos los niveles (los niños ganan más)",
    kind: "interactivo",
  },
  {
    slug: "arc-agi-3",
    title: "ARC-AGI-3 · descubrid la regla",
    description: "4 niveles, cero instrucciones. Pulsáis flechas y deducís qué hacen. Cada nivel cambia las reglas. Esto es ARC-AGI-3 real: donde la mejor IA puntúa 0,5%.",
    emoji: "🧩",
    color: "var(--color-good)",
    duration: "10-15 min",
    who: "Mejor en grupo",
    kind: "interactivo",
  },
  {
    slug: "contra-la-ia",
    title: "Contra la IA · donde te aplasta",
    description: "3 retos a contrarreloj: lee japonés, encuentra un dato en un contrato legal, traduce a 6 idiomas. La IA lo hace en segundos. Tú no.",
    emoji: "⚡",
    color: "var(--color-hot)",
    duration: "5-7 min",
    who: "Todos los niveles",
    kind: "interactivo",
  },
  {
    slug: "quiz",
    title: "Quiz: ¿cuánto sabes de IA?",
    description: "10 preguntas que separan a quien sigue las noticias de quien las cree. Mitos, datos reales, sorpresas. Aprendes mientras juegas.",
    emoji: "🧠",
    color: "var(--color-cool)",
    duration: "5-7 min",
    who: "Todos los niveles",
    kind: "test",
  },
  {
    slug: "ia-o-no",
    title: "¿IA o no?",
    description: "Textos, frases, citas. Tú decides cuál es humano y cuál es IA. Spoiler: vas a fallar más de lo que crees.",
    emoji: "👀",
    color: "var(--color-hot)",
    duration: "3-5 min",
    who: "A partir de adolescentes",
    kind: "test",
  },
  {
    slug: "prompt-battle",
    title: "Prompt battle",
    description: "Mismo objetivo, prompts distintos. Mira cómo cambia la respuesta de la IA cuando le hablas como un becario perezoso o un compañero exigente.",
    emoji: "⚔️",
    color: "var(--color-warn)",
    duration: "4 min",
    who: "Para quien usa IA habitualmente",
    kind: "comparativa",
  },
  {
    slug: "evolucion-modelos",
    title: "Evolución de los modelos",
    description: "La misma pregunta, en GPT-3 (2020) y en GPT-5 (2025). Errores que desaparecen, capacidades que aparecen, lo que sigue costando.",
    emoji: "📈",
    color: "var(--color-good)",
    duration: "4 min",
    who: "Para los curiosos",
    kind: "comparativa",
  },
  {
    slug: "dividir-cuenta",
    title: "Dividir la cuenta del restaurante",
    description: "Mock visual de cómo una IA multimodal procesa un ticket. Asigna platos a personas, ve cuánto paga cada uno. Como lo haría ChatGPT con la foto.",
    emoji: "🧾",
    color: "var(--color-accent)",
    duration: "Lo que quieras",
    who: "Todos los niveles",
    kind: "interactivo",
  },
  {
    slug: "contador-tokens",
    title: "Contador de tokens",
    description: "Pega texto y mira cómo lo 've' un LLM. Por qué te facturan así, por qué el chino sale más caro, por qué un libro entero ya cabe en un prompt.",
    emoji: "🔢",
    color: "var(--color-cool)",
    duration: "Lo que quieras",
    who: "Para curiosos y técnicos",
    kind: "interactivo",
  },
  {
    slug: "calculadora-consumo",
    title: "Calculadora de consumo",
    description: "Mueve sliders. Mira cuánto gastas usando IA en cosas que conoces: hamburguesas, Netflix, duchas, vuelos. Texto trivial vs vídeo descomunal.",
    emoji: "⚡",
    color: "var(--color-warn)",
    duration: "Lo que quieras",
    who: "Para quien le preocupa el medio ambiente",
    kind: "interactivo",
  },
];

const kindLabels = {
  test: "TEST",
  interactivo: "INTERACTIVO",
  comparativa: "COMPARATIVA",
};

export default function JugarPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-32">
      <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        Modo interactivo · {juegos.length} retos
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-6">
        Toca la IA <span className="font-serif italic text-[var(--color-accent)]">con las manos</span>
      </h1>

      <p className="text-xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-16 leading-relaxed">
        Tests, comparativas y demos interactivas para entender la IA jugando. Ideales para
        tocarlos en grupo después de la charla, o para probarlos a tu ritmo cuando quieras.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {juegos.map((j, i) => (
          <Link
            key={j.slug}
            href={`/jugar/${j.slug}`}
            className="group block p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            style={{
              animationDelay: `${i * 60}ms`,
              borderTopColor: j.color,
              borderTopWidth: 4,
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="text-5xl">{j.emoji}</div>
              <div className="font-mono text-xs text-right flex flex-col items-end gap-1.5">
                <span className="px-2 py-0.5 rounded uppercase tracking-wider" style={{ background: `${j.color}20`, color: j.color }}>
                  {kindLabels[j.kind]}
                </span>
                <span className="text-[var(--color-fg-mute)]">{j.duration}</span>
                <span className="text-[var(--color-fg-mute)]">{j.who}</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
              {j.title}
            </h2>
            <p className="text-base text-[var(--color-fg-soft)] leading-relaxed mb-5">{j.description}</p>
            <div className="inline-flex items-center gap-2 font-mono text-sm font-semibold" style={{ color: j.color }}>
              Empezar <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
