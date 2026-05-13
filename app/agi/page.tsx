import Link from "next/link";

export const metadata = {
  title: "AGI · IA en familia",
  description: "Qué es la AGI, cuánto falta, qué pasaría si llegamos. Sin hype y sin apocalipsis.",
};

export default function AgiPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        El gran objetivo · El gran debate
      </div>

      <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-8">
        AGI
      </h1>
      <p className="text-2xl md:text-3xl text-[var(--color-fg-soft)] font-light max-w-3xl leading-snug mb-16">
        <em className="font-serif italic text-[var(--color-accent)]">Artificial General Intelligence</em>.
        El objetivo declarado de OpenAI, Anthropic, DeepMind. Lo que están construyendo todos.
        Lo que mueve un billón de dólares de inversión. Lo que nadie sabe exactamente qué es.
      </p>

      <Section number="01" title="¿Qué es?">
        <p>
          AGI quiere decir <strong>Inteligencia Artificial General</strong>: una IA que pueda
          hacer cualquier tarea intelectual que pueda hacer un humano, igual de bien o mejor.
          No "una IA buena en algo" como las que hay hoy, sino una IA capaz de aprender,
          razonar y resolver lo que sea, con la flexibilidad de una persona inteligente.
        </p>
        <p>
          La trampa: <strong>nadie tiene la misma definición</strong>. Cada laboratorio
          tiene la suya, alineada con lo que ellos están construyendo. La definición es,
          en parte, parte de la batalla.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <DefCard
            who="OpenAI"
            quote="Sistemas altamente autónomos que superen a los humanos en la mayoría del trabajo económicamente valioso."
            note="Definición operacional, vinculada al impacto económico. Sam Altman ya dice que 'AGI' no es un término útil y habla de superinteligencia directamente."
          />
          <DefCard
            who="DeepMind (Hassabis)"
            quote="Sistema que iguale o supere las capacidades cognitivas humanas en todas las tareas relevantes."
            note="Insiste en que faltan 1-2 breakthroughs tipo Transformer o AlphaGo antes de llegar."
          />
          <DefCard
            who="Anthropic (Amodei)"
            quote="Un país de genios en un datacenter — IA al nivel de Premio Nobel en múltiples campos."
            note="Definición más ambiciosa. Implica capacidad de descubrimiento científico de frontera."
          />
          <DefCard
            who="François Chollet"
            quote="Capacidad de adquirir nuevas habilidades eficientemente ante problemas nunca vistos."
            note="Lo operacionaliza con el test ARC-AGI. Crítico con la idea de 'AGI por escala'."
          />
        </div>
      </Section>

      <Section number="02" title="Cómo se mide">
        <p>
          Si todos disputan qué <em>es</em>, también disputan cómo <em>medirlo</em>. La
          comunidad usa varios benchmarks (exámenes estándar) para comparar modelos.
          Estado en mayo 2026:
        </p>

        <div className="space-y-3 my-6">
          <Benchmark
            name="MMLU"
            short="Conocimiento general tipo examen"
            state="Saturado. Ya no discrimina."
            color="var(--color-fg-mute)"
          />
          <Benchmark
            name="GPQA Diamond"
            short="Ciencia nivel doctorado"
            state="Claude Mythos 94,6% · Gemini 3.1 Pro 94,1%. Prácticamente saturado."
            color="var(--color-warn)"
          />
          <Benchmark
            name="Humanity's Last Exam"
            short="2.500 preguntas multimodales de frontera académica"
            state="Hace un año: ~10%. Hoy: Claude Mythos 64,7%, GPT-5.4 Pro 58,7%. Sube rápido."
            color="var(--color-cool)"
          />
          <Benchmark
            name="SWE-bench Verified"
            short="Resolver issues reales de GitHub"
            state="Claude Opus 4.5 lidera con 80,9%. Programación cerca de nivel senior."
            color="var(--color-cool)"
          />
          <Benchmark
            name="Terminal-Bench 2.0"
            short="Agentes ejecutando tareas en una terminal"
            state="GPT-5.5 lidera con 82,7%. Esto es lo que está pasando AHORA."
            color="var(--color-cool)"
          />
          <Benchmark
            name="ARC-AGI-3"
            short="Aprender mecánicas nuevas en entornos interactivos sin instrucciones"
            state="Humanos: 100%. Mejor IA del mundo: 0,51%. El abismo."
            color="var(--color-bad)"
            highlight
          />
        </div>

        <div className="my-8 flex flex-wrap gap-3">
          <Link
            href="/jugar/arc-agi-3"
            className="px-5 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Prueba ARC-AGI-3 ahora →
          </Link>
          <Link
            href="/jugar/contra-la-ia"
            className="px-5 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            Donde la IA aplasta →
          </Link>
        </div>
      </Section>

      <Section number="03" title="Dónde estamos hoy (mayo 2026)">
        <p>
          La IA <strong>ya supera a los humanos</strong> en muchísimas tareas concretas:
          traducir 100 idiomas en segundos, leer un PDF de 500 páginas en 2 segundos,
          programar correctamente la mayoría de tareas de un junior, resolver matemáticas
          de olimpiada, descubrir estructura de proteínas (Nobel 2024 a AlphaFold).
        </p>
        <p>
          Pero <strong>todavía falla feo</strong> en cosas que un niño de 7 años hace en
          segundos: aprender mecánicas nuevas sin guía, planificar a largo plazo con
          recursos limitados, mantener coherencia en tareas largas con muchos pasos,
          razonar con sentido común sobre el mundo físico.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
          <Quadrant
            who="Cerca · 2026-2027"
            colorBg="rgba(255, 87, 34, 0.1)"
            color="var(--color-accent)"
            people={[
              ["Dario Amodei", "Anthropic CEO", "2026-2027"],
              ["Elon Musk", "xAI", "2026"],
              ["Sam Altman", "OpenAI CEO", "'esta década'"],
            ]}
          />
          <Quadrant
            who="Lejos · 5-10 años o nunca"
            colorBg="rgba(56, 189, 248, 0.1)"
            color="var(--color-cool)"
            people={[
              ["Demis Hassabis", "DeepMind CEO", "5-10 años"],
              ["François Chollet", "ARC Prize", "Faltan breakthroughs"],
              ["Yann LeCun", "ex-Meta", "Nunca con LLMs"],
            ]}
          />
        </div>

        <p className="text-sm text-[var(--color-fg-mute)] italic">
          Nota: los que dicen "cerca" suelen ser los que están vendiendo o levantando
          capital. Los que dicen "lejos" suelen ser académicos sin presión de inversores.
          Ambos sesgos importan.
        </p>
      </Section>

      <Section number="04" title="Qué falta">
        <p>
          Hay varios candidatos a lo que llamamos <em>el ingrediente que falta</em>.
          Los principales:
        </p>

        <div className="space-y-4 my-6">
          <MissingPiece
            title="Aprender en un solo intento (one-shot learning)"
            body="Un humano ve algo nuevo una vez y lo entiende. La IA necesita miles de ejemplos. ARC-AGI mide exactamente esto."
          />
          <MissingPiece
            title="Planificación largo plazo"
            body="Hacer un proyecto de 6 meses con 200 decisiones encadenadas. Hoy los agentes IA se pierden tras 30 pasos."
          />
          <MissingPiece
            title="World model"
            body="Una representación interna de cómo funciona el mundo físico. LeCun lleva años defendiendo esto como la pieza ausente."
          />
          <MissingPiece
            title="Memoria persistente"
            body="Recordar tu conversación de hace 3 meses sin trucos. Hoy 'memory' es un parche sobre cada chat."
          />
          <MissingPiece
            title="Causalidad real"
            body="Distinguir correlación de causa. Los LLMs ven patrones, no entienden el porqué profundo."
          />
          <MissingPiece
            title="Eficiencia energética"
            body="Tu cerebro funciona con 20 W. GPT-5 necesita un datacenter de 100 MW. Algo no escala."
          />
        </div>
      </Section>

      <Section number="05" title="Si llegamos · escenarios">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
          <Scenario
            title="El escenario optimista"
            color="var(--color-good)"
            items={[
              "Cura para Alzheimer, Parkinson, cánceres raros en una década.",
              "Tutor personalizado para cada niño del planeta.",
              "Trabajo de oficina automatizado → semana laboral de 3 días.",
              "Diseño de proteínas / materiales / fármacos a velocidad de descubrimiento masivo.",
              "Fusión nuclear, clima estabilizado, transporte limpio.",
              "Acceso universal a asesoría médica, legal, técnica de alto nivel.",
            ]}
          />
          <Scenario
            title="El escenario pesimista"
            color="var(--color-bad)"
            items={[
              "Concentración brutal de riqueza en quien tenga AGI primero.",
              "Desempleo masivo sin transición ordenada.",
              "Manipulación electoral y social a escala industrial.",
              "Armas biológicas / químicas / cibernéticas diseñadas en horas.",
              "Pérdida de control: AGI con objetivos no alineados (the alignment problem).",
              "Vigilancia total + gobiernos autoritarios con superinteligencia.",
            ]}
          />
        </div>
        <p className="text-sm text-[var(--color-fg-mute)] italic">
          La realidad será probablemente <strong>una mezcla</strong>. El mismo modelo cura cánceres
          y diseña armas. Las mismas semanas que ganamos por automatización las perdemos por
          desempleo brusco. La pregunta no es si AGI será buena o mala, sino <em>quién la
          controla</em> y <em>cómo se reparte</em>.
        </p>
      </Section>

      <Section number="06" title="El paper que todos leen: AI 2027">
        <p>
          En abril 2025, <strong>Daniel Kokotajlo</strong> (ex-OpenAI), Eli Lifland,
          Thomas Larsen y Romeo Dean publicaron <em>AI 2027</em>: un escenario detallado
          mes a mes de cómo podría desarrollarse la AGI. Se ha vuelto lectura obligada en
          círculos de policy.
        </p>
        <div className="my-6 space-y-2">
          <TimelineRow date="2026" event="Agentes IA generalizados ejecutando tareas en internet" />
          <TimelineRow date="Q1 2027" event="Codificación totalmente automatizada en frontier labs" />
          <TimelineRow date="Q3 2027" event="Investigación científica de IA acelerada por IA" />
          <TimelineRow date="Finales 2027" event='"Intelligence explosion": IA mejora IA recursivamente' highlight />
        </div>
        <p>
          El paper plantea <strong>dos finales</strong>: <em>slowdown</em> (la humanidad
          reacciona, ralentiza, mete checks) y <em>race</em> (despliegue acelerado, riesgo
          de takeover por concentración o desalineamiento). Los autores ajustaron en 2025
          algo hacia atrás sus timelines: la cosa va algo más lenta de lo que pensaron.
        </p>
        <p className="text-sm text-[var(--color-fg-mute)]">
          Lectura completa, gratis: <a className="text-[var(--color-accent)] underline" href="https://ai-2027.com" target="_blank" rel="noopener noreferrer">ai-2027.com</a>
        </p>
      </Section>

      <Section number="07" title="Y luego qué">
        <p>
          La industria asume que después de AGI vendría la <strong>superinteligencia</strong>
          (ASI): una IA que supere a todos los humanos juntos en todas las dimensiones,
          incluida la capacidad de auto-mejorarse. Sam Altman ya escribe casi solo sobre
          ASI, no AGI.
        </p>
        <p>
          Aquí entra en escena el famoso <strong>alignment problem</strong>: ¿cómo te
          aseguras de que una IA mucho más lista que tú quiera <em>lo que tú quieres</em>?
          Sin esa garantía, una ASI mal alineada es un riesgo existencial — y eso lo
          dicen incluso quienes la están construyendo. Anthropic existe específicamente
          por esa preocupación.
        </p>
        <p>
          Las regulaciones intentan ponerse al día. La <strong>AI Act europea</strong>
          aplica desde agosto 2025 obligaciones a modelos GPAI. EEUU rescindió en enero 2025
          la regulación previa. La carrera geopolítica (EEUU vs China) limita lo que se
          puede frenar sin perder ventaja.
        </p>
      </Section>

      <Section number="08" title="Cómo vivir esto en familia">
        <p>
          AGI o no AGI, la IA que YA existe va a cambiar profundamente vuestro trabajo,
          vuestros estudios, vuestra forma de informarte y comunicarte. Tres consejos
          prácticos sin caer en el hype:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <Tip
            title="Aprended a usarla bien"
            body="No leerá vuestro Slack solo. Vosotros tenéis que aprender a hablarle, iterar, verificar."
            link="/casos"
            linkText="Ver casos"
          />
          <Tip
            title="Mantened el espíritu crítico"
            body="Verifica datos importantes fuera de la IA. Acordad la palabra clave contra deepfakes. Hoy."
            link="/jugar/contra-la-ia"
            linkText="Probar contra la IA"
          />
          <Tip
            title="Comprended qué falla"
            body="Saber DÓNDE la IA todavía es ciega os hace ciudadanos mejor informados, no víctimas."
            link="/jugar/arc-agi-3"
            linkText="Jugar ARC-AGI-3"
          />
        </div>
      </Section>

      <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
        <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
          Para profundizar
        </div>
        <p className="text-base text-[var(--color-fg-soft)] leading-relaxed mb-4">
          El bloque <strong className="text-[var(--color-fg)]">07. AGI y benchmarks</strong> de
          la enciclopedia tiene los datos completos: cita exacta de cada CEO, scores actualizados
          de cada benchmark, links a papers, modelos top de mayo 2026.
        </p>
        <Link
          href="/explorar/agi-y-benchmarks"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
        >
          Leer el bloque entero →
        </Link>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-sm text-[var(--color-accent)]">{number}</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="prose-custom max-w-3xl">{children}</div>
    </section>
  );
}

function DefCard({ who, quote, note }: { who: string; quote: string; note: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">{who}</div>
      <p className="font-serif italic text-lg text-[var(--color-fg)] leading-snug mb-3">"{quote}"</p>
      <p className="text-xs text-[var(--color-fg-mute)] leading-relaxed">{note}</p>
    </div>
  );
}

function Benchmark({
  name,
  short,
  state,
  color,
  highlight,
}: {
  name: string;
  short: string;
  state: string;
  color: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-xl border-l-4 ${highlight ? "bg-[var(--color-bg-card)] border" : "bg-[var(--color-bg-card)]"}`}
      style={{ borderLeftColor: color, borderColor: highlight ? color : undefined }}
    >
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
        <div>
          <span className="font-mono font-bold text-base text-[var(--color-fg)]">{name}</span>
          <span className="text-xs text-[var(--color-fg-mute)] ml-3">{short}</span>
        </div>
      </div>
      <p className="text-sm text-[var(--color-fg-soft)]" style={{ color: highlight ? color : undefined }}>
        {state}
      </p>
    </div>
  );
}

function Quadrant({
  who,
  colorBg,
  color,
  people,
}: {
  who: string;
  colorBg: string;
  color: string;
  people: [string, string, string][];
}) {
  return (
    <div className="p-6 rounded-2xl border-t-4" style={{ borderTopColor: color, background: colorBg }}>
      <div className="font-mono text-sm uppercase tracking-wider font-bold mb-4" style={{ color }}>
        {who}
      </div>
      <div className="space-y-3">
        {people.map(([name, role, when]) => (
          <div key={name} className="flex items-baseline justify-between gap-3">
            <div>
              <div className="font-semibold text-base">{name}</div>
              <div className="text-xs text-[var(--color-fg-mute)]">{role}</div>
            </div>
            <div className="font-mono text-sm font-bold whitespace-nowrap" style={{ color }}>
              {when}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissingPiece({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 rounded-xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)]">
      <div className="font-bold text-base mb-1">{title}</div>
      <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">{body}</p>
    </div>
  );
}

function Scenario({ title, color, items }: { title: string; color: string; items: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border-t-4" style={{ borderTopColor: color }}>
      <div className="font-mono text-sm uppercase tracking-wider font-bold mb-4" style={{ color }}>
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-[var(--color-fg-soft)] flex gap-2 leading-relaxed">
            <span style={{ color }}>→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineRow({ date, event, highlight }: { date: string; event: string; highlight?: boolean }) {
  return (
    <div
      className={`flex items-baseline gap-4 p-3 rounded-lg ${highlight ? "bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)]" : "bg-[var(--color-bg-card)]"}`}
    >
      <span className="font-mono text-sm font-bold w-28 flex-shrink-0" style={{ color: highlight ? "var(--color-accent)" : "var(--color-fg-mute)" }}>
        {date}
      </span>
      <span className="text-base">{event}</span>
    </div>
  );
}

function Tip({ title, body, link, linkText }: { title: string; body: string; link: string; linkText: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] mb-4 leading-relaxed">{body}</p>
      <Link href={link} className="font-mono text-xs text-[var(--color-accent)] hover:underline">
        {linkText} →
      </Link>
    </div>
  );
}
