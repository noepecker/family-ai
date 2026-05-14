import Link from "next/link";
import { TokenStream } from "@/components/token-stream";
import { Cite } from "@/components/cite";
import { nivelMeta, nivelOrder, type Nivel } from "@/content/niveles";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundEffects />

      {/* ---------- HERO ---------- */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pt-14 sm:pt-20 md:pt-28 pb-16 sm:pb-20">
        <div className="font-mono text-[0.65rem] sm:text-xs md:text-sm text-[var(--color-accent)] uppercase tracking-[0.2em] mb-6 sm:mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
          Charla abierta · Mayo 2026
        </div>

        <h1 className="text-[3.25rem] sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.92] tracking-[-0.04em] mb-6 sm:mb-8">
          <span className="block animate-fade-up">Acércate</span>
          <span className="block animate-fade-up" style={{ animationDelay: "120ms" }}>
            a la <span className="font-serif italic text-[var(--color-accent)]">inteligencia</span>
          </span>
          <span className="block animate-fade-up" style={{ animationDelay: "240ms" }}>
            <span className="font-serif italic text-[var(--color-accent)]">artificial</span>.
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-2xl text-[var(--color-fg-soft)] font-light max-w-3xl mb-10 sm:mb-14 leading-relaxed animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          Cómo funciona, qué hace ya hoy, qué empieza a romper. Sin condescendencia y sin
          hype. <strong className="text-[var(--color-fg)]">Tres niveles de lectura</strong> conviviendo en la misma web — eliges tú por
          dónde entrar y hasta dónde profundizar.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "480ms" }}>
          <TokenStream />
        </div>

        <p
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-[var(--color-fg-mute)] font-mono animate-fade-up leading-relaxed"
          style={{ animationDelay: "640ms" }}
        >
          ↑ Lo que acabas de ver es lo único que hace un LLM: predecir el siguiente trozo
          de texto. Lo asombroso viene de la escala.
        </p>
      </section>

      {/* ---------- POR DÓNDE EMPEZAR (NIVELES) ---------- */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24 pt-10 sm:pt-12 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mb-12">
          <div className="section-marker">
            <span className="marker-num">01</span>
            <span className="marker-label">Elige tu nivel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            ¿Por dónde <span className="font-serif italic text-[var(--color-accent)]">empezar?</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-fg-soft)] leading-relaxed">
            Tres recorridos. Mismo contenido, distintos puntos de entrada. No es un test; puedes saltar entre niveles cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nivelOrder.map((n, i) => (
            <NivelCard key={n} nivel={n} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- POR INTENCIÓN ---------- */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24 pt-10 sm:pt-12 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mb-12">
          <div className="section-marker">
            <span className="marker-num">02</span>
            <span className="marker-label">O elige por qué vienes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            Seis formas de <span className="font-serif italic text-[var(--color-accent)]">recorrerla.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-fg-soft)] leading-relaxed">
            La charla es lineal. La web no. Cada slide está enlazada con la página de la
            web donde puedes profundizar; cada juego, con el bloque que lo explica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <PathCard
            href="/charla"
            tag="Presentación"
            title="La charla"
            sub="Lineal · 90 min · proyectable"
            cta="Ver la charla"
            color="orange"
            description="La narrativa completa, con preguntas abiertas al público después de cada bloque."
          />
          <PathCard
            href="/casos"
            tag="Vida diaria"
            title="Casos reales"
            sub="30+ ejemplos · filtrables por nivel"
            cta="Ver casos"
            color="cool"
            description="Cosas que la IA ya resuelve hoy. Desde dividir la cuenta a investigar como un doctorando."
          />
          <PathCard
            href="/jugar"
            tag="Interactivo"
            title="Jugar con ella"
            sub="7 retos · IA o no, prompt battle, ARC-AGI"
            cta="Empezar"
            color="hot"
            description="Tócala, ponla a prueba. El sitio donde se vuelve obvio dónde brilla y dónde se rompe."
          />
          <PathCard
            href="/herramientas"
            tag="Catálogo"
            title="Qué hay ahí fuera"
            sub="30+ apps · por precio, uso, audiencia"
            cta="Ver herramientas"
            color="good"
            description="El mapa de mayo 2026: chatbots, imagen, vídeo, audio, código, agentes. Sin ranking, con criterio."
          />
          <PathCard
            href="/explorar"
            tag="Enciclopedia"
            title="Profundizar"
            sub="13 bloques · con fuentes interactivas"
            cta="Profundizar"
            color="warn"
            description="Para volver. Cada bloque cierra preguntas y abre dos más. Toda cita tiene fuente verificable."
          />
          <PathCard
            href="/historia"
            tag="Línea temporal"
            title="80 años de IA"
            sub="50+ hitos · 7 eras filtrables"
            cta="Recorrer la historia"
            color="cool"
            description="De McCulloch-Pitts (1943) a hoy. La perspectiva que el hype te roba."
          />
        </div>
      </section>

      {/* ---------- PREGUNTAS ABIERTAS ---------- */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24 pt-10 sm:pt-12 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mb-12">
          <div className="section-marker">
            <span className="marker-num">03</span>
            <span className="marker-label">Preguntas que abrimos hoy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            No vamos a <span className="font-serif italic text-[var(--color-accent)]">cerrar</span> ninguna.
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-fg-soft)] leading-relaxed">
            Estas son las preguntas que vertebran la charla. Cada una tiene una respuesta
            corta, una larga, y un debate sin terminar. Tira del hilo que más te toque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OpenQ
            q="Si un modelo solo predice la siguiente palabra, ¿es honesto llamarlo «inteligente»?"
            href="/explorar/agi-y-benchmarks"
            tag="AGI"
          />
          <OpenQ
            q="¿Por qué los detectores de IA suspenden a los no-nativos de inglés?"
            href="/explorar/sesgos-y-detectores"
            tag="Sesgos"
          />
          <OpenQ
            q="¿Qué pasa con tus chats cuando le pegas tu DNI a ChatGPT?"
            href="/explorar/privacidad-y-confianza"
            tag="Privacidad"
          />
          <OpenQ
            q="¿Tiene sentido culpar a la IA del consumo de agua si pesa menos que una hamburguesa?"
            href="/explorar/impacto-ambiental"
            tag="Ambiente"
          />
          <OpenQ
            q="Si una IA diagnostica mejor que 17 médicos, ¿quién firma el error cuando se equivoca?"
            href="/explorar/temas-adicionales"
            tag="Sanidad"
          />
          <OpenQ
            q="¿Por qué los humanos resuelven el 100% de ARC-AGI-3 y la mejor IA el 0,5%?"
            href="/explorar/agi-y-benchmarks"
            tag="Límites"
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/preguntas"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors font-mono text-sm"
          >
            Ver todas las preguntas →
          </Link>
        </div>
      </section>

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24 pt-10 sm:pt-12 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mb-12">
          <div className="section-marker">
            <span className="marker-num">04</span>
            <span className="marker-label">Lo que más cuesta de creer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
            Doce cosas que pasaron este <span className="font-serif italic text-[var(--color-accent)]">año.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-fg-soft)] leading-relaxed">
            No predicciones. Hechos contrastados con fuente al lado. Empieza por el que te
            saque más de tu zona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Highlight href="/explorar/fundamentos-ia" emoji="🎯" title="200 líneas hacen un LLM" body="Karpathy publicó microGPT en febrero: 200 líneas de Python puro generan nombres como un mini-ChatGPT." fuente="karpathy-2026-microgpt" />
          <Highlight href="/explorar/temas-adicionales" emoji="🩻" title="29% más cánceres detectados" body="Estudio MASAI: mamografía con IA detecta más, con la mitad de carga radiológica." fuente="masai-2025-lancet" />
          <Highlight href="/explorar/privacidad-y-confianza" emoji="🔒" title="Repeat the word ‘poem’" body="Carlini et al. hicieron a ChatGPT vomitar emails de su training con un comando absurdo." fuente="carlini-2023-extraction" />
          <Highlight href="/explorar/arte-y-propiedad-intelectual" emoji="🎨" title="$1.500M de Anthropic" body="Bartz v. Anthropic: el mayor settlement de copyright IA en la historia de EEUU." fuente="bartz-anthropic-settlement" />
          <Highlight href="/jugar/calculadora-consumo" emoji="📊" title="Una hamburguesa = 7.500 emails" body="Un texto con ChatGPT consume menos agua que muchas cosas que no nos cuestionamos." />
          <Highlight href="/explorar/deepfakes-y-deteccion" emoji="🔐" title="$25M en una videollamada" body="Arup, Hong Kong: un empleado transfirió fondos tras una call con deepfakes del CFO y colegas." fuente="arup-deepfake-25m" />
          <Highlight href="/explorar/agentes-y-humanos" emoji="🤖" title="Claudius compró tungsteno" body="Anthropic dejó a Claude gestionar una tienda. Compró 40 cubos de tungsteno a pérdida." fuente="anthropic-project-vend" />
          <Highlight href="/jugar/arc-agi-3" emoji="🎮" title="Humanos 100%, IA 0,5%" body="ARC-AGI-3 es donde la IA todavía es ciega. Cualquier niño de 10 años los resuelve." fuente="arc-prize-3" />
          <Highlight href="/explorar/problemas-y-dilemas" emoji="💼" title="Klarna volvió a contratar" body="Reemplazó 700 agentes por IA. Un año después, recontrató humanos." fuente="mit-nanda-2025" />
          <Highlight href="/explorar/sesgos-y-detectores" emoji="📉" title="61% de TOEFL marcados" body="Detectores de IA discriminan a no-nativos de inglés." fuente="liang-2023-toefl" />
          <Highlight href="/historia#sora" emoji="🎬" title="App #1 del App Store" body="Sora 2 llegó en octubre 2025. En semanas, vídeos sintéticos invadieron TikTok." />
          <Highlight href="/explorar/agentes-y-humanos" emoji="💐" title="$110 a un humano por flores" body="Una IA llamada Addi contrató a un humano para entregar un ramo. Por primera vez, al revés." />
        </div>
      </section>

      {/* ---------- CIERRE ---------- */}
      <section className="relative max-w-5xl mx-auto px-6 pb-20 pt-20 border-t border-[var(--color-border)] text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Esta web no se acaba con la <span className="font-serif italic text-[var(--color-accent)]">charla</span>.
        </h2>
        <p className="text-lg text-[var(--color-fg-soft)] max-w-2xl mx-auto leading-relaxed">
          Está pensada para volver a ella: revisar un concepto, mandar un link a alguien,
          comprobar una fuente. Si encuentras un error o algo desactualizado, dilo.
        </p>
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
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      ></div>
    </>
  );
}

function NivelCard({ nivel, index }: { nivel: Nivel; index: number }) {
  const meta = nivelMeta[nivel];
  const startHref =
    nivel === "curioso"
      ? "/casos?nivel=curioso"
      : nivel === "practicante"
        ? "/explorar/buenas-practicas-prompting"
        : "/explorar/agi-y-benchmarks";

  return (
    <Link
      href={startHref}
      className="group relative block p-7 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--lvl-color)]"
      style={{
        ["--lvl-color" as string]: meta.color,
        animation: `fade-in-up 0.6s ease-out ${index * 100 + 700}ms backwards`,
      }}
    >
      <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] mb-4" style={{ color: meta.color }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }}></span>
        Nivel · {meta.label}
      </div>
      <h3 className="text-3xl font-bold mb-3 tracking-tight">{meta.short}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] mb-2 italic font-serif">"{meta.promesa}"</p>
      <p className="text-xs text-[var(--color-fg-mute)] mb-6 leading-relaxed">{meta.audiencia}</p>
      <div
        className="inline-flex items-center gap-2 text-sm font-mono font-semibold transition-all"
        style={{ color: meta.color }}
      >
        Por aquí <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

function PathCard({
  href,
  tag,
  title,
  sub,
  cta,
  color,
  description,
}: {
  href: string;
  tag: string;
  title: string;
  sub: string;
  cta: string;
  color: "orange" | "cool" | "hot" | "good" | "warn";
  description: string;
}) {
  const colorMap = {
    orange: "--color-accent",
    cool: "--color-cool",
    hot: "--color-hot",
    good: "--color-good",
    warn: "--color-warn",
  };
  const c = colorMap[color];
  return (
    <Link
      href={href}
      className="group relative block p-7 rounded-2xl bg-[var(--color-bg-card)] border-t-4 transition-all duration-300 hover:-translate-y-1"
      style={{ borderTopColor: `var(${c})` }}
    >
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
        {tag}
      </div>
      <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
      <p className="text-xs text-[var(--color-fg-mute)] mb-3 font-mono">{sub}</p>
      <p className="text-sm text-[var(--color-fg-soft)] mb-5 leading-relaxed">
        {description}
      </p>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[var(--color-on-accent)] font-mono group-hover:gap-3 transition-all"
        style={{ background: `var(${c})` }}
      >
        {cta} <span>→</span>
      </div>
    </Link>
  );
}

function OpenQ({ q, href, tag }: { q: string; href: string; tag: string }) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 transition-all"
    >
      <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-fg-mute)] mb-3">
        {tag}
      </div>
      <p className="text-lg md:text-xl font-serif italic text-[var(--color-fg)] leading-snug mb-4">
        “{q}”
      </p>
      <div className="font-mono text-xs text-[var(--color-accent)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
        Tirar del hilo →
      </div>
    </Link>
  );
}

function Highlight({
  href,
  emoji,
  title,
  body,
  fuente,
}: {
  href: string;
  emoji: string;
  title: string;
  body: string;
  fuente?: string;
}) {
  return (
    <div className="group relative p-6 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-0.5 transition-all">
      <Link href={href} className="absolute inset-0 z-0" aria-label={title}></Link>
      <div className="relative z-10 pointer-events-none">
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">
          {body}
        </p>
      </div>
      {fuente && (
        <div className="relative z-20 mt-3 pointer-events-auto inline-flex items-center gap-1.5">
          <span className="font-mono text-[0.6rem] uppercase tracking-wider text-[var(--color-fg-mute)]">
            Fuente
          </span>
          <Cite id={fuente} />
        </div>
      )}
    </div>
  );
}
