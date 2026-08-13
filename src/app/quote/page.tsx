import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a quote",
};

export default function QuotePage() {
  return (
    <div className="pt-28">
      <section className="container-maggs grid gap-10 pb-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Quote"
            title="Tell us what to build"
            body="Share the service, sizes and site notes. We will follow up with options and a clear next step."
          />
          <div className="mt-8 rounded-[1.5rem] bg-maggs-orange p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
              Need it faster?
            </p>
            <a
              href={brand.phoneHref}
              className="mt-2 block font-display text-4xl hover:opacity-90"
            >
              {brand.phone}
            </a>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="card-surface grid min-h-[420px] place-items-center text-sm text-maggs-mute">
              Loading form…
            </div>
          }
        >
          <QuoteForm />
        </Suspense>
      </section>
    </div>
  );
}
