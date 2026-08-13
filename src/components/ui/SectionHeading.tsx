import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  body,
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "chip mb-4",
            invert && "border-white/15 bg-white/5 text-white/70"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "section-title",
          invert ? "text-white" : "text-maggs-black"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed",
            invert ? "text-white/70" : "text-maggs-mute"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
