"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/site";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  ...Array.from(new Set(portfolio.map((p) => p.category))),
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(portfolio[0].id);

  const items = useMemo(
    () =>
      filter === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === filter),
    [filter]
  );

  const selected = items.find((p) => p.id === active) ?? items[0];

  return (
    <div className="pt-28">
      <section className="container-maggs pb-20">
        <SectionHeading
          eyebrow="Portfolio"
          title="Work that holds the frontage"
          body="Browse installed and fabricated pieces. Click any project to open the detail stage."
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                const next =
                  f === "All"
                    ? portfolio[0]
                    : portfolio.find((p) => p.category === f);
                if (next) setActive(next.id);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider",
                filter === f
                  ? "bg-maggs-black text-white"
                  : "bg-white ring-1 ring-black/10"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-[1.75rem] bg-maggs-black shadow-panel">
            <div className="relative aspect-[16/11]">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
                priority
              />
            </div>
            <div className="p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-maggs-orange">
                {selected.category} · {selected.location}
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase">
                {selected.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/70">
                {selected.blurb}
              </p>
              <p className="mt-4 text-sm font-medium text-white/85">
                {selected.material}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex gap-3 overflow-hidden rounded-[1.35rem] border bg-white p-3 text-left transition",
                  selected.id === item.id
                    ? "border-maggs-orange shadow-glow"
                    : "border-black/5 hover:border-black/15"
                )}
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-maggs-orange">
                    {item.category}
                  </p>
                  <p className="mt-1 font-display text-xl uppercase leading-none">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-maggs-mute">{item.location}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
