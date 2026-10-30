import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className,
    )}
  >
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "h-[2px] w-7",
          tone === "dark" ? "bg-lime" : "bg-line",
        )}
      />
      <span
        className={cn(
          "label-mono",
          tone === "dark" ? "text-lime" : "text-ink-soft",
        )}
      >
        {eyebrow}
      </span>
    </div>

    <h2
      className={cn(
        "mt-4 font-display text-[clamp(2.35rem,5.2vw,4.1rem)] font-black leading-[0.94] tracking-[-0.04em] text-balance",
        "text-foreground",
      )}
    >
      {title}
    </h2>

    {description ? (
      <p
        className={cn(
          "mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base",
          "text-ink-soft",
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
);
