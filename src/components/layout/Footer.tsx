import Image from "@/components/ui/Image";
import { Link } from "@/components/ui/Link";
import { brand, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-3 pb-6 pt-10 sm:px-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-maggs-black text-white">
        <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_1fr_1fr] md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl bg-white/5 p-1"
              />
              <div>
                <p className="font-display text-2xl uppercase tracking-wide">
                  Maggs
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-maggs-orange">
                  Engineering & Consultancy
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Laser CNC structural design and fabrication. Gates, privacy
              screens, wall cladding, signage, renovations and general
              engineering.
            </p>
            <p className="mt-6 text-sm text-white/45">
              Powered by {brand.group}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition hover:text-maggs-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={brand.phoneHref}
                  className="font-semibold text-maggs-orange hover:text-maggs-orange-soft"
                >
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailHref}
                  className="text-white/75 hover:text-white"
                >
                  {brand.email}
                </a>
              </li>
              <li className="text-white/55">
                Premium gates from ${brand.pricesFrom.toLocaleString("en-US")}
              </li>
            </ul>
            <Link href="/quote" className="btn-primary mt-6">
              Request a quote
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-8 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.16em]">
            Stylish. Secure. Built for you.
          </p>
        </div>
      </div>
    </footer>
  );
}
