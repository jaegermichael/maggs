"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  gateFinishes,
  gateMaterials,
  gatePatterns,
} from "@/data/site";
import { formatCurrency } from "@/lib/utils";

const GateScene = dynamic(
  () => import("@/components/three/GateScene").then((m) => m.GateScene),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full min-h-[420px] place-items-center bg-maggs-black text-white/50">
        Building 3D preview…
      </div>
    ),
  }
);

export function GateConfigurator() {
  const [pattern, setPattern] = useState(gatePatterns[0].id);
  const [material, setMaterial] = useState(gateMaterials[0].id);
  const [finish, setFinish] = useState(gateFinishes[0].id);
  const [width, setWidth] = useState(3.2);
  const [height, setHeight] = useState(1.8);
  const [automation, setAutomation] = useState(true);
  const [pedestrian, setPedestrian] = useState(false);

  const estimate = useMemo(() => {
    const p = gatePatterns.find((x) => x.id === pattern)!;
    const m = gateMaterials.find((x) => x.id === material)!;
    const f = gateFinishes.find((x) => x.id === finish)!;
    const area = width * height;
    const base = 250 + area * 185;
    let total = base * p.complexity * m.multiplier * f.multiplier;
    if (automation) total += 420;
    if (pedestrian) total += 280;
    return Math.round(total);
  }, [pattern, material, finish, width, height, automation, pedestrian]);

  const mat = gateMaterials.find((x) => x.id === material)!;
  const fin = gateFinishes.find((x) => x.id === finish)!;
  const previewColor =
    finish === "maggs-orange" ? fin.color : mat.swatch || fin.color;

  const quoteHref = `/quote?type=Gates&pattern=${pattern}&material=${material}&finish=${finish}&width=${width}&height=${height}&estimate=${estimate}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-[1.75rem] bg-maggs-black shadow-panel">
        <div className="h-[460px] sm:h-[540px]">
          <GateScene
            pattern={pattern}
            color={previewColor}
            accent="#141414"
            autoRotate
          />
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-white/70">
          <p>Interactive CNC gate preview</p>
          <p className="font-semibold text-maggs-orange">
            Est. {formatCurrency(estimate)}
          </p>
        </div>
      </div>

      <div className="card-surface p-5 sm:p-7">
        <p className="chip">Live configurator</p>
        <h1 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
          Design your gate
        </h1>
        <p className="mt-3 text-sm text-maggs-mute">
          Tune pattern, material and size. Instant estimate for conversation
          starters. Final quote after site measure.
        </p>

        <div className="mt-8 space-y-6">
          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-maggs-mute">
              Pattern
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {gatePatterns.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPattern(item.id)}
                  className={`rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition ${
                    pattern === item.id
                      ? "border-maggs-orange bg-orange-50 text-maggs-orange"
                      : "border-black/10 hover:border-black/20"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-maggs-mute">
              Material
            </legend>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {gateMaterials.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMaterial(item.id)}
                  className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left text-sm font-semibold ${
                    material === item.id
                      ? "border-maggs-orange bg-orange-50"
                      : "border-black/10"
                  }`}
                >
                  <span
                    className="h-6 w-6 rounded-full ring-1 ring-black/10"
                    style={{ background: item.swatch }}
                  />
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xs font-bold uppercase tracking-[0.16em] text-maggs-mute">
              Finish
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {gateFinishes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFinish(item.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wider ${
                    finish === item.id
                      ? "border-maggs-black bg-maggs-black text-white"
                      : "border-black/10"
                  }`}
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: item.color }}
                  />
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">
              <span>Width (m): {width.toFixed(1)}</span>
              <input
                type="range"
                min={1.2}
                max={6}
                step={0.1}
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
              />
            </label>
            <label className="field">
              <span>Height (m): {height.toFixed(1)}</span>
              <input
                type="range"
                min={1.2}
                max={2.6}
                step={0.1}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setAutomation((v) => !v)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                automation
                  ? "bg-maggs-orange text-white"
                  : "bg-maggs-mist text-maggs-steel"
              }`}
            >
              Automation {automation ? "on" : "off"}
            </button>
            <button
              type="button"
              onClick={() => setPedestrian((v) => !v)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                pedestrian
                  ? "bg-maggs-orange text-white"
                  : "bg-maggs-mist text-maggs-steel"
              }`}
            >
              Pedestrian gate {pedestrian ? "yes" : "no"}
            </button>
          </div>

          <div className="rounded-[1.5rem] bg-maggs-black p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              Ballpark estimate
            </p>
            <p className="mt-2 font-display text-5xl text-maggs-orange">
              {formatCurrency(estimate)}
            </p>
            <p className="mt-2 text-sm text-white/60">
              Includes pattern complexity, material and selected options.
              Installation surveyed separately.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={quoteHref} className="btn-primary">
                Request this quote
              </Link>
              <a href="tel:0772780125" className="btn-ghost border-white/15 bg-white/5 text-white">
                Call 0772780125
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
