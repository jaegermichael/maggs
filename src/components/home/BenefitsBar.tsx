import { EyeOff, PersonStanding, ShieldCheck, Sparkles } from "lucide-react";
import { benefits } from "@/data/site";

const icons = {
  shield: ShieldCheck,
  access: PersonStanding,
  privacy: EyeOff,
  design: Sparkles,
} as const;

export function BenefitsBar() {
  return (
    <section className="px-3 py-4 sm:px-5">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-[1.75rem] bg-maggs-black p-3 text-white sm:grid-cols-2 lg:grid-cols-4 lg:p-4">
        {benefits.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons] ?? ShieldCheck;
          return (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <Icon className="h-6 w-6 text-maggs-orange" />
              <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.16em]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
