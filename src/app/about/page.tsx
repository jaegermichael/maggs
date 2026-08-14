import Image from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { SectionHeading } from "@/components/ui/SectionHeading";


export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="container-maggs pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeading
            eyebrow="About Maggs"
            title="Engineering with a sharp edge"
            body="Maggs Engineering & Consultancy specialises in laser CNC structural design and fabrication. We manufacture gates, privacy screens, wall cladding, signage, renovations and general engineering for homes and commercial sites."
          />
          <div className="rounded-[1.75rem] bg-maggs-black p-6 text-white sm:p-8">
            <p className="font-display text-4xl uppercase leading-none text-maggs-orange">
              Stylish. Secure. Built for you.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Part of Maggs Engineering Group. Practical fabrication, premium
              finishes, and direct communication from brief to install.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] md:col-span-2">
            <Image
              src="/images/workshop.jpg"
              alt="Maggs workshop floor"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 66vw"
            />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/logo.png"
              alt="Maggs logo detail from brand artwork"
              fill
              className="object-contain bg-white p-8"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            [
              "Design-led cutting",
              "Patterns are engineered for strength, shadow and clean install, not just decoration.",
            ],
            [
              "Materials that last",
              "Mild steel, aluminium, corten and stainless with powder coat and protective finishes.",
            ],
            [
              "Direct delivery",
              "Talk to the people making the work. Clear pricing paths from £250 gate packages upward.",
            ],
          ].map(([t, b]) => (
            <article key={t} className="card-surface p-6">
              <h3 className="font-display text-2xl uppercase">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-maggs-mute">{b}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/configurator" className="btn-primary">
            Try the gate configurator
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact the workshop
          </Link>
        </div>
      </section>
    </div>
  );
}
