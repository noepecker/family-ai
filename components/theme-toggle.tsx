"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) ?? "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isLight = theme === "light";
  const label = isLight ? "Cambiar a tema oscuro" : "Cambiar a tema claro";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-md text-[var(--color-fg-soft)] hover:text-[var(--color-fg)] hover:bg-[var(--color-hover)] border border-[var(--color-border)] transition-colors"
    >
      <span aria-hidden="true" className="text-base leading-none">
        {theme === null ? "" : isLight ? "☾" : "☀"}
      </span>
    </button>
  );
}
