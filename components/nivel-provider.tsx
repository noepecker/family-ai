"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { nivelMeta, nivelOrder, type Nivel } from "@/content/niveles";

type NivelState = Nivel | "todos";

type Ctx = {
  nivel: NivelState;
  setNivel: (n: NivelState) => void;
};

const NivelContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "acercate.nivel";

function parseNivel(v: string | null | undefined): NivelState | null {
  if (!v) return null;
  if (v === "todos") return "todos";
  if (nivelOrder.includes(v as Nivel)) return v as Nivel;
  return null;
}

export function NivelProvider({ children }: { children: React.ReactNode }) {
  const [nivel, setNivelState] = useState<NivelState>("todos");

  // Hidratación inicial desde URL (prioridad) o localStorage.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const fromUrl = parseNivel(url.searchParams.get("nivel"));
    const fromLs = parseNivel(localStorage.getItem(STORAGE_KEY));
    const initial = fromUrl ?? fromLs ?? "todos";
    setNivelState(initial);
    if (fromUrl && fromUrl !== fromLs) {
      localStorage.setItem(STORAGE_KEY, fromUrl);
    }
  }, []);

  const setNivel = useCallback((n: NivelState) => {
    setNivelState(n);
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, n);
    } catch {
      // localStorage puede estar bloqueado; ignorar.
    }
    const url = new URL(window.location.href);
    if (n === "todos") url.searchParams.delete("nivel");
    else url.searchParams.set("nivel", n);
    window.history.replaceState({}, "", url.toString());
  }, []);

  return (
    <NivelContext.Provider value={{ nivel, setNivel }}>
      {children}
    </NivelContext.Provider>
  );
}

export function useNivel(): Ctx {
  const ctx = useContext(NivelContext);
  if (!ctx) {
    // Fallback seguro fuera del provider — útil en testing o renderizado server.
    return { nivel: "todos", setNivel: () => {} };
  }
  return ctx;
}

export function NivelChip() {
  const { nivel, setNivel } = useNivel();
  const options: { value: NivelState; label: string; color: string }[] = [
    { value: "todos", label: "Todos", color: "var(--color-fg-soft)" },
    ...nivelOrder.map((n) => ({
      value: n,
      label: nivelMeta[n].label,
      color: nivelMeta[n].color,
    })),
  ];

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      {options.map((o) => {
        const active = nivel === o.value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setNivel(o.value)}
            className="px-2.5 py-1 rounded-full text-[0.65rem] font-mono uppercase tracking-wider transition-all"
            style={{
              color: active ? "var(--color-on-accent)" : o.color,
              background: active ? o.color : "transparent",
            }}
            aria-pressed={active}
            title={`Filtrar por nivel: ${o.label}`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Utility: filtra un array de items con campo `nivel` por el estado global.
 * Si nivel === "todos", no filtra.
 */
export function useNivelFilter<T extends { nivel: Nivel }>(items: T[]): T[] {
  const { nivel } = useNivel();
  if (nivel === "todos") return items;
  return items.filter((i) => i.nivel === nivel);
}
