// Sistema unificado de niveles. Cualquier pieza de contenido (caso, herramienta,
// bloque, FAQ) declara su nivel; las páginas filtran y colorean usando estos
// labels. Si se cambia algo aquí, se cambia globalmente.

export type Nivel = "curioso" | "practicante" | "profundo";

export const nivelOrder: Nivel[] = ["curioso", "practicante", "profundo"];

export const nivelMeta: Record<
  Nivel,
  {
    label: string;
    short: string;
    promesa: string;
    audiencia: string;
    color: string;
    bg: string;
  }
> = {
  curioso: {
    label: "Curioso",
    short: "Empezar",
    promesa: "Te lo cuento como si nunca hubieras tocado un LLM.",
    audiencia: "Si nunca has pagado una suscripción de IA y quieres ubicarte.",
    color: "var(--color-good)",
    bg: "rgba(16, 185, 129, 0.08)",
  },
  practicante: {
    label: "Practicante",
    short: "Practicar",
    promesa: "Patrones que ya están funcionando, listos para copiar.",
    audiencia: "Si la usas a veces y quieres sacarle más.",
    color: "var(--color-warn)",
    bg: "rgba(245, 158, 11, 0.08)",
  },
  profundo: {
    label: "Profundo",
    short: "Profundizar",
    promesa: "Fuentes, números, debate. Discutimos los límites.",
    audiencia: "Si quieres entender, no solo usar.",
    color: "var(--color-hot)",
    bg: "rgba(236, 72, 153, 0.08)",
  },
};

// Legacy → nuevo (compatibilidad con casos.ts y herramientas.ts existentes).
export const legacyLevelMap: Record<string, Nivel> = {
  basico: "curioso",
  básico: "curioso",
  medio: "practicante",
  avanzado: "profundo",
};

export function toNivel(legacy: string): Nivel {
  return legacyLevelMap[legacy.toLowerCase()] ?? "practicante";
}
