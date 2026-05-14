import Link from "next/link";
import { notFound } from "next/navigation";
import { bloques, getBloque, tagLabels } from "@/content/bloques";
import { loadMarkdown, addHeadingIds, extractToc } from "@/lib/markdown";
import { InlineFaq } from "@/components/inline-faq";

export function generateStaticParams() {
  return bloques.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bloque = getBloque(slug);
  if (!bloque) return { title: "Bloque no encontrado" };
  return {
    title: `${bloque.title} · Acércate a la IA`,
    description: bloque.short,
  };
}

export default async function BloqueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bloque = getBloque(slug);
  if (!bloque) notFound();

  const html = await loadMarkdown(bloque.file);
  const htmlWithIds = addHeadingIds(html);
  const toc = extractToc(html);

  const currentIndex = bloques.findIndex((b) => b.slug === slug);
  const prev = currentIndex > 0 ? bloques[currentIndex - 1] : null;
  const next = currentIndex < bloques.length - 1 ? bloques[currentIndex + 1] : null;

  const tagInfo = tagLabels[bloque.tag];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12 pb-32">
      <Link
        href="/explorar"
        className="font-mono text-sm text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2 mb-10"
      >
        <span>←</span> Volver a explorar
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        <article>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-5xl">{bloque.emoji}</div>
              <div>
                <div className="font-mono text-xs text-[var(--color-fg-mute)] mb-1">Bloque {bloque.number} · {bloque.duration}</div>
                <div
                  className="font-mono text-[11px] uppercase tracking-wider inline-block px-2 py-1 rounded"
                  style={{ color: tagInfo.color, background: `${tagInfo.color}15` }}
                >
                  {tagInfo.label}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mt-6">
              {bloque.title}
            </h1>
            <p className="text-lg text-[var(--color-fg-soft)] mt-4 font-light leading-relaxed max-w-3xl">
              {bloque.short}
            </p>
          </div>

          <div
            className="prose-custom max-w-3xl"
            dangerouslySetInnerHTML={{ __html: htmlWithIds }}
          />

          <InlineFaq slug={slug} />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev && <NavCard bloque={prev} direction="prev" />}
            {next && <NavCard bloque={next} direction="next" />}
          </div>
        </article>

        {toc.length > 2 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
                En esta página
              </div>
              <ul className="space-y-1.5 text-sm border-l border-[var(--color-border)]">
                {toc.map((item) => (
                  <li key={item.id} style={{ paddingLeft: item.level === 3 ? 24 : 12 }}>
                    <a
                      href={`#${item.id}`}
                      className="block py-1 text-[var(--color-fg-mute)] hover:text-[var(--color-accent)] transition-colors leading-snug"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

function NavCard({ bloque, direction }: { bloque: { slug: string; title: string; emoji: string; number: string }; direction: "prev" | "next" }) {
  return (
    <Link
      href={`/explorar/${bloque.slug}`}
      className={`block p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors ${direction === "next" ? "md:text-right" : ""}`}
    >
      <div className="font-mono text-xs text-[var(--color-fg-mute)] mb-2">
        {direction === "prev" ? "← Anterior" : "Siguiente →"} · Bloque {bloque.number}
      </div>
      <div className="text-lg font-semibold flex items-center gap-2" style={{ flexDirection: direction === "next" ? "row-reverse" : "row" }}>
        <span>{bloque.emoji}</span>
        <span>{bloque.title}</span>
      </div>
    </Link>
  );
}
