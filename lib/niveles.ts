import { nivelMeta, type Nivel } from "@/content/niveles";

export function nivelChipClass(_n: Nivel) {
  // Tailwind v4 con tokens variables: devolvemos clases estáticas + style inline en el componente.
  return "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] font-mono uppercase tracking-wider";
}

export function nivelStyle(n: Nivel): React.CSSProperties {
  const m = nivelMeta[n];
  return {
    color: m.color,
    background: m.bg,
    boxShadow: `inset 0 0 0 1px ${m.color}33`,
  };
}
