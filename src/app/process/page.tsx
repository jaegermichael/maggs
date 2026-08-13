import type { Metadata } from "next";
import Link from "next/link";
import { LaserFieldLazy } from "@/components/three/LaserFieldLazy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Process",
};

export default function ProcessPage() {
  return (
    <div className="pt-28">
      <section className="container-maggs pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Process"
            title="Four moves. No fog."
            body="Whether you arrive with architect drawings or a phone photo of the driveway, Maggs keeps the path simple."
          />
          <div className="overflow-hidden rounded-[1.75rem] bg-maggs-black shadow-panel">
            <div className="h-[300px]">
              <LaserFieldLazy />
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <li
              key={step.n}
              className="relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-panel"
            >
              <span className="font-display text-7xl text-maggs-orange/15">
                {step.n}
              </span>
              <h2 className="mt-2 font-display text-3xl uppercase">
                {step.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-maggs-mute">
                {step.body}
              </p>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-maggs-orange" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-maggs-mute">
                Stage {i + 1} of 4
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-[1.75rem] bg-maggs-black p-8 text-white sm:p-10">
          <h3 className="font-display text-3xl uppercase">
            Ready when your drawings are
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Send sketches, CAD, or a site brief. We&apos;ll confirm feasibility,
            materials and a price band before metal hits the bed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/quote" className="btn-primary">
              Start a project
            </Link>
            <Link
              href="/configurator"
              className="btn-ghost border-white/15 bg-white/5 text-white"
            >
              Build a gate estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
