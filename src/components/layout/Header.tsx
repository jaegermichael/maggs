"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { brand, nav } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full bg-white/85 px-3 py-2 shadow-panel ring-1 ring-black/5 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-mark.png"
            alt="Maggs Engineering logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="pr-1 leading-none">
            <span className="block font-display text-lg uppercase tracking-wide text-maggs-black">
              Maggs
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-maggs-orange">
              Engineering
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-white/85 p-1.5 shadow-panel ring-1 ring-black/5 backdrop-blur-xl lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition",
                  active
                    ? "bg-maggs-black text-white"
                    : "text-maggs-steel hover:bg-black/5 hover:text-maggs-black"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-maggs-orange px-4 py-2.5 text-sm font-semibold text-white shadow-glow sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {brand.phone}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/5 backdrop-blur lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.5rem] bg-white/95 shadow-panel ring-1 ring-black/5 backdrop-blur lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col p-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-maggs-ink hover:bg-maggs-mist"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={brand.phoneHref}
            className="m-2 rounded-full bg-maggs-orange px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Call {brand.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
