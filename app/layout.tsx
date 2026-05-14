import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NivelProvider, NivelChip } from "@/components/nivel-provider";
import { FromSlideBanner } from "@/components/from-slide-banner";

export const metadata: Metadata = {
  title: "Acércate a la IA · una charla abierta",
  description:
    "Cómo funciona la IA, qué hace ya hoy y qué empieza a romper. Tres niveles de lectura: para empezar de cero, para sacarle más si ya la usas, y para profundizar con fuentes.",
  openGraph: {
    title: "Acércate a la IA",
    description:
      "Una charla abierta y una web para volver a ella. Tres niveles, fuentes verificadas, sin condescendencia.",
    type: "website",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NivelProvider>
          <SiteHeader />
          <FromSlideBanner />
          <main>{children}</main>
          <SiteFooter />
        </NivelProvider>
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/85 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm shrink-0"
          aria-label="Acércate a la IA · inicio"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
          <span className="text-[var(--color-fg-soft)] hidden sm:inline">
            Acércate <span className="text-[var(--color-fg-mute)]">a la</span> IA
          </span>
        </Link>

        {/* En móvil el orden es: logo / chip+toggle / nav debajo a ancho completo */}
        <div className="flex items-center gap-1.5 sm:gap-2 order-2 md:order-3 shrink-0">
          <NivelChip />
          <ThemeToggle />
        </div>

        <nav
          className="flex items-center gap-0.5 text-xs sm:text-sm font-mono overflow-x-auto no-scrollbar order-3 md:order-2 w-full md:w-auto -mx-1 sm:mx-0 px-1 sm:px-0"
          aria-label="Navegación principal"
        >
          <NavLink href="/charla">Charla</NavLink>
          <NavLink href="/casos">Casos</NavLink>
          <NavLink href="/jugar">Jugar</NavLink>
          <NavLink href="/herramientas">Herramientas</NavLink>
          <NavLink href="/explorar">Explorar</NavLink>
          <NavLink href="/historia">Historia</NavLink>
          <NavLink href="/preguntas">Preguntas</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-2 sm:px-2.5 py-1.5 rounded-md text-[var(--color-fg-soft)] hover:text-[var(--color-fg)] hover:bg-[var(--color-hover)] transition-colors whitespace-nowrap"
    >
      {children}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
            <span className="text-[var(--color-fg)]">Acércate a la IA</span>
          </div>
          <p className="text-xs text-[var(--color-fg-mute)] leading-relaxed max-w-xs">
            Una charla abierta y una web pensada para volver. Recorre por nivel, no por
            quién eres.
          </p>
        </div>
        <div>
          <div className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
            Por dónde empezar
          </div>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/?nivel=curioso" className="text-[var(--color-fg-soft)] hover:text-[var(--color-accent)] transition-colors">Si nunca lo has tocado</Link></li>
            <li><Link href="/?nivel=practicante" className="text-[var(--color-fg-soft)] hover:text-[var(--color-accent)] transition-colors">Si la usas a veces</Link></li>
            <li><Link href="/?nivel=profundo" className="text-[var(--color-fg-soft)] hover:text-[var(--color-accent)] transition-colors">Si quieres entenderla</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
            Crédito
          </div>
          <p className="text-xs text-[var(--color-fg-soft)] leading-relaxed">
            Investigado, escrito y diseñado con asistencia de IA. Cada dato verificado a mano. Fuentes enlazadas en cada cita.
          </p>
          <p className="text-[0.7rem] text-[var(--color-fg-mute)] mt-3 font-mono">
            Mayo 2026 · v2
          </p>
        </div>
      </div>
    </footer>
  );
}
