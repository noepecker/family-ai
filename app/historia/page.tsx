import Link from "next/link";
import { Timeline } from "@/components/historia/timeline";
import { eventos, eras, erasInOrder } from "@/content/historia";

export const metadata = {
  title: "Línea temporal · 80 años de IA · IA en familia",
  description:
    "De la primera neurona artificial (1943) a las hipótesis del futuro. Una línea temporal interactiva con eras, filtros y fuentes para profundizar.",
};

export default function HistoriaPage() {
  const total = eventos.length;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-32">
        <div className="font-mono text-sm text-[var(--color-accent)] uppercase tracking-wider mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow" />
          Línea temporal · 80 años en {total} hitos
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-[-0.04em] mb-8">
          La historia <span className="font-serif italic text-[var(--color-accent)]">de la IA</span>,
          en una pantalla.
        </h1>

        <p className="text-xl md:text-2xl text-[var(--color-fg-soft)] font-light max-w-3xl leading-snug mb-12">
          Desde la primera neurona artificial en papel (1943) hasta las hipótesis
          del futuro. Filtra por era o categoría, abre cada hito para profundizar
          con fuentes. Pensado para verlo en familia y poder bajar a detalle
          cuando alguien quiera.
        </p>

        {/* ============ Mini-estadísticas por era ============ */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-16">
          {erasInOrder.map((era) => {
            const e = eras[era];
            const count = eventos.filter((ev) => ev.era === era).length;
            return (
              <div
                key={era}
                className="p-4 rounded-xl bg-[var(--color-bg-card)] border-t-2"
                style={{ borderTopColor: e.color }}
              >
                <div
                  className="font-mono text-3xl font-extrabold"
                  style={{ color: e.color }}
                >
                  {count}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-fg-mute)] mt-1">
                  {e.range}
                </div>
                <div className="text-xs text-[var(--color-fg-soft)] mt-1 leading-tight">
                  {e.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* ============ Cómo usar (mini-guía) ============ */}
        <div className="mb-12 p-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] grid grid-cols-1 md:grid-cols-3 gap-5">
          <Guide
            num="01"
            title="Vista rápida"
            body="Mira el ribbon de eras y los títulos. Te da una idea general en 60 segundos."
          />
          <Guide
            num="02"
            title="Filtra"
            body="Toca una era o una categoría para centrarte. Combina filtros como quieras."
          />
          <Guide
            num="03"
            title="Profundiza"
            body="Toca un hito para ver el contexto, una curiosidad y las fuentes."
          />
        </div>

        {/* ============ Timeline ============ */}
        <Timeline />

        {/* ============ Bloque de cierre ============ */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
          <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
            Lección de fondo
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            La IA llevaba <span className="font-serif italic text-[var(--color-accent)]">80 años</span> avanzando
            cuando ChatGPT llegó a tu salón.
          </h2>
          <p className="text-base md:text-lg text-[var(--color-fg-soft)] leading-relaxed mb-3">
            Cada hito de esta línea fue, en su momento, “la cosa nueva”.
            McCulloch-Pitts en 1943, el perceptrón en 1957, AlexNet en 2012,
            ChatGPT en 2022. Casi todos los expertos del momento se equivocaron
            prediciendo lo que vendría después — por exceso o por defecto.
          </p>
          <p className="text-base md:text-lg text-[var(--color-fg-soft)] leading-relaxed">
            La conclusión útil para la familia no es predecir, es aprender a leer
            estos cambios cuando llegan. Si tenéis curiosidad, seguid bajando: en{" "}
            <Link href="/explorar" className="text-[var(--color-accent)] underline">
              Explorar
            </Link>{" "}
            está la enciclopedia de bloques largos, y en{" "}
            <Link href="/futuro" className="text-[var(--color-accent)] underline">
              Futuro
            </Link>{" "}
            está el debate sobre empleo y predicciones equivocadas.
          </p>
        </div>

        {/* ============ Sobre los datos ============ */}
        <div className="mt-12 p-6 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm text-[var(--color-fg-mute)] leading-relaxed">
          <p className="font-mono text-xs uppercase tracking-wider mb-3">
            Sobre las fuentes
          </p>
          <p className="mb-2">
            Las fechas y citas se han verificado contra fuentes públicas
            (Wikipedia, papers originales, comunicados oficiales, prensa
            verificada). Las cifras de coste, capitalización y benchmarks son las
            mejores estimaciones disponibles a fecha de mayo de 2026.
          </p>
          <p>
            La sección de “Hipótesis del futuro” no son predicciones del autor:
            son los escenarios más citados en la conversación pública, con la
            fuente de cada uno. Léelos como hipótesis, no como hechos.
          </p>
        </div>
      </div>
    </div>
  );
}

function Guide({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="font-mono text-xs text-[var(--color-accent)] mb-2">{num}</div>
      <h3 className="text-base font-bold mb-1">{title}</h3>
      <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed">{body}</p>
    </div>
  );
}
