import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "lime" | "violet" | "dark" | "muted";
  dot?: "lime" | "violet" | "sky" | "orange" | "rose" | "ink";
};

const tones: Record<NonNullable<TagProps["tone"]>, string> = {
  default: "border-line bg-card text-foreground",
  lime: "border-line bg-lime text-lime-foreground",
  violet: "border-line bg-violet text-violet-foreground",
  dark: "border-line bg-line text-ink",
  muted: "border-line/25 bg-transparent text-ink-soft",
};

const dots: Record<NonNullable<TagProps["dot"]>, string> = {
  lime: "bg-lime",
  violet: "bg-violet",
  sky: "bg-sky",
  orange: "bg-orange",
  rose: "bg-rose",
  ink: "bg-line",
};

export const Tag = ({ children, className, tone = "default", dot }: TagProps) => (
  <span
    className={cn(
      "label-mono inline-flex items-center gap-1.5 border-2 px-2.5 py-1 leading-none",
      tones[tone],
      className,
    )}
  >
    {dot ? <span className={cn("h-1.5 w-1.5 rounded-full", dots[dot])} /> : null}
    {children}
  </span>
);
