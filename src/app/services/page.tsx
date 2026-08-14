import Image from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/site";
import { formatCurrency } from "@/lib/utils";


export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="container-maggs pb-20">
        <SectionHeading
          eyebrow="Services"
          title="Fabrication for the whole property"
          body="Six core offers spanning entrance security, privacy, facade identity and one-off engineering."
        />

        <div className="mt-12 space-y-6">
          {services.map((service, index) => (
            <article
              id={service.slug}
              key={service.slug}
              className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-panel lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[280px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-maggs-orange">
                  0{index + 1} · from {formatCurrency(service.from)}
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-maggs-mute">
                  {service.summary}
                </p>
                <ul className="mt-6 space-y-2 text-sm font-medium text-maggs-ink">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-maggs-orange" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/quote" className="btn-primary">
                    Quote this service
                  </Link>
                  {service.slug === "gates" ? (
                    <Link href="/configurator" className="btn-ghost">
                      Configure a gate
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
