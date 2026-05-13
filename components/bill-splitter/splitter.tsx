"use client";

import { useState, useMemo } from "react";

type Item = { id: number; name: string; price: number; assignees: number[] };
type Person = { id: number; name: string; color: string };

const COLORS = [
  "#ff5722",
  "#38bdf8",
  "#ec4899",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
];

const INITIAL_PEOPLE: Person[] = [
  { id: 0, name: "Marcos", color: COLORS[0] },
  { id: 1, name: "Noe", color: COLORS[1] },
  { id: 2, name: "Pedro", color: COLORS[2] },
  { id: 3, name: "Ana", color: COLORS[3] },
];

const INITIAL_ITEMS: Item[] = [
  { id: 1, name: "Croquetas (compartidas)", price: 9.0, assignees: [] },
  { id: 2, name: "Patatas bravas (compartidas)", price: 7.5, assignees: [] },
  { id: 3, name: "Tortilla (compartida)", price: 8.0, assignees: [] },
  { id: 4, name: "Entrecot", price: 24.0, assignees: [] },
  { id: 5, name: "Salmón a la plancha", price: 18.5, assignees: [] },
  { id: 6, name: "Risotto de setas", price: 15.0, assignees: [] },
  { id: 7, name: "Ensalada César", price: 11.0, assignees: [] },
  { id: 8, name: "2 cervezas grandes", price: 8.0, assignees: [] },
  { id: 9, name: "Botella vino tinto", price: 22.0, assignees: [] },
  { id: 10, name: "Agua mineral", price: 3.5, assignees: [] },
  { id: 11, name: "Tarta de queso", price: 6.0, assignees: [] },
  { id: 12, name: "Café x4", price: 6.0, assignees: [] },
];

export function BillSplitter() {
  const [items, setItems] = useState<Item[]>(INITIAL_ITEMS);
  const [people] = useState<Person[]>(INITIAL_PEOPLE);

  const toggleAssignee = (itemId: number, personId: number) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === itemId
          ? {
              ...it,
              assignees: it.assignees.includes(personId)
                ? it.assignees.filter((a) => a !== personId)
                : [...it.assignees, personId],
            }
          : it
      )
    );
  };

  const totals = useMemo(() => {
    const map: Record<number, number> = {};
    people.forEach((p) => (map[p.id] = 0));
    items.forEach((it) => {
      if (it.assignees.length === 0) return;
      const share = it.price / it.assignees.length;
      it.assignees.forEach((pid) => {
        map[pid] += share;
      });
    });
    return map;
  }, [items, people]);

  const totalBill = items.reduce((sum, it) => sum + it.price, 0);
  const totalAssigned = Object.values(totals).reduce((a, b) => a + b, 0);
  const unassigned = totalBill - totalAssigned;

  const assignAll = () => {
    setItems((prev) =>
      prev.map((it) =>
        it.assignees.length === 0
          ? { ...it, assignees: people.map((p) => p.id) }
          : it
      )
    );
  };

  const clearAll = () => {
    setItems((prev) => prev.map((it) => ({ ...it, assignees: [] })));
  };

  return (
    <div>
      <div className="mb-6 p-5 rounded-xl bg-[var(--color-bg-card)] border-l-4 border-[var(--color-accent)]">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">
          Instrucciones
        </div>
        <p className="text-sm text-[var(--color-fg-soft)]">
          Para cada plato, pulsa quiénes lo comparten. Las personas que comparten un
          plato se reparten el coste a partes iguales. Pulsa "asignar todos" para platos
          compartidos por toda la mesa.
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={assignAll}
          className="px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)] font-mono text-xs transition-colors"
        >
          Asignar todos a items sin asignar
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-bad)] font-mono text-xs transition-colors"
        >
          Limpiar todo
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
            Ticket
          </div>
          <div className="rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
            {items.map((it) => (
              <div key={it.id} className="p-4 border-b border-[var(--color-border)] last:border-b-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="font-medium text-base">{it.name}</div>
                  </div>
                  <div className="font-mono text-base font-semibold text-[var(--color-accent)]">
                    {it.price.toFixed(2)} €
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {people.map((p) => {
                    const isAssigned = it.assignees.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        onClick={() => toggleAssignee(it.id, p.id)}
                        className={`px-3 py-1 rounded-full text-xs font-mono transition-all border-2 ${
                          isAssigned ? "text-[var(--color-bg)] font-semibold" : "text-[var(--color-fg-soft)] border-[var(--color-border)]"
                        }`}
                        style={isAssigned ? { background: p.color, borderColor: p.color } : undefined}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
                {it.assignees.length > 0 && (
                  <div className="mt-2 font-mono text-[11px] text-[var(--color-fg-mute)]">
                    {(it.price / it.assignees.length).toFixed(2)} € por persona
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
            Reparto
          </div>
          <div className="rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-5 sticky top-24">
            <div className="space-y-3 mb-6">
              {people.map((p) => (
                <div key={p.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: p.color }} />
                    <span className="font-semibold">{p.name}</span>
                  </div>
                  <span className="font-mono text-lg font-bold" style={{ color: p.color }}>
                    {totals[p.id].toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--color-border)] space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-fg-mute)]">Cuenta total</span>
                <span className="font-mono">{totalBill.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-fg-mute)]">Asignado</span>
                <span className="font-mono text-[var(--color-good)]">{totalAssigned.toFixed(2)} €</span>
              </div>
              {unassigned > 0.01 && (
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-warn)]">Sin asignar</span>
                  <span className="font-mono text-[var(--color-warn)]">{unassigned.toFixed(2)} €</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
        <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
          Qué hace una IA real
        </div>
        <p className="text-base text-[var(--color-fg)] leading-relaxed mb-3">
          Esta demo es un mock para enseñar el concepto. La IA real (ChatGPT / Claude / Gemini con cámara)
          haría exactamente lo mismo a partir de una <strong>foto del ticket</strong> + instrucciones en
          lenguaje natural: <em>"Pedro no bebió, Ana solo cenó postre, los demás todo igual"</em>.
        </p>
        <p className="text-sm text-[var(--color-fg-soft)]">
          Pruébalo de verdad: foto al próximo ticket que pagues en grupo, súbelo a un chatbot,
          y cuéntale las restricciones. <a href="/casos/dividir-cuenta" className="text-[var(--color-accent)] underline">Ver el caso completo con prompt</a>.
        </p>
      </div>
    </div>
  );
}
