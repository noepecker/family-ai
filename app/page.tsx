import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundEffects />

      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
          Charla familiar · Mayo 2026
        </div>

        <h1 className="text-7xl md:text-9xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-10">
          <span className="block animate-fade-up">Inteligencia</span>
          <span className="block font-serif italic text-[var(--color-accent)] animate-fade-up" style={{ animationDelay: "120ms" }}>
            artificial
          </span>
          <span className="block animate-fade-up" style={{ animationDelay: "240ms" }}>
            en familia
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-16 leading-relaxed animate-fade-up" style={{ animationDelay: "360ms" }}>
          Una charla pensada para abuelos, padres, primos y adolescentes. Cinco formas
          de recorrerla: la charla curada, los casos reales, el catálogo de
          herramientas, la enciclopedia para profundizar, y los juegos interactivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          <PathCard
            href="/charla"
            tag="Presentación"
            title="La charla"
            sub="90 min · Lineal · Para proyectar"
            cta="Ver la charla"
            color="orange"
          />
          <PathCard
            href="/casos"
            tag="Vida real"
            title="Casos de uso"
            sub="30+ ejemplos · Por nivel y ámbito"
            cta="Ver casos"
            color="cool"
          />
          <PathCard
            href="/jugar"
            tag="Interactivo"
            title="Jugar"
            sub="7 retos · Test, demos, comparativas"
            cta="Empezar"
            color="hot"
          />
          <PathCard
            href="/herramientas"
            tag="Catálogo"
            title="Herramientas"
            sub="30+ apps · Filtrable por precio y uso"
            cta="Ver herramientas"
            color="good"
          />
          <PathCard
            href="/explorar"
            tag="Enciclopedia"
            title="Explorar a fondo"
            sub="13 bloques · Lectura libre · Con fuentes"
            cta="Profundizar"
            color="warn"
          />
          <div className="p-7 rounded-2xl border-2 border-dashed border-[var(--color-border-strong)] flex flex-col justify-center items-start">
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
              Para la familia
            </div>
            <p className="text-base text-[var(--color-fg-soft)] mb-4 leading-relaxed">
              Empezad por <strong className="text-[var(--color-fg)]">Casos</strong> si nunca lo habéis usado.
              Por <strong className="text-[var(--color-fg)]">Jugar</strong> si queréis tocar.
              Por <strong className="text-[var(--color-fg)]">Explorar</strong> si os va profundizar.
            </p>
            <div className="font-mono text-xs text-[var(--color-fg-mute)]">
              Toda la web es navegable a vuestro ritmo, antes y después de la charla.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          <Stat number="13" label="bloques verificados" />
          <Stat number="30+" label="casos de uso reales" />
          <Stat number="30+" label="herramientas curadas" />
          <Stat number="7" label="juegos interactivos" />
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 pb-24 border-t border-[var(--color-border)] pt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Qué hay dentro</h2>
        <p className="text-lg text-[var(--color-fg-soft)] mb-12 max-w-3xl">
          Lo justo para que abuelos y tíos entiendan, y lo suficiente para que primos
          developers profundicen. Todo verificado y con fuentes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Highlight emoji="🎯" title="Cómo funciona un LLM" body="Sin tecnicismos. Con la metáfora del autocompletar × 10.000 millones." />
          <Highlight emoji="🧾" title="Dividir la cuenta del restaurante" body="Mock visual + caso real explicado. Para cuando salgas a cenar mañana." />
          <Highlight emoji="🌀" title="Foto de los mandos de la lavadora" body="La IA lee iconos confusos. Vale para lavadora, horno, mando del A/C…" />
          <Highlight emoji="🎬" title="Demos de Sora, Suno, ElevenLabs" body="Lo que la IA está creando hoy: vídeo, música, voz clonada." />
          <Highlight emoji="📊" title="Calculadora de consumo" body="¿Una consulta contamina más que una hamburguesa? Mira los números reales." />
          <Highlight emoji="🔒" title="Privacidad" body="Qué pasa con tus datos. Caso Samsung, ataque Carlini, políticas por proveedor." />
          <Highlight emoji="🎨" title="Arte y propiedad intelectual" body="Ghibli, Disney vs Midjourney, settlement de $1.500M de Anthropic." />
          <Highlight emoji="🤖" title="Agentes y rent-a-human" body="Claudius con cubos de tungsteno. Una IA pagando 110€ a un humano para llevar flores." />
          <Highlight emoji="🔐" title="Defensa contra clonación de voz" body="$4.900M en estafas a abuelos en 2024. Una palabra clave familiar es la defensa." />
          <Highlight emoji="🎮" title="ARC-AGI-3" body="Humanos 100%, mejor IA del mundo 0,5%. Donde la IA todavía es ciega." />
          <Highlight emoji="💼" title="Empleo y futuro" body="MIT NANDA: 95% sin retorno. Klarna recontrata humanos. Vuestra empresa de reformas." />
          <Highlight emoji="📉" title="Detección que falla" body="Por qué Turnitin discrimina. Por qué nunca preguntes a la IA si lo escribió ella." />
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 pb-20 border-t border-[var(--color-border)] pt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Empieza por aquí <span className="font-serif italic text-[var(--color-accent)]">según quién seas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          <StartHere
            who="Abuelos, tíos, cualquiera que nunca haya pagado IA"
            cta="Empezar por casos básicos"
            href="/casos?level=basico"
            color="var(--color-good)"
            tips={[
              "Dividir la cuenta con foto del ticket",
              "Foto de la lavadora → qué programa usar",
              "Defensa familiar contra estafas de voz",
            ]}
          />
          <StartHere
            who="Padres, profes, quien usa ChatGPT a veces"
            cta="Empezar por casos medios"
            href="/casos?level=medio"
            color="var(--color-warn)"
            tips={[
              "Redactar emails en tu tono",
              "Estudiar con NotebookLM",
              "Planificar un viaje familiar entero",
            ]}
          />
          <StartHere
            who="Developers, curiosos, power users"
            cta="Empezar por avanzados"
            href="/casos?level=avanzado"
            color="var(--color-hot)"
            tips={[
              "Deep Research para investigar a fondo",
              "Vibe coding: apps web sin programar",
              "MCP: la IA conectada a tus herramientas",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
      <div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 60%)", filter: "blur(40px)" }}
      ></div>
    </>
  );
}

function PathCard({
  href,
  tag,
  title,
  sub,
  cta,
  color,
}: {
  href: string;
  tag: string;
  title: string;
  sub: string;
  cta: string;
  color: "orange" | "cool" | "hot" | "good" | "warn";
}) {
  const colorMap = {
    orange: { var: "--color-accent", shadow: "rgba(255, 87, 34, 0.35)" },
    cool: { var: "--color-cool", shadow: "rgba(56, 189, 248, 0.35)" },
    hot: { var: "--color-hot", shadow: "rgba(236, 72, 153, 0.35)" },
    good: { var: "--color-good", shadow: "rgba(16, 185, 129, 0.35)" },
    warn: { var: "--color-warn", shadow: "rgba(245, 158, 11, 0.35)" },
  };
  const c = colorMap[color];
  return (
    <Link
      href={href}
      className="group block p-7 rounded-2xl bg-[var(--color-bg-card)] border-t-4 transition-all duration-300 hover:-translate-y-1"
      style={{
        borderTopColor: `var(${c.var})`,
        boxShadow: undefined,
      }}
    >
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">{tag}</div>
      <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] mb-6">{sub}</p>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[var(--color-bg)] font-mono group-hover:gap-3 transition-all"
        style={{ background: `var(${c.var})` }}
      >
        {cta} <span>→</span>
      </div>
    </Link>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-4xl font-bold text-[var(--color-accent)]">{number}</div>
      <div className="text-sm text-[var(--color-fg-soft)] mt-1">{label}</div>
    </div>
  );
}

function Highlight({ emoji, title, body }: { emoji: string; title: string; body: string }) {
  return (
    <div className="p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">{body}</p>
    </div>
  );
}

function StartHere({ who, cta, href, color, tips }: { who: string; cta: string; href: string; color: string; tips: string[] }) {
  return (
    <div className="p-7 rounded-2xl bg-[var(--color-bg-card)] border-t-4" style={{ borderTopColor: color }}>
      <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color }}>Para ti si eres…</div>
      <p className="text-lg font-semibold mb-4">{who}</p>
      <ul className="space-y-2 mb-6">
        {tips.map((t, i) => (
          <li key={i} className="text-sm text-[var(--color-fg-soft)] flex gap-2">
            <span style={{ color }} className="flex-shrink-0">→</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[var(--color-bg)] font-mono"
        style={{ background: color }}
      >
        {cta} <span>→</span>
      </Link>
    </div>
  );
}
