import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "IA en familia · Marcos & Noe · Mayo 2026",
  description:
    "Una charla familiar sobre IA, abierta para que cada uno profundice donde quiera. Desde abuelos hasta primos developers.",
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-glow"></span>
          <span className="text-[var(--color-fg-soft)]">IA en familia</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-mono">
          <NavLink href="/charla">Charla</NavLink>
          <NavLink href="/historia">Historia</NavLink>
          <NavLink href="/casos">Casos</NavLink>
          <NavLink href="/herramientas">Herramientas</NavLink>
          <NavLink href="/explorar">Explorar</NavLink>
          <NavLink href="/jugar">Jugar</NavLink>
          <NavLink href="/agi">AGI</NavLink>
          <NavLink href="/futuro">Futuro</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-md text-[var(--color-fg-soft)] hover:text-[var(--color-fg)] hover:bg-[var(--color-hover)] transition-colors"
    >
      {children}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="font-mono text-xs text-[var(--color-fg-mute)]">
          Charla familiar · Marcos &amp; Noe · Mayo 2026
        </div>
        <div className="font-mono text-xs text-[var(--color-fg-mute)]">
          Investigado, escrito y diseñado con IA. Cada dato verificado por humanos.
        </div>
      </div>
    </footer>
  );
}
