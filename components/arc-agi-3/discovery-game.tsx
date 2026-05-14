"use client";

import { useState, useEffect, useCallback } from "react";
import { levels, type Level, type LevelState, type Dir } from "./levels";

export function DiscoveryGame() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [solved, setSolved] = useState<boolean[]>(new Array(levels.length).fill(false));

  if (levelIdx >= levels.length) {
    return (
      <FinalScreen
        solved={solved}
        onRestart={() => {
          setLevelIdx(0);
          setSolved(new Array(levels.length).fill(false));
        }}
      />
    );
  }

  return (
    <div>
      <ProgressBar
        current={levelIdx + 1}
        total={levels.length}
        solved={solved}
        onJump={(i) => setLevelIdx(i)}
      />
      <LevelPlay
        key={levelIdx}
        level={levels[levelIdx]}
        onSolved={() => {
          setSolved((prev) => {
            const next = [...prev];
            next[levelIdx] = true;
            return next;
          });
        }}
        onNext={() => setLevelIdx((i) => i + 1)}
        onPrev={levelIdx > 0 ? () => setLevelIdx((i) => i - 1) : undefined}
        isLast={levelIdx === levels.length - 1}
      />
    </div>
  );
}

function LevelPlay({
  level,
  onSolved,
  onNext,
  onPrev,
  isLast,
}: {
  level: Level;
  onSolved: () => void;
  onNext: () => void;
  onPrev?: () => void;
  isLast: boolean;
}) {
  const [state, setState] = useState<LevelState>(level.initial);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setState(level.initial);
    setMoves(0);
    setWon(false);
    setShowHint(false);
  }, [level]);

  useEffect(() => {
    if (!won && level.isWon(state)) {
      setWon(true);
      onSolved();
    }
  }, [state, won, level, onSolved]);

  const move = useCallback(
    (dir: Dir) => {
      if (won) return;
      setState((s) => level.step(s, dir));
      setMoves((m) => m + 1);
    },
    [won, level]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") { e.preventDefault(); move("up"); }
      else if (e.key === "ArrowDown") { e.preventDefault(); move("down"); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); move("left"); }
      else if (e.key === "ArrowRight") { e.preventDefault(); move("right"); }
      else if (e.key === "r" || e.key === "R") { setState(level.initial); setMoves(0); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, level]);

  return (
    <div className="mt-6 p-6 md:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h2 className="text-3xl font-bold">{level.title}</h2>
        <div className="flex items-center gap-3 font-mono text-sm">
          <span className="text-[var(--color-fg-mute)]">MOVS:</span>
          <span className="text-[var(--color-accent)] font-bold">{moves}</span>
        </div>
      </div>

      <p className="text-base text-[var(--color-fg-soft)] mb-6">
        Sin instrucciones. Pulsa las flechas y descubre qué hace cada una.
        <em> Decididlo en grupo</em>: hablad qué creéis que pasará antes de pulsar.
      </p>

      <div className="flex flex-col items-center mb-6">
        <Board state={state} />
        <Legend state={state} />
      </div>

      <div className="flex flex-col items-center gap-2 mb-6">
        <DirButton onClick={() => move("up")} disabled={won} label="↑" />
        <div className="flex gap-2">
          <DirButton onClick={() => move("left")} disabled={won} label="←" />
          <DirButton onClick={() => move("down")} disabled={won} label="↓" />
          <DirButton onClick={() => move("right")} disabled={won} label="→" />
        </div>
        <div className="font-mono text-[10px] text-[var(--color-fg-mute)] mt-2">
          También: flechas del teclado · "R" para reiniciar
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {onPrev && (
          <button
            onClick={onPrev}
            className="px-4 py-2 rounded-lg border border-[var(--color-border-strong)] font-mono text-xs hover:bg-white/5 transition-colors"
          >
            ← Nivel anterior
          </button>
        )}
        <button
          onClick={() => { setState(level.initial); setMoves(0); }}
          disabled={won}
          className="px-4 py-2 rounded-lg border border-[var(--color-border-strong)] font-mono text-xs hover:bg-white/5 transition-colors disabled:opacity-40"
        >
          ⟳ Reiniciar
        </button>
        <button
          onClick={() => setShowHint((h) => !h)}
          disabled={won}
          className="px-4 py-2 rounded-lg border border-[var(--color-warn)]/40 text-[var(--color-warn)] font-mono text-xs hover:bg-[var(--color-warn)]/10 transition-colors disabled:opacity-40"
        >
          {showHint ? "Ocultar pista" : "Pista 💡"}
        </button>
        {won && (
          <button
            onClick={onNext}
            className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-xs font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Siguiente nivel →
          </button>
        )}
      </div>

      {showHint && !won && (
        <div className="p-4 rounded-xl bg-[var(--color-warn)]/10 border-l-4 border-[var(--color-warn)] mb-4 animate-fade-up">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-warn)] mb-1">PISTA</div>
          <p className="text-sm text-[var(--color-fg)]">{level.hint}</p>
        </div>
      )}

      {won && (
        <div className="mt-2 animate-fade-up">
          <div className="p-6 rounded-xl bg-[var(--color-good)]/10 border-l-4 border-[var(--color-good)]">
            <div className="font-mono text-sm font-bold text-[var(--color-good)] mb-2">¡Conseguido!</div>
            <p className="text-base text-[var(--color-fg)] mb-2">
              Lo resolvieron en <strong>{moves}</strong> movimiento{moves !== 1 ? "s" : ""}.
            </p>
            <p className="text-base text-[var(--color-fg)] leading-relaxed">
              <span className="font-semibold">La regla:</span> {level.revealedRule}
            </p>
            <button
              onClick={onNext}
              className="mt-5 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
            >
              {isLast ? "Ver veredicto final →" : "Siguiente nivel →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Board({ state }: { state: LevelState }) {
  const cellSize = 52;
  return (
    <div
      className="inline-grid rounded-lg overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${state.width}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${state.height}, ${cellSize}px)`,
        gap: 2,
        background: "var(--color-border-strong)",
        padding: 2,
      }}
    >
      {Array.from({ length: state.height }).flatMap((_, r) =>
        Array.from({ length: state.width }).map((_, c) => (
          <CellRender key={`${r}-${c}`} state={state} r={r} c={c} />
        ))
      )}
    </div>
  );
}

function CellRender({ state, r, c }: { state: LevelState; r: number; c: number }) {
  const cell = { r, c };
  const isPlayer = state.player.r === r && state.player.c === c;
  const isClone = state.clones?.some((cl) => cl.r === r && cl.c === c) ?? false;
  const boxIdx = state.boxes.findIndex((b) => b.r === r && b.c === c);
  const isBox = boxIdx >= 0;
  const goalIdx = state.goals.findIndex((g) => g.r === r && g.c === c);
  const isGoal = goalIdx >= 0;
  const isWall = state.walls.some((w) => w.r === r && w.c === c);
  const doorIdx = state.doors?.findIndex((d) => d.pos.r === r && d.pos.c === c) ?? -1;
  const isClosedDoor = doorIdx >= 0 && !state.doors![doorIdx].open;
  const isOpenDoor = doorIdx >= 0 && state.doors![doorIdx].open;
  const isSwitch = state.switches?.some((s) => s.pos.r === r && s.pos.c === c) ?? false;
  const teleporter = state.teleporters?.find(
    (t) =>
      (t.from.r === r && t.from.c === c) || (t.to.r === r && t.to.c === c)
  );

  // Box color (puede ser undefined si no es color-puzzle)
  const boxColor = isBox ? state.boxColors?.[boxIdx] ?? "#fbbf24" : undefined;
  const goalColor = isGoal ? state.goalColors?.[goalIdx] ?? "#10b981" : undefined;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        background: isWall ? "#3f3f46" : isClosedDoor ? "#52525b" : "var(--color-bg)",
      }}
    >
      {/* DOOR closed */}
      {isClosedDoor && (
        <div className="absolute inset-1 flex items-center justify-center">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)",
          }} />
        </div>
      )}

      {/* DOOR open (subtle marker) */}
      {isOpenDoor && (
        <div className="absolute inset-2 rounded border-2 border-dashed" style={{ borderColor: "rgba(82,82,91,0.5)" }} />
      )}

      {/* SWITCH */}
      {isSwitch && (
        <div className="absolute inset-3 rounded-full border-2"
             style={{ borderColor: "#fbbf24", background: "rgba(251,191,36,0.2)" }} />
      )}

      {/* TELEPORTER */}
      {teleporter && (
        <div
          className="absolute inset-2 rounded-full animate-pulse-glow"
          style={{
            background: `radial-gradient(circle, ${teleporter.color} 30%, transparent 70%)`,
            border: `2px solid ${teleporter.color}`,
          }}
        />
      )}

      {/* GOAL */}
      {isGoal && !isBox && (
        <div
          className="absolute inset-1 rounded"
          style={{ border: `2px dashed ${goalColor}` }}
        />
      )}

      {/* BOX */}
      {isBox && (
        <div
          className="absolute inset-2 rounded"
          style={{
            background: isGoal && (state.goalColors?.[goalIdx] === undefined || state.goalColors[goalIdx] === boxColor)
              ? "#10b981"
              : boxColor,
            transition: "all 200ms ease",
          }}
        />
      )}

      {/* PLAYER */}
      {isPlayer && (
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: "#38bdf8",
            boxShadow: "0 0 12px rgba(56,189,248,0.6)",
            transition: "all 200ms ease",
          }}
        />
      )}

      {/* CLONE */}
      {isClone && (
        <div
          className="absolute inset-3 rounded-full"
          style={{
            background: "#0ea5e9",
            border: "2px solid #38bdf8",
            transition: "all 200ms ease",
          }}
        />
      )}
    </div>
  );
}

function Legend({ state }: { state: LevelState }) {
  const items: { color: string; border?: string; label: string; round?: boolean }[] = [
    { color: "#38bdf8", label: "Tú", round: true },
  ];
  if (state.clones && state.clones.length > 0) {
    items.push({ color: "#0ea5e9", border: "#38bdf8", label: "Clon", round: true });
  }
  if (state.boxes.length > 0) {
    items.push({ color: "#fbbf24", label: "Caja" });
  }
  if (state.boxColors?.some((c) => c)) {
    items.push({ color: "#ef4444", label: "Caja roja" });
  }
  items.push({ color: "transparent", border: "#10b981", label: "Objetivo" });
  if (state.walls.length > 0) {
    items.push({ color: "#3f3f46", label: "Pared" });
  }
  if (state.doors && state.doors.length > 0) {
    items.push({ color: "#52525b", label: "Puerta" });
  }
  if (state.switches && state.switches.length > 0) {
    items.push({ color: "transparent", border: "#fbbf24", label: "Interruptor", round: true });
  }
  if (state.teleporters && state.teleporters.length > 0) {
    items.push({ color: "#ec4899", label: "Teleporter", round: true });
  }

  return (
    <div className="flex flex-wrap gap-3 mt-5 mb-2 font-mono text-xs items-center justify-center text-[var(--color-fg-mute)]">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div
            className={item.round ? "w-3 h-3 rounded-full" : "w-3 h-3 rounded-sm"}
            style={{
              background: item.color,
              border: item.border ? `2px ${item.border === "#10b981" || item.border === "#fbbf24" ? "dashed" : "solid"} ${item.border}` : "none",
            }}
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function DirButton({ onClick, disabled, label }: { onClick: () => void; disabled: boolean; label: string }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-14 h-14 rounded-lg bg-[var(--color-bg-card-hi)] border border-[var(--color-border-strong)] text-2xl font-bold hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:border-[var(--color-accent)] transition-all disabled:opacity-40 disabled:hover:bg-[var(--color-bg-card-hi)] disabled:hover:text-[var(--color-fg)] disabled:hover:border-[var(--color-border-strong)]"
    >
      {label}
    </button>
  );
}

function ProgressBar({ current, total, solved, onJump }: { current: number; total: number; solved: boolean[]; onJump: (i: number) => void }) {
  return (
    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
      <span className="font-mono text-xs text-[var(--color-fg-mute)]">NIVEL {current} de {total}</span>
      <div className="flex gap-1.5 flex-wrap">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onJump(i)}
            className="w-6 h-6 rounded-md flex items-center justify-center font-mono text-[10px] font-bold transition-all hover:scale-110"
            style={{
              background:
                solved[i]
                  ? "var(--color-good)"
                  : i === current - 1
                  ? "var(--color-accent)"
                  : "var(--color-bg-card-hi)",
              color: solved[i] || i === current - 1 ? "var(--color-bg)" : "var(--color-fg-mute)",
            }}
            title={`Ir a nivel ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function FinalScreen({ solved, onRestart }: { solved: boolean[]; onRestart: () => void }) {
  const completed = solved.filter(Boolean).length;
  return (
    <div className="animate-fade-up">
      <div className="p-10 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center">
        <div className="font-mono text-sm text-[var(--color-fg-mute)] uppercase tracking-wider mb-4">
          Habéis completado
        </div>
        <div className="font-mono text-7xl md:text-9xl font-extrabold mb-8 text-[var(--color-good)]">
          {completed}<span className="text-3xl text-[var(--color-fg-mute)]">/{levels.length}</span>
        </div>

        <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30 text-left">
          <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3 text-center">
            ¿Por qué esto es ARC-AGI-3?
          </div>
          <p className="text-base text-[var(--color-fg)] leading-relaxed mb-3">
            Acabáis de hacer lo que la IA más cara del mundo <strong>no consigue</strong>:
            entrar a varios entornos desconocidos, sin instrucciones, sin ejemplos,
            <strong> deducir las reglas jugando</strong>, y adaptaros cuando cambian
            entre niveles.
          </p>
          <p className="text-sm text-[var(--color-fg-soft)] leading-relaxed mb-3">
            ARC-AGI-3 (lanzado en marzo 2025 por François Chollet) son cientos de
            entornos como estos. Los humanos puntúan <strong className="text-[var(--color-good)]">100%</strong>.
            GPT-5.5 (el mejor modelo del mundo en mayo 2026) puntúa
            <strong className="text-[var(--color-bad)]"> 0,51%</strong>.
          </p>
          <p className="text-xs text-[var(--color-fg-mute)] font-mono italic">
            Las IAs son superhumanas en tareas con muchos datos previos (traducir, programar,
            leer japonés). Son ciegas aprendiendo mecánicas nuevas sin guía. Por eso decimos
            que falta algo importante para la AGI.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-mono text-sm font-semibold hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            Volver a empezar
          </button>
          <a
            href="/agi"
            className="px-6 py-3 rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] font-mono text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors"
          >
            ¿Qué es AGI? →
          </a>
          <a
            href="/futuro"
            className="px-6 py-3 rounded-lg border border-[var(--color-border-strong)] font-mono text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            ¿Nos quedamos sin trabajo? →
          </a>
        </div>
      </div>
    </div>
  );
}
