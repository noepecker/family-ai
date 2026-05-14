// Mini-juego estilo ARC-AGI-3: discovery games sin instrucciones.
// Cada nivel tiene una mecánica oculta. Se descubre jugando.

export type Dir = "up" | "down" | "left" | "right";
export type Cell = { r: number; c: number };
export type Door = { pos: Cell; open: boolean };
export type Switch = { pos: Cell; opens: number[] }; // indices into doors
export type Teleporter = { from: Cell; to: Cell; color: string };

export type LevelState = {
  width: number;
  height: number;
  player: Cell;
  clones?: Cell[];
  boxes: Cell[];
  boxColors?: (string | undefined)[]; // parallel to boxes
  goals: Cell[];
  goalColors?: (string | undefined)[]; // parallel to goals
  walls: Cell[];
  doors?: Door[];
  switches?: Switch[];
  teleporters?: Teleporter[];
};

export type Level = {
  id: string;
  title: string;
  initial: LevelState;
  step: (state: LevelState, dir: Dir) => LevelState;
  isWon: (state: LevelState) => boolean;
  revealedRule: string;
  hint: string;
};

// ============ UTILIDADES ============
const DIR_DELTA: Record<Dir, { dr: number; dc: number }> = {
  up: { dr: -1, dc: 0 },
  down: { dr: 1, dc: 0 },
  left: { dr: 0, dc: -1 },
  right: { dr: 0, dc: 1 },
};

const sameCell = (a: Cell, b: Cell) => a.r === b.r && a.c === b.c;
const inBounds = (c: Cell, w: number, h: number) =>
  c.r >= 0 && c.r < h && c.c >= 0 && c.c < w;

const isBlocked = (state: LevelState, c: Cell): boolean => {
  if (state.walls.some((w) => sameCell(w, c))) return true;
  if (state.doors?.some((d) => !d.open && sameCell(d.pos, c))) return true;
  return false;
};

const boxAt = (state: LevelState, c: Cell): number =>
  state.boxes.findIndex((b) => sameCell(b, c));

// Aplica las reglas de switches: cualquier switch ocupado por algo (player,
// box, clone) abre las puertas asociadas. Si nada lo ocupa, las cierra.
const applySwitches = (state: LevelState): LevelState => {
  if (!state.switches || !state.doors) return state;
  const occupied = (c: Cell) =>
    sameCell(state.player, c) ||
    state.boxes.some((b) => sameCell(b, c)) ||
    !!state.clones?.some((cl) => sameCell(cl, c));
  const newDoors = state.doors.map((d, i) => {
    const opened = state.switches!.some(
      (s) => s.opens.includes(i) && occupied(s.pos)
    );
    return { ...d, open: opened };
  });
  return { ...state, doors: newDoors };
};

// Si el jugador pisa un teleporter, se va al otro extremo.
const applyTeleport = (state: LevelState): LevelState => {
  if (!state.teleporters) return state;
  for (const t of state.teleporters) {
    if (sameCell(t.from, state.player)) return { ...state, player: t.to };
    if (sameCell(t.to, state.player)) return { ...state, player: t.from };
  }
  return state;
};

// ============ MECÁNICA 1: SOKOBAN CLÁSICO (con doors/switches/teleport opcionales) ============
const sokobanStep = (state: LevelState, dir: Dir): LevelState => {
  const { dr, dc } = DIR_DELTA[dir];
  const next: Cell = { r: state.player.r + dr, c: state.player.c + dc };

  if (!inBounds(next, state.width, state.height)) return state;
  if (isBlocked(state, next)) return state;

  const boxIdx = boxAt(state, next);
  if (boxIdx >= 0) {
    const boxNext: Cell = { r: next.r + dr, c: next.c + dc };
    if (!inBounds(boxNext, state.width, state.height)) return state;
    if (isBlocked(state, boxNext)) return state;
    if (boxAt(state, boxNext) >= 0) return state;
    const newBoxes = state.boxes.map((b, i) => (i === boxIdx ? boxNext : b));
    let s: LevelState = { ...state, player: next, boxes: newBoxes };
    s = applySwitches(s);
    s = applyTeleport(s);
    return s;
  }

  let s: LevelState = { ...state, player: next };
  s = applySwitches(s);
  s = applyTeleport(s);
  return s;
};

// ============ MECÁNICA 2: LAS CAJAS SE MUEVEN (NO TÚ) ============
const boxMovesStep = (state: LevelState, dir: Dir): LevelState => {
  const { dr, dc } = DIR_DELTA[dir];
  const ordered = [...state.boxes].map((b, i) => ({ b, i })).sort((a, b) => {
    if (dir === "right") return b.b.c - a.b.c;
    if (dir === "left") return a.b.c - b.b.c;
    if (dir === "down") return b.b.r - a.b.r;
    return a.b.r - b.b.r;
  });
  const newBoxes = [...state.boxes];
  for (const { b, i } of ordered) {
    const next = { r: b.r + dr, c: b.c + dc };
    if (!inBounds(next, state.width, state.height)) continue;
    if (isBlocked(state, next)) continue;
    if (sameCell(next, state.player)) continue;
    if (newBoxes.some((bb, j) => j !== i && sameCell(bb, next))) continue;
    newBoxes[i] = next;
  }
  return applySwitches({ ...state, boxes: newBoxes });
};

// ============ MECÁNICA 3: GRAVEDAD GLOBAL ============
const gravityStep = (state: LevelState, dir: Dir): LevelState => {
  let s = sokobanStep(state, dir);
  const newBoxes = [...s.boxes];
  let moved = true;
  while (moved) {
    moved = false;
    for (let i = 0; i < newBoxes.length; i++) {
      const b = newBoxes[i];
      const below: Cell = { r: b.r + 1, c: b.c };
      if (
        inBounds(below, s.width, s.height) &&
        !isBlocked(s, below) &&
        !sameCell(below, s.player) &&
        !newBoxes.some((bb, j) => j !== i && sameCell(bb, below))
      ) {
        newBoxes[i] = below;
        moved = true;
      }
    }
  }
  return applySwitches({ ...s, boxes: newBoxes });
};

// ============ MECÁNICA 4: CLONES — el clon te imita en cada movimiento ============
const clonesStep = (state: LevelState, dir: Dir): LevelState => {
  // El jugador se mueve con reglas sokoban
  let s = sokobanStep(state, dir);

  if (!s.clones) return s;

  // Cada clon intenta moverse en la misma dirección. No empuja cajas.
  const { dr, dc } = DIR_DELTA[dir];
  const newClones = s.clones.map((clone) => {
    const next = { r: clone.r + dr, c: clone.c + dc };
    if (!inBounds(next, s.width, s.height)) return clone;
    if (isBlocked(s, next)) return clone;
    if (sameCell(next, s.player)) return clone;
    if (s.boxes.some((b) => sameCell(b, next))) return clone;
    if (s.clones?.some((c, j) => sameCell(c, next) && !sameCell(c, clone))) return clone;
    return next;
  });

  return applySwitches({ ...s, clones: newClones });
};

// ============ CONDICIONES DE VICTORIA ============
const allBoxesOnGoals = (state: LevelState) =>
  state.goals.every((g) => state.boxes.some((b) => sameCell(b, g)));

const allBoxesOnMatchingGoals = (state: LevelState) =>
  state.goals.every((g, gi) => {
    const goalColor = state.goalColors?.[gi];
    return state.boxes.some((b, bi) => {
      if (!sameCell(g, b)) return false;
      const boxColor = state.boxColors?.[bi];
      return goalColor === undefined || boxColor === goalColor;
    });
  });

// Para clones: cada entidad (player + clones) debe estar en un goal distinto
const allEntitiesOnGoals = (state: LevelState) => {
  const positions = [state.player, ...(state.clones ?? [])];
  if (positions.length !== state.goals.length) return false;
  // Cada goal cubierto por al menos una entidad
  return state.goals.every((g) => positions.some((p) => sameCell(p, g)));
};

// Para teleporters: jugador debe llegar al goal (no cajas)
const playerOnGoal = (state: LevelState) =>
  state.goals.some((g) => sameCell(g, state.player));

// ============ NIVELES ============
export const levels: Level[] = [
  // --- NIVEL 1: descubrir movimiento básico + empujar
  {
    id: "n1",
    title: "Nivel 1",
    initial: {
      width: 5,
      height: 5,
      player: { r: 2, c: 1 },
      boxes: [{ r: 2, c: 2 }],
      goals: [{ r: 2, c: 4 }],
      walls: [],
    },
    step: sokobanStep,
    isWon: allBoxesOnGoals,
    hint: "Las flechas mueven el círculo azul. Si chocas con la caja amarilla, ¿qué pasa?",
    revealedRule:
      "Las flechas mueven al jugador (azul). Si chocas con la caja (amarilla) la empujas en esa dirección. Lleva la caja al borde verde discontinuo.",
  },

  // --- NIVEL 2: misma regla, paredes y dos cajas
  {
    id: "n2",
    title: "Nivel 2",
    initial: {
      width: 6,
      height: 5,
      player: { r: 4, c: 0 },
      boxes: [
        { r: 2, c: 2 },
        { r: 2, c: 4 },
      ],
      goals: [
        { r: 0, c: 2 },
        { r: 0, c: 4 },
      ],
      walls: [
        { r: 1, c: 0 },
        { r: 3, c: 1 },
        { r: 3, c: 3 },
        { r: 3, c: 5 },
      ],
    },
    step: sokobanStep,
    isWon: allBoxesOnGoals,
    hint: "Misma regla. Las paredes (gris oscuro) bloquean. Las cajas no se pueden empujar contra una pared.",
    revealedRule:
      "Misma mecánica que el nivel 1. Las paredes bloquean. Cuando empujas, mira si hay algo detrás de la caja.",
  },

  // --- NIVEL 3: SWITCHES + DOORS
  {
    id: "n3",
    title: "Nivel 3",
    initial: {
      width: 6,
      height: 5,
      player: { r: 2, c: 0 },
      boxes: [],
      goals: [{ r: 2, c: 5 }],
      walls: [
        { r: 0, c: 3 },
        { r: 1, c: 3 },
        { r: 3, c: 3 },
        { r: 4, c: 3 },
      ],
      doors: [{ pos: { r: 2, c: 3 }, open: false }],
      switches: [{ pos: { r: 0, c: 1 }, opens: [0] }],
    },
    step: sokobanStep,
    isWon: playerOnGoal,
    hint: "Hay una puerta cerrada que parece moverse. Algo en el suelo amarillo redondo debe tener que ver.",
    revealedRule:
      "Las casillas amarillas redondas son INTERRUPTORES. Cuando algo está encima (tú, una caja), la puerta asociada se abre. Si te bajas, se cierra. En este nivel basta con caminar al interruptor… pero si te vas, la puerta se cierra otra vez.",
  },

  // --- NIVEL 4: SWITCH + CAJA SOBRE INTERRUPTOR
  {
    id: "n4",
    title: "Nivel 4",
    initial: {
      width: 7,
      height: 5,
      player: { r: 2, c: 0 },
      boxes: [{ r: 2, c: 1 }],
      goals: [{ r: 2, c: 6 }],
      walls: [
        { r: 0, c: 4 },
        { r: 1, c: 4 },
        { r: 3, c: 4 },
        { r: 4, c: 4 },
      ],
      doors: [{ pos: { r: 2, c: 4 }, open: false }],
      switches: [{ pos: { r: 4, c: 2 }, opens: [0] }],
    },
    step: sokobanStep,
    isWon: playerOnGoal,
    hint: "Mismo concepto del nivel anterior, pero ahora tienes que estar TÚ en el objetivo. El interruptor está abajo. Pero si vas tú al interruptor, no puedes ir al objetivo a la vez. ¿Qué más se pone encima del interruptor?",
    revealedRule:
      "Una CAJA empuja también el interruptor. Si dejas una caja sobre él, la puerta queda abierta y tú puedes pasar. Solución típica: empujas la caja hasta el interruptor → pasas → al objetivo.",
  },

  // --- NIVEL 5: COLOR MATCHING
  {
    id: "n5",
    title: "Nivel 5",
    initial: {
      width: 6,
      height: 5,
      player: { r: 2, c: 0 },
      boxes: [
        { r: 1, c: 2 },
        { r: 3, c: 2 },
      ],
      boxColors: ["#ef4444", "#38bdf8"], // rojo, azul
      goals: [
        { r: 1, c: 5 },
        { r: 3, c: 5 },
      ],
      goalColors: ["#38bdf8", "#ef4444"], // ¡cruzados!
      walls: [],
    },
    step: sokobanStep,
    isWon: allBoxesOnMatchingGoals,
    hint: "Las cajas tienen colores. Los objetivos también. ¿Cualquier caja vale en cualquier objetivo?",
    revealedRule:
      "Cada caja sólo vale para el objetivo de SU MISMO COLOR. Aquí las cajas y los objetivos están cruzados (rojo arriba, azul abajo, pero los goals son al revés). Tienes que cruzarlas.",
  },

  // --- NIVEL 6: BOX MOVES TWIST
  {
    id: "n6",
    title: "Nivel 6",
    initial: {
      width: 5,
      height: 5,
      player: { r: 0, c: 0 },
      boxes: [{ r: 2, c: 1 }],
      goals: [{ r: 2, c: 4 }],
      walls: [],
    },
    step: boxMovesStep,
    isWon: allBoxesOnGoals,
    hint: "Pulsa una flecha y observa qué SE MUEVE de verdad.",
    revealedRule:
      "La regla cambió. Las flechas YA NO te mueven a ti. Mueven a la caja. El jugador se queda quieto. Las paredes y tu propio cuerpo bloquean a la caja.",
  },

  // --- NIVEL 7: GRAVEDAD
  {
    id: "n7",
    title: "Nivel 7",
    initial: {
      width: 5,
      height: 6,
      player: { r: 5, c: 0 },
      boxes: [{ r: 0, c: 2 }],
      goals: [{ r: 4, c: 2 }],
      walls: [{ r: 5, c: 2 }],
    },
    step: gravityStep,
    isWon: allBoxesOnGoals,
    hint: "Pulsa cualquier flecha. Algo le pasa a la caja aunque tú no estés cerca.",
    revealedRule:
      "Hay GRAVEDAD. Después de cada movimiento, todas las cajas caen hacia abajo hasta tocar algo (pared, suelo, otra caja, el jugador). Aquí basta con dar un paso: la gravedad lleva la caja hasta sobre la pared, justo el objetivo.",
  },

  // --- NIVEL 8: CLONES
  {
    id: "n8",
    title: "Nivel 8",
    initial: {
      width: 7,
      height: 5,
      player: { r: 2, c: 0 },
      clones: [{ r: 2, c: 6 }],
      boxes: [],
      goals: [
        { r: 2, c: 3 },
        { r: 2, c: 4 },
      ],
      walls: [
        { r: 0, c: 3 },
        { r: 1, c: 3 },
        { r: 3, c: 4 },
        { r: 4, c: 4 },
      ],
    },
    step: clonesStep,
    isWon: allEntitiesOnGoals,
    hint: "Hay dos círculos azules. Pulsa una flecha y observa qué hacen ambos. ¿Necesitas que los dos lleguen a los dos objetivos?",
    revealedRule:
      "Hay un CLON: cuando tú te mueves, el clon también intenta moverse en la misma dirección. Pero las paredes y obstáculos los bloquean independientemente — uno puede moverse mientras el otro no puede. Hay que llevar a cada uno a un objetivo.",
  },

  // --- NIVEL 9: TELEPORTERS
  {
    id: "n9",
    title: "Nivel 9",
    initial: {
      width: 7,
      height: 5,
      player: { r: 0, c: 0 },
      boxes: [],
      goals: [{ r: 4, c: 6 }],
      walls: [
        { r: 0, c: 3 },
        { r: 1, c: 3 },
        { r: 2, c: 3 },
        { r: 3, c: 3 },
        { r: 4, c: 3 },
      ],
      teleporters: [
        { from: { r: 0, c: 2 }, to: { r: 4, c: 4 }, color: "#ec4899" },
      ],
    },
    step: sokobanStep,
    isWon: playerOnGoal,
    hint: "Hay una pared infranqueable. Mira esos círculos rosas pulsantes — ¿qué pasa si pisas uno?",
    revealedRule:
      "Las casillas con círculos rosas pulsantes son TELEPORTERS. Pisas uno y apareces en el otro. En este nivel hay un par: izquierda con derecha. Sin teleporter no llegas porque hay una pared infranqueable.",
  },

  // --- NIVEL 10: COMBO (switches + boxes + multiple challenges)
  {
    id: "n10",
    title: "Nivel 10",
    initial: {
      width: 7,
      height: 6,
      player: { r: 0, c: 0 },
      boxes: [
        { r: 2, c: 1 },
        { r: 3, c: 1 },
      ],
      boxColors: ["#fbbf24", "#fbbf24"],
      goals: [{ r: 2, c: 6 }],
      goalColors: [undefined],
      walls: [
        { r: 0, c: 3 },
        { r: 1, c: 3 },
        { r: 3, c: 3 },
        { r: 4, c: 3 },
        { r: 5, c: 3 },
        { r: 5, c: 5 },
      ],
      doors: [
        { pos: { r: 2, c: 3 }, open: false },
        { pos: { r: 4, c: 5 }, open: false },
      ],
      switches: [
        { pos: { r: 0, c: 5 }, opens: [0] },
        { pos: { r: 5, c: 0 }, opens: [1] },
      ],
    },
    step: sokobanStep,
    isWon: (state) => state.goals.some((g) => sameCell(g, state.player)),
    hint: "Combinación de todo: paredes, puertas, interruptores. Hay 2 interruptores y 2 puertas. Las cajas pueden ayudar a mantener los interruptores activos.",
    revealedRule:
      "Combinación del nivel 4. Cada interruptor abre una puerta. Tienes dos cajas amarillas que puedes empujar para que se queden sobre los interruptores y mantengan abiertas las puertas. Planifica el orden.",
  },
];
