"use client";

import { useState, useMemo } from "react";

// Datos verificados (research/04-impacto-ambiental.md)
const RATES = {
  text: { wh: 0.34, co2: 0.2, water: 0.32 },      // Wh, gCO2, ml por consulta
  reasoning: { wh: 35, co2: 18, water: 30 },
  image: { wh: 2, co2: 1, water: 2 },
  video10s: { wh: 940, co2: 466, water: 1000 },    // por cada 10s vídeo Sora
};

// Equivalencias diarias (al año)
const EQUIV = {
  // Estos son por unidad
  led10min: 1.7,         // Wh por bombilla LED de 10W encendida 10 min
  netflix1h: 300,        // Wh por hora de Netflix 4K
  netflixCo2_1h: 80,     // gCO2
  burger_water: 2400000, // ml por hamburguesa (2.400 L)
  burger_co2: 2500,      // g CO2
  shower_water: 80000,   // ml por ducha 5min
  shower_wh: 750,        // Wh para calentar
  carKm: 220,            // g CO2 por km coche gasolina
  flightMad_ny_co2: 750000, // g CO2 (un vuelo)
};

type UseMode = "text" | "reasoning" | "image" | "video10s";

const MODES: { key: UseMode; label: string; desc: string }[] = [
  { key: "text", label: "Chat de texto", desc: "Pregunta normal a ChatGPT/Claude" },
  { key: "reasoning", label: "Razonamiento profundo", desc: "Modo o3 / extended thinking" },
  { key: "image", label: "Generar imagen", desc: "Midjourney, DALL-E, Imagen" },
  { key: "video10s", label: "10s de vídeo Sora", desc: "Vídeo generativo con audio" },
];

export function ConsumoCalc() {
  const [mode, setMode] = useState<UseMode>("text");
  const [perDay, setPerDay] = useState(20);

  const totals = useMemo(() => {
    const rate = RATES[mode];
    const daily = {
      wh: rate.wh * perDay,
      co2: rate.co2 * perDay,
      water: rate.water * perDay,
    };
    const yearly = {
      wh: daily.wh * 365,
      co2: daily.co2 * 365,
      water: daily.water * 365,
    };
    return { daily, yearly };
  }, [mode, perDay]);

  // Equivalencias anuales (lo que más impacta visualmente)
  const equivs = useMemo(() => {
    const yearWh = totals.yearly.wh;
    const yearCo2 = totals.yearly.co2;
    const yearWater = totals.yearly.water;
    return {
      netflixHours: yearWh / EQUIV.netflix1h,
      ledMinutes: yearWh / (EQUIV.led10min / 10),
      burgers_water: yearWater / EQUIV.burger_water,
      burgers_co2: yearCo2 / EQUIV.burger_co2,
      showers: yearWater / EQUIV.shower_water,
      carKm: yearCo2 / EQUIV.carKm,
      flights: yearCo2 / EQUIV.flightMad_ny_co2,
    };
  }, [totals]);

  return (
    <div>
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-3">
          ¿Qué tipo de uso?
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MODES.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`p-4 rounded-xl text-left transition-all border-2 ${
                mode === m.key
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10"
                  : "border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/40"
              }`}
            >
              <div className="font-bold text-base mb-1">{m.label}</div>
              <div className="text-xs text-[var(--color-fg-soft)]">{m.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)]">
            ¿Cuántas al día?
          </div>
          <div className="font-mono text-2xl font-bold text-[var(--color-accent)]">{perDay}</div>
        </div>
        <input
          type="range"
          min={1}
          max={mode === "video10s" ? 50 : 500}
          value={perDay}
          onChange={(e) => setPerDay(Number(e.target.value))}
          className="w-full accent-[var(--color-accent)]"
        />
        <div className="flex justify-between font-mono text-xs text-[var(--color-fg-mute)] mt-1">
          <span>1</span>
          <span>{mode === "video10s" ? "50" : "500"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <BigStat label="Energía / año" value={fmtWh(totals.yearly.wh)} sub="vatios-hora" color="var(--color-warn)" />
        <BigStat label="CO₂ / año" value={fmtCo2(totals.yearly.co2)} sub="gramos" color="var(--color-bad)" />
        <BigStat label="Agua / año" value={fmtWater(totals.yearly.water)} sub="mililitros" color="var(--color-cool)" />
      </div>

      <h2 className="text-3xl font-bold mb-4">En cosas que conoces</h2>
      <p className="text-sm text-[var(--color-fg-mute)] mb-8">
        Tu uso anual de IA con estos parámetros equivale a:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EquivCard icon="📺" label="Horas de Netflix 4K" value={fmt(equivs.netflixHours)} color="var(--color-cool)" />
        <EquivCard icon="💡" label="Minutos de bombilla LED" value={fmt(equivs.ledMinutes)} color="var(--color-warn)" />
        <EquivCard icon="🍔" label="Hamburguesas (agua)" value={fmt(equivs.burgers_water, 3)} color="var(--color-hot)" />
        <EquivCard icon="🚿" label="Duchas de 5 min (agua)" value={fmt(equivs.showers, 2)} color="var(--color-cool)" />
        <EquivCard icon="🚗" label="Km en coche gasolina (CO₂)" value={fmt(equivs.carKm)} color="var(--color-bad)" />
        <EquivCard icon="✈️" label="Vuelos Madrid-NY (CO₂)" value={fmt(equivs.flights, 4)} color="var(--color-bad)" />
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--color-bg-card)] to-[rgba(255,87,34,0.08)] border border-[var(--color-accent)]/30">
        <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-wider mb-3">
          Lectura honesta
        </div>
        <ul className="space-y-2 text-sm text-[var(--color-fg-soft)] leading-relaxed">
          <li><strong className="text-[var(--color-fg)]">Texto trivial:</strong> 20 chats/día al año = unas pocas horas de Netflix. Despreciable.</li>
          <li><strong className="text-[var(--color-fg)]">Razonamiento:</strong> ~100× más. Una consulta "thinking" = 100 normales.</li>
          <li><strong className="text-[var(--color-fg)]">Vídeo Sora:</strong> la cosa se va al techo. 10 vídeos/día al año ≈ vuelo intercontinental.</li>
          <li><strong className="text-[var(--color-fg)]">Una hamburguesa pesa más</strong> en huella hídrica que 30.000 chats. Donde mirar primero no es la IA.</li>
        </ul>
        <p className="mt-4 text-xs text-[var(--color-fg-mute)] font-mono italic">
          Fuentes: OpenAI (Altman 2025), UC Riverside (Ren), IEA Energy and AI 2025, Water Footprint Network.
        </p>
      </div>
    </div>
  );
}

function BigStat({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border-t-4" style={{ borderTopColor: color }}>
      <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-mute)] mb-2">{label}</div>
      <div className="font-mono text-3xl font-bold leading-tight" style={{ color }}>{value}</div>
      <div className="font-mono text-xs text-[var(--color-fg-soft)] mt-1">{sub}</div>
    </div>
  );
}

function EquivCard({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  return (
    <div className="p-5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center gap-4">
      <div className="text-4xl">{icon}</div>
      <div className="flex-1">
        <div className="font-mono text-2xl font-bold" style={{ color }}>{value}</div>
        <div className="text-sm text-[var(--color-fg-soft)]">{label}</div>
      </div>
    </div>
  );
}

function fmt(n: number, decimals = 1): string {
  if (n < 1) return n.toFixed(decimals + 1);
  if (n < 1000) return n.toFixed(decimals);
  if (n < 1_000_000) return `${(n / 1000).toFixed(decimals)}K`;
  return `${(n / 1_000_000).toFixed(decimals)}M`;
}

function fmtWh(wh: number): string {
  if (wh < 1000) return `${wh.toFixed(0)} Wh`;
  if (wh < 1_000_000) return `${(wh / 1000).toFixed(1)} kWh`;
  return `${(wh / 1_000_000).toFixed(2)} MWh`;
}

function fmtCo2(g: number): string {
  if (g < 1000) return `${g.toFixed(0)} g`;
  if (g < 1_000_000) return `${(g / 1000).toFixed(1)} kg`;
  return `${(g / 1_000_000).toFixed(2)} t`;
}

function fmtWater(ml: number): string {
  if (ml < 1000) return `${ml.toFixed(0)} ml`;
  if (ml < 1_000_000) return `${(ml / 1000).toFixed(1)} L`;
  return `${(ml / 1_000_000).toFixed(2)} m³`;
}
