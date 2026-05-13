import Link from "next/link";
import { failedReplaceX, failedNeverX, historicFailed, type Prediccion } from "@/content/predicciones";

export const metadata = {
  title: "¿Nos quedamos sin trabajo? · IA en familia",
  description: "Tres respuestas, todas defendibles. Y los CEOs llevan equivocándose 70 años.",
};

export default function FuturoPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
        El gran debate · Empleo, IA, futuro
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-8">
        ¿Nos quedamos <span className="font-serif italic text-[var(--color-accent)]">sin trabajo</span>?
      </h1>
      <p className="text-2xl md:text-3xl text-[var(--color-fg-soft)] font-light max-w-3xl leading-snug mb-16">
        Tres respuestas. Todas defendibles. Ninguna verificable hasta que pase. Y los
        que mejor pagan por opinar llevan <strong className="text-[var(--color-fg)]">décadas</strong> equivocándose.
      </p>

      {/* ============ SÍ ============ */}
      <section className="mb-24">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-5xl font-extrabold text-[var(--color-good)]">SÍ</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Es una revolución equiparable a las anteriores.</h2>
        </div>

        <div className="prose-custom max-w-3xl">
          <p>
            La IA generativa puede hoy hacer, en segundos y por céntimos, tareas que
            requerían horas de un profesional cualificado: redactar un contrato, traducir
            un libro, leer una resonancia, hacer una tabla de Excel, escribir código que
            funciona. Y la curva sigue subiendo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <StatCard
            number="300M"
            color="var(--color-good)"
            label="empleos a tiempo completo globalmente expuestos a IA generativa"
            source="Goldman Sachs · marzo 2023"
          />
          <StatCard
            number="40%"
            color="var(--color-good)"
            label="del empleo global expuesto; hasta 60% en economías avanzadas"
            source="FMI · enero 2024"
          />
          <StatCard
            number="25%"
            color="var(--color-good)"
            label="de trabajadores en ocupaciones con alguna exposición a IA"
            source="OIT/ILO · mayo 2025"
          />
        </div>

        <h3 className="text-xl font-bold mt-10 mb-4">Casos reales 2024-2026 donde sí se ha sustituido humano</h3>

        <div className="space-y-4 mb-8">
          <CaseCard
            company="Klarna"
            year="2024"
            action="Anunció que su asistente IA (OpenAI) hacía el trabajo de 700 agentes humanos de atención al cliente. Siemiatkowski presumió de $40M de ahorro."
            link="https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
            linkText="Comunicado Klarna · feb 2024"
          />
          <CaseCard
            company="BT (British Telecom)"
            year="2023"
            action="55.000 despidos hasta 2030, ~10.000 específicamente reemplazados por IA. Allison Kirkby reafirmó en 2025 que podrían ser más."
            link="https://www.bbc.com/news/business-65937848"
            linkText="BBC · mayo 2023"
          />
          <CaseCard
            company="IBM"
            year="2023-2025"
            action="Arvind Krishna pausó contratación para ~7.800 puestos de back-office. En 2025, AskHR automatiza el 94% de tareas rutinarias de RR.HH."
            link="https://www.bloomberg.com/news/articles/2023-05-01/ibm-to-pause-hiring-for-back-office-jobs-that-ai-could-kill"
            linkText="Bloomberg · mayo 2023"
          />
          <CaseCard
            company="Hollywood (huelgas WGA + SAG-AFTRA)"
            year="2023"
            action="148 días de huelga de guionistas + 118 días de actores, motivo principal: protegerse de la sustitución por IA. Acuerdos firmados pero post-huelga los estudios siguen reduciendo plantillas."
            link="https://www.wga.org/contracts/contracts/mba/summary-of-the-2023-wga-mba"
            linkText="Acuerdo WGA"
          />
        </div>

        <SummaryBox
          color="var(--color-good)"
          title='El argumento "SÍ" en una línea'
          body="La revolución industrial automatizó el músculo. Internet automatizó la distribución. La IA generativa automatiza algo nuevo: el trabajo cognitivo de oficina. Negar que va a desplazar puestos es negar la propia historia de la tecnología."
        />
      </section>

      {/* ============ NO ============ */}
      <section className="mb-24">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-5xl font-extrabold text-[var(--color-bad)]">NO</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">La IA tiene límites duros que el hype esconde.</h2>
        </div>

        <div className="prose-custom max-w-3xl">
          <p>
            Mirando los mismos datos, otros llegan a la conclusión opuesta. Las cifras
            de despliegue real no acompañan al hype:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <StatCard
            number="95%"
            color="var(--color-bad)"
            label="de organizaciones con inversión en IA generativa obtienen retorno CERO"
            source="MIT Project NANDA · agosto 2025"
          />
          <StatCard
            number="0,5%"
            color="var(--color-bad)"
            label="lo que puntúa GPT-5.5 (mejor IA del mundo) en ARC-AGI-3"
            source="Humanos: 100%. Mayo 2026"
          />
          <StatCard
            number="$14B"
            color="var(--color-bad)"
            label="pérdidas proyectadas de OpenAI en 2026. No rentable hasta 2029"
            source="Filtración propia · oct 2025"
          />
        </div>

        <h3 className="text-xl font-bold mt-10 mb-4">Casos reales donde la IA falló al sustituir humano</h3>

        <div className="space-y-4 mb-8">
          <CaseCard
            company="Klarna (vuelta atrás)"
            year="2025"
            action="En mayo 2025 Siemiatkowski admitió que la calidad cayó y empezó a recontratar agentes humanos. La famosa historia de éxito se convirtió en historia cautionary."
            link="https://www.bloomberg.com/news/articles/2025-05-08/klarna-turns-from-ai-to-real-person-customer-service"
            linkText="Bloomberg · mayo 2025"
          />
          <CaseCard
            company="McDonald's × IBM"
            year="2024"
            action="Cancelado tras 2 años. Detonante: TikTok mostrando 21 menús de McNuggets sumados, bacon en helados, 9 tés helados en lugar de 1."
            link="https://www.cnbc.com/2024/06/17/mcdonalds-cuts-ties-with-ibm-on-ai-drive-thru-ordering.html"
            linkText="CNBC · junio 2024"
          />
          <CaseCard
            company="Cruise (GM)"
            year="2023-2024"
            action="Tras atropello en SF (oct 2023), se reveló que cada vehículo necesitaba 1,5 operadores humanos remotos. GM disolvió la división en 2024."
            link="https://www.cnbc.com/2023/11/06/cruise-confirms-robotaxis-rely-on-human-assistance-every-4-to-5-miles.html"
            linkText="CNBC · noviembre 2023"
          />
          <CaseCard
            company="Amazon Just Walk Out"
            year="2024"
            action="Las tiendas 'sin cajeros' tenían ~1.000 personas en India revisando vídeo. 700 de cada 1.000 compras necesitaban verificación humana. Amazon retiró la tecnología."
            link="https://www.businessinsider.com/amazons-just-walk-out-actually-1-000-people-in-india-2024-4"
            linkText="Business Insider · abril 2024"
          />
          <CaseCard
            company="Builder.ai"
            year="2025"
            action="Valorada en $1.500M vendía que su IA construía apps. Quebró en mayo 2025: 700 ingenieros indios escribían el código a mano. Fraude masivo."
            link="https://www.bloomberg.com/news/articles/2025-05-30/builder-ai-software-startup-files-insolvency-in-the-uk"
            linkText="Bloomberg · mayo 2025"
          />
        </div>

        <SummaryBox
          color="var(--color-bad)"
          title='El argumento "NO" en una línea'
          body={
            <>
              La IA actual <em>parece</em> mucho más capaz de lo que en realidad es. En
              laboratorio brilla, en producción se rompe en cuanto cambia el contexto.
              Lo "automatizable" hoy es un subconjunto mucho menor del que el hype
              sugiere. <Link href="/jugar/arc-agi-3" className="text-[var(--color-accent)] underline">Pruébalo tú mismo</Link>.
            </>
          }
        />
      </section>

      {/* ============ NADIE SABE ============ */}
      <section className="mb-24">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-5xl font-extrabold text-[var(--color-warn)]">¿?</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">La verdad: nadie puede saberlo.</h2>
        </div>

        <div className="prose-custom max-w-3xl">
          <p>
            <strong>Los expertos que cobran por predecir el futuro de la IA llevan 70 años
            equivocándose</strong> — por los dos lados. Léelo despacio: mañana volveréis a
            escuchar predicciones con la misma seguridad. Muchas estarán equivocadas.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-4 flex items-center gap-3 flex-wrap">
          <span className="font-mono text-sm px-3 py-1 rounded bg-[var(--color-bad)]/20 text-[var(--color-bad)]">FALLARON</span>
          "La IA reemplazará X en N años"
        </h3>

        <div className="space-y-4">
          {failedReplaceX.map((p, i) => (
            <PredictionCard key={i} {...p} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-4 flex items-center gap-3 flex-wrap">
          <span className="font-mono text-sm px-3 py-1 rounded bg-[var(--color-bad)]/20 text-[var(--color-bad)]">FALLARON</span>
          "La IA NUNCA podrá X"
        </h3>

        <div className="space-y-4">
          {failedNeverX.map((p, i) => (
            <PredictionCard key={i} {...p} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mt-16 mb-4 flex items-center gap-3 flex-wrap">
          <span className="font-mono text-sm px-3 py-1 rounded bg-[var(--color-fg-mute)]/20 text-[var(--color-fg-mute)]">HISTÓRICAS</span>
          Predicciones tecnológicas famosamente equivocadas
        </h3>

        <div className="space-y-4">
          {historicFailed.map((p, i) => (
            <PredictionCard key={i} {...p} />
          ))}
        </div>

        <div className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(245,158,11,0.08)] border border-[var(--color-warn)]/30">
          <div className="font-mono text-xs text-[var(--color-warn)] uppercase tracking-wider mb-3">La lección</div>
          <p className="text-lg text-[var(--color-fg)] leading-relaxed mb-4">
            <strong>Ambos extremos se equivocan sistemáticamente</strong>. Los optimistas
            exageran la velocidad. Los escépticos infraestiman las capacidades emergentes.
            La verdad casi siempre es: <em>pasará algo distinto a lo previsto, en plazos
            distintos, con consecuencias distintas</em>.
          </p>
          <p className="text-base text-[var(--color-fg-soft)] leading-relaxed">
            Tomar las predicciones como hipótesis, no como hechos. Y sospechar especialmente
            de las predicciones de quienes tienen interés financiero en que sean ciertas.
          </p>
        </div>
      </section>

      {/* ============ TU FAMILIA ============ */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Entonces, <span className="font-serif italic text-[var(--color-accent)]">¿qué hacemos en casa</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <AdviceCard
            number="01"
            title="No esperéis a saber qué pasará"
            body="Cuando se sepa, será tarde. Los que ya saben usar IA hoy son los que mejor se posicionarán pase lo que pase. El conocimiento no caduca, el miedo paraliza."
            link="/casos"
            linkText="Empezar por casos reales"
          />
          <AdviceCard
            number="02"
            title="Centraos en lo que la IA NO puede"
            body="Trabajo físico no rutinario (fontanería, electricidad, cuidados). Juicio profesional con responsabilidad legal. Creatividad de alto nivel. Si tu trabajo es uno de esos, dormid tranquilos."
            link="/explorar/problemas-y-dilemas"
            linkText="Ver qué profesiones aguantan"
          />
          <AdviceCard
            number="03"
            title="Sed quienes pilotan la IA, no los pilotados"
            body="En tu sector, sé quien sepa usar la IA mejor que los demás. La diferencia productiva no será 2x, será 10x. Tu valor en el mercado lo decide ese ratio."
            link="/jugar/prompt-battle"
            linkText="Cómo se habla bien con la IA"
          />
        </div>

        <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)]">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">
            Para vuestra empresa de reformas (ejemplo)
          </div>
          <p className="text-base text-[var(--color-fg)] leading-relaxed mb-3">
            La parte de oficina (presupuestos, comunicación, planos, búsqueda de
            proveedores) <strong>se acelera 10x con IA hoy mismo</strong>. La parte de
            obra <strong>sigue siendo humana 20 años más</strong>. La ventaja competitiva
            es saber automatizar el papeleo antes que la competencia.
          </p>
          <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">
            <strong className="text-[var(--color-fg)]">Acción concreta:</strong> empezad
            ya a guardar fotos y datos de cada obra. Cuando llegue la herramienta que
            cruce vuestro histórico con la oferta del cliente, tendréis el mejor presupuesto
            de la ciudad. Quien no haya guardado nada empezará desde cero.
          </p>
        </div>
      </section>

      <div className="mt-20 p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-fg-mute)] leading-relaxed">
        <p className="font-mono text-xs uppercase tracking-wider mb-3">Sobre las fuentes</p>
        <p className="mb-2">
          Las citas marcadas son de cobertura pública verificable. Para citas en inglés
          preservamos el original. Algunas citas históricas (Watson-IBM, Bell-Western Union)
          tienen autenticidad disputada; las hemos etiquetado como tal o omitido.
        </p>
        <p>
          Esta página es lectura para una sobremesa familiar, no un paper académico.
        </p>
      </div>
    </div>
  );
}

function StatCard({ number, color, label, source }: { number: string; color: string; label: string; source: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border-t-4" style={{ borderTopColor: color }}>
      <div className="font-mono text-4xl md:text-5xl font-extrabold mb-2" style={{ color }}>
        {number}
      </div>
      <p className="text-sm text-[var(--color-fg-soft)] leading-snug mb-3">{label}</p>
      <p className="font-mono text-[10px] text-[var(--color-fg-mute)]">{source}</p>
    </div>
  );
}

function CaseCard({ company, year, action, link, linkText }: { company: string; year: string; action: string; link: string; linkText: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
        <h4 className="text-lg font-bold">{company}</h4>
        <span className="font-mono text-xs text-[var(--color-fg-mute)]">{year}</span>
      </div>
      <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed mb-3">{action}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
      >
        {linkText} ↗
      </a>
    </div>
  );
}

function PredictionCard({ who, role, year, prediction, translation, reality, outcome }: Prediccion) {
  return (
    <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
      <div className="p-5 border-b border-[var(--color-border)]">
        <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
          <h4 className="text-lg font-bold">{who}</h4>
          <span className="font-mono text-xs text-[var(--color-fg-mute)]">{year}</span>
        </div>
        <p className="font-mono text-xs text-[var(--color-fg-mute)]">{role}</p>
      </div>

      <div className="p-5 border-b border-[var(--color-border)]">
        <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">
          Predicción
        </div>
        <blockquote className="font-serif italic text-base text-[var(--color-fg)] leading-relaxed border-l-2 border-[var(--color-border-strong)] pl-4 whitespace-pre-line">
          {prediction}
        </blockquote>
        {translation && (
          <p className="text-xs text-[var(--color-fg-mute)] mt-3 italic">→ {translation}</p>
        )}
      </div>

      <div
        className="p-5"
        style={{
          background:
            outcome === "failed" ? "rgba(239, 68, 68, 0.08)" : "rgba(16, 185, 129, 0.08)",
        }}
      >
        <div
          className="font-mono text-[10px] uppercase tracking-wider mb-2"
          style={{ color: outcome === "failed" ? "var(--color-bad)" : "var(--color-good)" }}
        >
          {outcome === "failed" ? "Realidad 2026" : "Realidad"}
        </div>
        <p className="text-sm text-[var(--color-fg)] leading-relaxed">{reality}</p>
      </div>
    </div>
  );
}

function SummaryBox({ color, title, body }: { color: string; title: string; body: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border-l-4" style={{ borderLeftColor: color }}>
      <div className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color }}>
        {title}
      </div>
      <p className="text-base text-[var(--color-fg)] leading-relaxed">{body}</p>
    </div>
  );
}

function AdviceCard({ number, title, body, link, linkText }: { number: string; title: string; body: string; link: string; linkText: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="font-mono text-sm text-[var(--color-accent)] mb-3">{number}</div>
      <h3 className="text-lg font-bold mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed mb-4">{body}</p>
      <Link href={link} className="font-mono text-xs text-[var(--color-accent)] hover:underline">
        {linkText} →
      </Link>
    </div>
  );
}
