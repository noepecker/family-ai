// Puzzles ARC-AGI definidos por su regla. Las salidas se calculan
// aplicando la regla al input → cero ejemplos mal escritos.

import {
  type Cell,
  type Grid,
  type empty as EmptyType,
  espejoRule,
  espejoGen,
  rellenaRule,
  rellenaGen,
  gravedadRule,
  gravedadGen,
  duplicaRule,
  duplicaGen,
  espejoVRule,
  espejoVGen,
} from "./rules";

export type { Cell, Grid };

export type Puzzle = {
  id: string;
  title: string;
  hint: string;
  rule: string;
  size: { rows: number; cols: number };
  palette: Cell[];
  rules: {
    transform: (input: Grid) => Grid;
    generate: (rng: () => number) => Grid;
  };
};

export const puzzles: Puzzle[] = [
  {
    id: "espejo",
    title: "Espejo horizontal",
    hint: "Mira los ejemplos. ¿Qué relación tiene la salida con la entrada?",
    rule: "La salida es la entrada + su reflejo horizontal. Cada celda pintada se duplica en el lado opuesto del eje vertical central.",
    size: { rows: 5, cols: 5 },
    palette: [0, 1],
    rules: { transform: espejoRule, generate: espejoGen },
  },
  {
    id: "rellena",
    title: "Rellena por dentro",
    hint: "¿Qué pasa con el interior de las formas cerradas?",
    rule: "Cualquier figura completamente cerrada se rellena por dentro. Las figuras abiertas (con un hueco en el borde) no cambian.",
    size: { rows: 5, cols: 5 },
    palette: [0, 1],
    rules: { transform: rellenaRule, generate: rellenaGen },
  },
  {
    id: "gravedad",
    title: "Gravedad",
    hint: "Imagina que las casillas pintadas pesan.",
    rule: "Todas las casillas pintadas caen al fondo de su columna y se apilan abajo, sin moverse de columna.",
    size: { rows: 5, cols: 5 },
    palette: [0, 1],
    rules: { transform: gravedadRule, generate: gravedadGen },
  },
  {
    id: "duplicar",
    title: "Duplica la forma",
    hint: "Cuenta cuántas figuras hay en la entrada y cuántas en la salida.",
    rule: "Toda la forma que aparece en las 3 primeras columnas se duplica exactamente 3 columnas a la derecha.",
    size: { rows: 6, cols: 6 },
    palette: [0, 1],
    rules: { transform: duplicaRule, generate: duplicaGen },
  },
  {
    id: "espejo-v",
    title: "Espejo vertical",
    hint: "Como el primer puzzle, pero girado.",
    rule: "Las celdas pintadas se reflejan también por el eje horizontal (arriba ↔ abajo).",
    size: { rows: 5, cols: 5 },
    palette: [0, 1],
    rules: { transform: espejoVRule, generate: espejoVGen },
  },
];

// Genera N ejemplos + 1 test a partir de un seed
export function buildRound(puzzle: Puzzle, seed: number, numExamples = 2) {
  const examples: { input: Grid; output: Grid }[] = [];
  for (let i = 0; i < numExamples; i++) {
    const rng = makeRng(seed + i * 1000);
    const input = puzzle.rules.generate(rng);
    examples.push({ input, output: puzzle.rules.transform(input) });
  }
  const testRng = makeRng(seed + 999_999);
  const testInput = puzzle.rules.generate(testRng);
  return {
    examples,
    test: { input: testInput, expected: puzzle.rules.transform(testInput) },
  };
}

// Re-export RNG to avoid circular import drama
import { makeRng } from "./rules";

export const COLOR_HEX: Record<Cell, string> = {
  0: "var(--color-bg)",
  1: "#38bdf8",
  2: "#ef4444",
  3: "#fbbf24",
  4: "#10b981",
};
