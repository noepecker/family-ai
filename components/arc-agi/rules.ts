// Reglas de los puzzles como funciones puras.
// La salida SIEMPRE se calcula aplicando la regla a la entrada,
// así no puede haber bugs de "ejemplos mal escritos".

export type Cell = 0 | 1 | 2 | 3 | 4;
export type Grid = Cell[][];

// ============ UTILIDADES ============
export const empty = (rows: number, cols: number): Grid =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0 as Cell));

export const cloneGrid = (g: Grid): Grid => g.map((r) => [...r]) as Grid;

export const gridsEqual = (a: Grid, b: Grid): boolean => {
  if (a.length !== b.length || a[0].length !== b[0].length) return false;
  for (let r = 0; r < a.length; r++)
    for (let c = 0; c < a[0].length; c++)
      if (a[r][c] !== b[r][c]) return false;
  return true;
};

// RNG seeded (Mulberry32) para reproducibilidad si quieres
export const makeRng = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const randInt = (rng: () => number, max: number) => Math.floor(rng() * max);

// ============ REGLA 1: ESPEJO HORIZONTAL ============
// Output = input OR mirror(input). Si una celda está pintada en (r,c),
// también queda pintada en (r, cols-1-c).
export const espejoRule = (input: Grid): Grid => {
  const rows = input.length;
  const cols = input[0].length;
  const out = cloneGrid(input);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (input[r][c] === 1) {
        out[r][cols - 1 - c] = 1;
      }
    }
  }
  return out;
};

export const espejoGen = (rng: () => number): Grid => {
  const g = empty(5, 5);
  // Entre 3 y 6 celdas en la mitad izquierda (cols 0-1, no centro)
  const n = 3 + randInt(rng, 4);
  for (let i = 0; i < n; i++) {
    const r = randInt(rng, 5);
    const c = randInt(rng, 2);
    g[r][c] = 1;
  }
  return g;
};

// ============ REGLA 2: RELLENA INTERIOR ============
// Cualquier celda 0 que NO sea alcanzable desde el borde por celdas 0
// (es decir, está dentro de una figura cerrada) se rellena con 1.
export const rellenaRule = (input: Grid): Grid => {
  const rows = input.length;
  const cols = input[0].length;
  const out = cloneGrid(input);
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue: [number, number][] = [];

  // Inicia BFS desde todas las celdas del borde que estén vacías
  for (let c = 0; c < cols; c++) {
    if (input[0][c] === 0) { queue.push([0, c]); visited[0][c] = true; }
    if (input[rows - 1][c] === 0) { queue.push([rows - 1, c]); visited[rows - 1][c] = true; }
  }
  for (let r = 0; r < rows; r++) {
    if (input[r][0] === 0) { queue.push([r, 0]); visited[r][0] = true; }
    if (input[r][cols - 1] === 0) { queue.push([r, cols - 1]); visited[r][cols - 1] = true; }
  }

  while (queue.length) {
    const [r, c] = queue.shift()!;
    const neighbors: [number, number][] = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];
    for (const [nr, nc] of neighbors) {
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && input[nr][nc] === 0) {
        visited[nr][nc] = true;
        queue.push([nr, nc]);
      }
    }
  }

  // Cualquier 0 no visitado está dentro de figura cerrada → rellenar
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (input[r][c] === 0 && !visited[r][c]) {
        out[r][c] = 1;
      }
    }
  }
  return out;
};

export const rellenaGen = (rng: () => number): Grid => {
  // Rectángulo random hueco en algún lugar del 5x5
  const g = empty(5, 5);
  const w = 3 + randInt(rng, 3); // 3, 4 o 5
  const h = 3 + randInt(rng, 3);
  const wW = Math.min(w, 5);
  const hH = Math.min(h, 5);
  const c0 = randInt(rng, 5 - wW + 1);
  const r0 = randInt(rng, 5 - hH + 1);
  for (let c = c0; c < c0 + wW; c++) {
    g[r0][c] = 1;
    g[r0 + hH - 1][c] = 1;
  }
  for (let r = r0; r < r0 + hH; r++) {
    g[r][c0] = 1;
    g[r][c0 + wW - 1] = 1;
  }
  return g;
};

// ============ REGLA 3: GRAVEDAD ============
// Para cada columna: cuenta los 1s y los apila abajo del todo.
export const gravedadRule = (input: Grid): Grid => {
  const rows = input.length;
  const cols = input[0].length;
  const out = empty(rows, cols);
  for (let c = 0; c < cols; c++) {
    let count = 0;
    for (let r = 0; r < rows; r++) {
      if (input[r][c] === 1) count++;
    }
    for (let r = rows - count; r < rows; r++) {
      out[r][c] = 1;
    }
  }
  return out;
};

export const gravedadGen = (rng: () => number): Grid => {
  const g = empty(5, 5);
  const n = 5 + randInt(rng, 4); // 5-8 celdas
  let attempts = 0;
  let placed = 0;
  while (placed < n && attempts < 50) {
    const r = randInt(rng, 5);
    const c = randInt(rng, 5);
    if (g[r][c] === 0) {
      g[r][c] = 1;
      placed++;
    }
    attempts++;
  }
  return g;
};

// ============ REGLA 4: DUPLICA LA FORMA ============
// La forma del input (asumida en cols 0-2) se duplica desplazada 3 cols a la derecha.
// out[r][c+3] = out[r][c+3] OR input[r][c] para c<3.
export const duplicaRule = (input: Grid): Grid => {
  const rows = input.length;
  const cols = input[0].length;
  const out = cloneGrid(input);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < 3; c++) {
      if (input[r][c] === 1 && c + 3 < cols) {
        out[r][c + 3] = 1;
      }
    }
  }
  return out;
};

export const duplicaGen = (rng: () => number): Grid => {
  // Figura random en cols 0-2, 6x6
  const g = empty(6, 6);
  const n = 4 + randInt(rng, 3); // 4-6 celdas
  let attempts = 0;
  let placed = 0;
  while (placed < n && attempts < 50) {
    const r = randInt(rng, 6);
    const c = randInt(rng, 3); // solo cols 0-2
    if (g[r][c] === 0) {
      g[r][c] = 1;
      placed++;
    }
    attempts++;
  }
  return g;
};

// ============ REGLA 5: REFLEJO VERTICAL ============
// Como espejo pero por el eje horizontal (arriba ↔ abajo)
export const espejoVRule = (input: Grid): Grid => {
  const rows = input.length;
  const cols = input[0].length;
  const out = cloneGrid(input);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (input[r][c] === 1) {
        out[rows - 1 - r][c] = 1;
      }
    }
  }
  return out;
};

export const espejoVGen = (rng: () => number): Grid => {
  const g = empty(5, 5);
  const n = 3 + randInt(rng, 4);
  for (let i = 0; i < n; i++) {
    const r = randInt(rng, 2); // solo filas 0-1
    const c = randInt(rng, 5);
    g[r][c] = 1;
  }
  return g;
};
