"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { portfolio } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const filters = ["All", "Gates", "Screens", "Cladding", "Signage", "Renovations", "Engineering"];

export function PortfolioStrip() {
  const [filter, setFilter] = useState("All");
  const items =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <section className="container-maggs py-16 sm:py-20">
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Built pieces. Real sites."
          body="A cross-section of gates, screens, cladding and fabrication from recent Maggs projects."
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition",
                filter === f
                  ? "bg-maggs-orange text-white"
                  : "bg-white text-maggs-steel ring-1 ring-black/10 hover:text-maggs-black"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item.id} className="card-surface overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-maggs-orange">
                  {item.category}
                </p>
                <p className="text-xs text-maggs-mute">{item.location}</p>
              </div>
              <h3 className="mt-2 font-display text-2xl uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-maggs-mute">{item.blurb}</p>
              <p className="mt-3 text-xs font-medium text-maggs-steel">
                {item.material}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/portfolio" className="btn-dark">
          Open full portfolio
        </Link>
      </div>
    </section>
  );
}
