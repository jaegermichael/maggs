"use client";

import dynamic from "next/dynamic";

const LaserField = dynamic(
  () => import("@/components/three/LaserField").then((m) => m.LaserField),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full min-h-[280px] place-items-center bg-maggs-black text-sm text-white/50">
        Loading laser field…
      </div>
    ),
  }
);

export function LaserFieldLazy({ className = "" }: { className?: string }) {
  return <LaserField className={className} />;
}
