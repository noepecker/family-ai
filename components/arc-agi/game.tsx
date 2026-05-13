"use client";

import { useState, useEffect, useMemo } from "react";
import { puzzles, buildRound, COLOR_HEX, type Grid, type Cell, type Puzzle } from "./data";
import { gridsEqual } from "./rules";

export function ArcGame() {
  const [step, setStep] = useState(0);
  const [solved, setSolved] = useState<boolean[]>(new Array(puzzles.length).fill(false));
  const [seed, setSeed] = useState(0);

  // Generar seed estable solo en cliente para evitar mismatch SSR
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1_000_000) + 1);
  }, []);

  if (step >= puzzles.length) {
    return (
      <FinalResults
        solved={solved}
        onRestart={() => {
          setStep(0);
          setSolved(new Array(puzzles.length).fill(false));
          setSeed(Math.floor(Math.random() * 1_000_000) + 1);
        }}
      />
    );
  }

  const puzzle = puzzles[step];

  const onSolved = (ok: boolean) => {
    setSolved((prev) => {
      const next = [...prev];
      next[step] = ok;
      return next;
    });
  };

  // Seed combinada con el step para que cada puzzle tenga su propia secuencia
  const puzzleSeed = seed + step * 7919;

  if (!seed) return null; // no render hasta tener seed (evita hydration warnings)

  return (
    <div>
      <ProgressBar current={step + 1} total={puzzles.length} solved={solved} />

      <PuzzleView
        key={`${puzzle.id}-${puzzleSeed}`}
        puzzle={puzzle}
        seed={puzzleSeed}
        onSolved={onSolved}
        onNext={() => setStep((s) => s + 1)}
        onRegenerate={() => setSeed(Math.floor(Math.random() * 1_000_000) + 1)}
        isLast={step === puzzles.length - 1}
      />
    </div>
  );
}

function PuzzleView({
  puzzle,
  seed,
  onSolved,
  onNext,
  onRegenerate,
  isLast,
}: {
  puzzle: Puzzle;
  seed: number;
  onSolved: (ok: boolean) => void;
  onNext: () => void;
  onRegenerate: () => void;
  isLast: boolean;
}) {
  const round = useMemo(() => buildRound(puzzle, seed, 2), [puzzle, seed]);

  const [userGrid, setUserGrid] = useState<Grid>(() => emptyOf(round.test.expected));
  const [revealed, setRevealed] = useState(false);
  const [outcome, setOutcome] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    setUserGrid(emptyOf(round.test.expected));
    setRevealed(false);
    setOutcome(null);
  }, [round]);

  const onCheck = () => {
    const ok = gridsEqual(userGrid, round.test.expected);
    setOutcome(ok ? "correct" : "wrong");
    setRevealed(true);
    onSolved(ok);
  };

  const onGiveUp = () => {
    setUserGrid(round.test.expected.map((r) => [...r]) as Grid);
    setOutcome("wrong");
    setRevealed(true);
    onSolved(false);
  };

  return (
    <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="flex items-start justify-between mb-2 gap-4 flex-wrap">
        <div className="font-mono text-xs text-[var(--color-fg-mute)]">PUZZLE</div>
        {!revealed && (
          <button
            onClick={onRegenerate}
            className="font-mono text-xs px-3 py-1 rounded border border-[var(--color-border)] text-[var(--color-fg-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            ⟳ Nuevos ejemplos
          </button>
        )}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{puzzle.title}</h2>
      <p className="text-base text-[var(--color-fg-soft)] mb-8">{puzzle.hint}</p>

      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
          Ejemplos (entrada → salida)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {round.examples.map((ex, i) => (
            <div key={i} className="flex items-center justify-center gap-4">
              <ReadonlyGrid grid={ex.input} />
              <div className="text-3xl text-[var(--color-fg-mute)]">→</div>
              <ReadonlyGrid grid={ex.output} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] mb-3">
          Ahora tú: completa la salida
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <div className="flex flex-col items-center gap-2">
            <div className="font-mono text-xs text-[var(--color-fg-mute)]">ENTRADA</div>
            <ReadonlyGrid grid={round.test.input} large />
          </div>
          <div className="text-4xl text-[var(--color-fg-mute)]">→</div>
          <div className="flex flex-col items-center gap-2">
            <div className="font-mono text-xs text-[var(--color-accent)]">TU SALIDA</div>
            <EditableGrid grid={userGrid} onChange={setUserGrid} palette={puzzle.palette} disabled={revealed} large />
          </div>
        </div>
        <p className="text-center text-xs text-[var(--color-fg-mute)] font-mono">
          Click en una casilla para activar / desactivar.
        </p>
      </div>

      {!revealed && (
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={onCheck}
            className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Comprobar
          </button>
          <button
            onClick={() => setUserGrid(emptyOf(round.test.expected))}
            className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm hover:bg-white/5 transition-colors"
          >
            Limpiar
          </button>
          <button
            onClick={onGiveUp}
            className="px-6 py-3 rounded-lg border border-[var(--color-bad)]/40 text-[var(--color-bad)] font-mono text-sm hover:bg-[var(--color-bad)]/10 transition-colors"
          >
            Me rindo, enséñame
          </button>
        </div>
      )}

      {revealed && (
        <div className="mt-6 animate-fade-up">
          <div
            className={`p-5 rounded-xl border-l-4 ${
              outcome === "correct"
                ? "border-[var(--color-good)] bg-[var(--color-good)]/10"
                : "border-[var(--color-bad)] bg-[var(--color-bad)]/10"
            }`}
          >
            <div
              className="font-mono text-sm font-bold mb-2"
              style={{ color: outcome === "correct" ? "var(--color-good)" : "var(--color-bad)" }}
            >
              {outcome === "correct" ? "¡Correcto!" : "No exactamente."}
            </div>
            <p className="text-base text-[var(--color-fg)] mb-4">
              <span className="font-semibold">La regla:</span> {puzzle.rule}
            </p>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="flex flex-col items-center gap-1">
                <div className="font-mono text-[10px] text-[var(--color-fg-mute)]">SOLUCIÓN</div>
                <ReadonlyGrid grid={round.test.expected} />
              </div>
              {!gridsEqual(userGrid, round.test.expected) && (
                <>
                  <div className="text-xl text-[var(--color-fg-mute)]">vs</div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-mono text-[10px] text-[var(--color-bad)]">TU INTENTO</div>
                    <ReadonlyGrid grid={userGrid} />
                  </div>
                </>
              )}
            </div>

            <button
              onClick={onNext}
              className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              {isLast ? "Ver veredicto final →" : "Siguiente puzzle →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProgressBar({ current, total, solved }: { current: number; total: number; solved: boolean[] }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span className="font-mono text-xs text-[var(--color-fg-mute)]">PUZZLE {current} de {total}</span>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full transition-colors"
            style={{
              background:
                i < current - 1
                  ? solved[i]
                    ? "var(--color-good)"
                    : "var(--color-bad)"
                  : i === current - 1
                  ? "var(--color-accent)"
                  : "var(--color-bg-card-hi)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ReadonlyGrid({ grid, large = false }: { grid: Grid; large?: boolean }) {
  const size = large ? 44 : 26;
  return (
    <div
      className="inline-grid rounded-md overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, ${size}px)`,
        gridTemplateRows: `repeat(${grid.length}, ${size}px)`,
        gap: 2,
        background: "var(--color-border-strong)",
        padding: 2,
      }}
    >
      {grid.flatMap((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            style={{
              background: COLOR_HEX[cell],
              border: cell === 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          />
        ))
      )}
    </div>
  );
}

function EditableGrid({
  grid,
  onChange,
  palette,
  disabled,
  large = false,
}: {
  grid: Grid;
  onChange: (g: Grid) => void;
  palette: Cell[];
  disabled: boolean;
  large?: boolean;
}) {
  const size = large ? 44 : 26;
  const colorsAvailable = palette.filter((p) => p !== 0);
  const isToggle = colorsAvailable.length === 1;

  const onCellClick = (r: number, c: number) => {
    if (disabled) return;
    const next = grid.map((row) => [...row]) as Grid;
    if (isToggle) {
      next[r][c] = next[r][c] === 0 ? colorsAvailable[0] : 0;
    } else {
      const cur = next[r][c];
      const idx = palette.indexOf(cur);
      next[r][c] = palette[(idx + 1) % palette.length];
    }
    onChange(next);
  };

  return (
    <div
      className="inline-grid rounded-md overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${grid[0].length}, ${size}px)`,
        gridTemplateRows: `repeat(${grid.length}, ${size}px)`,
        gap: 2,
        background: "var(--color-border-strong)",
        padding: 2,
      }}
    >
      {grid.flatMap((row, r) =>
        row.map((cell, c) => (
          <button
            key={`${r}-${c}`}
            onClick={() => onCellClick(r, c)}
            disabled={disabled}
            className={`transition-all ${disabled ? "cursor-default" : "hover:opacity-80 cursor-pointer"}`}
            style={{
              background: COLOR_HEX[cell],
              border: cell === 0 ? "1px dashed rgba(255,255,255,0.15)" : "none",
            }}
          />
        ))
      )}
    </div>
  );
}

function emptyOf(template: Grid): Grid {
  return template.map((r) => r.map(() => 0 as Cell)) as Grid;
}

function FinalResults({ solved, onRestart }: { solved: boolean[]; onRestart: () => void }) {
  const correctCount = solved.filter(Boolean).length;
  const total = solved.length;
  const pct = Math.round((correctCount / total) * 100);

  return (
    <div className="animate-fade-up">
      <div className="p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center">
        <div className="font-mono text-sm text-[var(--color-fg-mute)] uppercase tracking-wider mb-4">Resultado</div>
        <div className="font-mono text-7xl md:text-9xl font-extrabold mb-2 text-[var(--color-good)]">
          {correctCount}<span className="text-3xl text-[var(--color-fg-mute)]">/{total}</span>
        </div>

        <div className="grid grid-cols-5 gap-3 max-w-md mx-auto my-8">
          {solved.map((ok, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg flex items-center justify-center font-mono text-2xl"
              style={{ background: ok ? "var(--color-good)" : "var(--color-bad)", color: "var(--color-bg)" }}
            >
              {ok ? "✓" : "✗"}
            </div>
          ))}
        </div>

        <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30 text-left">
          <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3 text-center">
            Veredicto vs IA
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="font-mono text-5xl font-extrabold text-[var(--color-good)]">{pct}%</div>
              <div className="text-sm text-[var(--color-fg-soft)] mt-1">Tú</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-5xl font-extrabold text-[var(--color-bad)]">~0,5%</div>
              <div className="text-sm text-[var(--color-fg-soft)] mt-1">Mejor IA del mundo<br /><span className="text-xs">en ARC-AGI-3 real</span></div>
            </div>
          </div>
          <p className="text-sm text-[var(--color-fg)] leading-relaxed mt-6">
            Estos puzzles son la versión simplificada (ARC-AGI clásico). Los reales de
            <strong> ARC-AGI-3</strong> son puzzles interactivos tipo videojuego, sin instrucciones,
            donde hay que descubrir las reglas <em>jugando</em>. Los humanos puntúan
            <strong className="text-[var(--color-good)]"> 100%</strong> de promedio.
            El mejor modelo del mundo (GPT-5.5, mayo 2026) puntúa
            <strong className="text-[var(--color-bad)]"> 0,51%</strong>.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Volver a jugar (puzzles nuevos)
          </button>
          <a
            href="/jugar/arc-agi-3"
            className="px-6 py-3 rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
          >
            Probar el mini-juego ARC-AGI-3 →
          </a>
          <a
            href="/jugar/contra-la-ia"
            className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            Donde la IA gana →
          </a>
        </div>
      </div>
    </div>
  );
}
