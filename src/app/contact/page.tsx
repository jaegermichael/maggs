import { Link } from "@/components/ui/Link";
import { Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/site";


export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="container-maggs pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Call us today"
              body="Let's build your secure solution. Maggs Engineering & Consultancy is ready for gates, screens, cladding, signage and custom fabrication enquiries."
            />

            <div className="mt-10 space-y-4">
              <a
                href={brand.phoneHref}
                className="flex items-center gap-4 rounded-[1.5rem] bg-maggs-orange p-5 text-white shadow-glow"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-maggs-black">
                  <Phone className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                    Phone
                  </span>
                  <span className="font-display text-4xl">{brand.phone}</span>
                </span>
              </a>

              <a
                href={brand.emailHref}
                className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white p-5"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-maggs-mist">
                  <Mail className="h-6 w-6 text-maggs-orange" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-maggs-mute">
                    Email
                  </span>
                  <span className="text-lg font-semibold">{brand.email}</span>
                </span>
              </a>
            </div>

            <p className="mt-8 text-sm text-maggs-mute">
              Powered by {brand.group}
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-maggs-black p-8 text-white sm:p-10">
            <h2 className="font-display text-4xl uppercase">
              Prefer a structured brief?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Use the quote form to send dimensions, service type and notes. If
              you already used the configurator, your estimate carries over.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              <li>Premium gates from £{brand.pricesFrom}</li>
              <li>Custom privacy screens and cladding</li>
              <li>Signage, renovations and general engineering</li>
            </ul>
            <Link href="/quote" className="btn-primary mt-8">
              Open quote form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
