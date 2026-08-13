"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { brand } from "@/data/site";

const GateScene = dynamic(
  () => import("@/components/three/GateScene").then((m) => m.GateScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[320px] items-center justify-center bg-maggs-black text-sm text-white/50">
        Loading 3D gate…
      </div>
    ),
  }
);

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-3 pb-6 pt-24 sm:px-5 sm:pt-28">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-maggs-black lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative p-6 sm:p-10 md:p-14">
          <div className="absolute inset-0 diagonal-slash opacity-95" />
          <div className="absolute inset-0 noise-overlay" />
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85"
            >
              Maggs Engineering & Consultancy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 max-w-xl font-display text-5xl uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Stylish.
              <span className="block text-maggs-black">Secure.</span>
              <span className="block">Built for you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-white/80 sm:text-base"
            >
              Laser CNC gates, privacy screens, wall cladding, signage,
              renovations and general engineering. Modern metalwork designed
              around your property.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 space-y-2 text-sm font-medium text-white"
            >
              {["Durable materials", "Expert craftsmanship", "Custom designs"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    {item}
                  </li>
                )
              )}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link href="/configurator" className="btn-dark">
                Design your gate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={brand.phoneHref} className="btn-ghost border-white/20 bg-white/10 text-white hover:text-white">
                <Phone className="h-4 w-4" />
                {brand.phone}
              </a>
            </motion.div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-maggs-orange px-4 py-3 text-white shadow-glow">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                  Prices from as low as
                </p>
                <p className="font-display text-4xl leading-none">
                  £{brand.pricesFrom}
                </p>
              </div>
              <div className="rounded-xl bg-black px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                Premium
                <br />
                gates
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[420px] border-t border-white/10 lg:border-l lg:border-t-0">
          <GateScene pattern="geo-slash" color="#2F2F2F" accent="#171717" />
          <div className="absolute left-4 top-4 z-10 overflow-hidden rounded-2xl border border-white/10 shadow-panel">
            <Image
              src="/images/gate-hero.jpg"
              alt="Installed Maggs driveway gate"
              width={180}
              height={120}
              className="h-24 w-36 object-cover"
            />
          </div>
          <p className="absolute bottom-4 left-4 z-10 rounded-full bg-black/55 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur">
            Drag to orbit · live CNC preview
          </p>
        </div>
      </div>
    </section>
  );
}
