import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/data/site";

export function CtaBand() {
  return (
    <section className="px-3 pb-10 sm:px-5">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-[2rem] bg-maggs-orange px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            Call us today
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase leading-none sm:text-5xl">
            Let&apos;s build your secure solution.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/85">
            Tell us about the gate, screen or fabrication you need. We&apos;ll
            come back with options, timings and a clear price path.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center gap-3 rounded-full bg-maggs-black px-5 py-3 text-lg font-bold text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-maggs-orange">
              <Phone className="h-5 w-5" />
            </span>
            {brand.phone}
          </a>
          <Link
            href="/quote"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-maggs-black"
          >
            Get in touch now
          </Link>
        </div>
      </div>
    </section>
  );
}
