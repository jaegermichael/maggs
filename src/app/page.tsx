import Image from "next/image";
import Link from "next/link";
import { BenefitsBar } from "@/components/home/BenefitsBar";
import { CtaBand } from "@/components/home/CtaBand";
import { HomeHero } from "@/components/home/HomeHero";
import { PortfolioStrip } from "@/components/home/PortfolioStrip";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { LaserFieldLazy } from "@/components/three/LaserFieldLazy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitsBar />
      <ServicesPreview />

      <section className="px-3 py-8 sm:px-5">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-panel lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <SectionHeading
              eyebrow="The Maggs method"
              title="From sketch to site"
              body="A clear fabrication path for homeowners, architects and contractors who need metalwork that fits first time."
            />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <li
                  key={step.n}
                  className="rounded-3xl border border-black/5 bg-maggs-mist/70 p-5"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-maggs-orange">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-maggs-mute">{step.body}</p>
                </li>
              ))}
            </ol>
            <Link href="/process" className="btn-dark mt-8">
              See the full process
            </Link>
          </div>
          <div className="relative min-h-[360px] bg-maggs-black">
            <LaserFieldLazy className="absolute inset-0" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/55 p-4 text-sm text-white/80 backdrop-blur">
              Live laser path visualisation. Pattern nesting and cut simulation
              inspired by the Maggs workshop floor.
            </div>
          </div>
        </div>
      </section>

      <PortfolioStrip />

      <section className="container-maggs py-10">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-maggs-mist lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[300px]">
            <Image
              src="/images/workshop.jpg"
              alt="Maggs fibre laser workshop"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
          <div className="p-8 sm:p-12">
            <SectionHeading
              eyebrow="Workshop"
              title="Cut with confidence"
              body="Durable materials. Expert craftsmanship. Custom designs. Maggs Engineering Group fabricates structural metalwork with laser CNC precision and practical install support."
            />
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["14+", "Years making"],
                ["860+", "Pieces delivered"],
                ["£250", "Gates from"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-display text-3xl text-maggs-orange">{n}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-maggs-mute">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                About Maggs
              </Link>
              <Link href="/configurator" className="btn-ghost">
                Open configurator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
