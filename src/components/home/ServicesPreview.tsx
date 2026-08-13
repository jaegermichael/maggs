"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatCurrency } from "@/lib/utils";

export function ServicesPreview() {
  return (
    <section className="container-maggs py-16 sm:py-24">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="What we make"
          title="Laser CNC. Structural. Custom."
          body="From entrance gates to full facade cladding, every piece is designed, cut and finished for the site it belongs to."
        />
        <Link href="/services" className="btn-ghost self-start md:self-auto">
          All services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-12">
        {services.map((service, i) => {
          const wide = i % 3 === 0;
          return (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-maggs-black text-white ${
                wide ? "md:col-span-7 min-h-[320px]" : "md:col-span-5 min-h-[320px]"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-maggs-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    From {formatCurrency(service.from)}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur transition group-hover:bg-maggs-orange">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
                    {service.summary}
                  </p>
                  <Link
                    href={`/services#${service.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-maggs-orange hover:text-maggs-orange-soft"
                  >
                    Explore {service.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
