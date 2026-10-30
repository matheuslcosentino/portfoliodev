import type { ReactNode } from "react";

import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Reveal } from "@/components/portfolio/Reveal";
import { stackGroups, type StackGroup } from "@/data/portfolio";

const accentDot: Record<StackGroup["accent"], string> = {
  lime: "bg-lime",
  violet: "bg-violet",
  sky: "bg-sky",
  orange: "bg-orange",
  rose: "bg-rose",
  ink: "bg-line",
};

const codeLines: { content: ReactNode }[] = [
  {
    content: (
      <>
        <span className="text-foreground/35">{"// full-stack dev · sites que vendem"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-violet-soft">const</span>{" "}
        <span className="text-foreground">matheus</span>{" "}
        <span className="text-foreground/50">=</span>{" "}
        <span className="text-foreground/50">{"{"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}role<span className="text-foreground/50">:</span>{" "}
        <span className="text-lime">'Full-Stack Developer'</span>
        <span className="text-foreground/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}stack<span className="text-foreground/50">:</span>{" "}
        <span className="text-foreground/50">[</span>
        <span className="text-lime">'JavaScript'</span>
        <span className="text-foreground/50">,</span>{" "}
        <span className="text-lime">'React'</span>
        <span className="text-foreground/50">,</span>{" "}
        <span className="text-lime">'Python'</span>
        <span className="text-foreground/50">],</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}city<span className="text-foreground/50">:</span>{" "}
        <span className="text-lime">'Navegantes, SC'</span>
        <span className="text-foreground/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}focus<span className="text-foreground/50">:</span>{" "}
        <span className="text-lime">'sites & landing pages'</span>
        <span className="text-foreground/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}coffee<span className="text-foreground/50">:</span>{" "}
        <span className="text-rose">Infinity</span>
        <span className="text-foreground/50">,</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}ship<span className="text-foreground/50">(</span>project
        <span className="text-foreground/50">)</span>{" "}
        <span className="text-foreground/50">{"{"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"    "}
        <span className="text-violet-soft">return</span> project
        <span className="text-foreground/50">.</span>online
        <span className="text-foreground/50">()</span>
        <span className="text-foreground/50">;</span>
      </>
    ),
  },
  {
    content: (
      <>
        {"  "}
        <span className="text-foreground/50">{"}"}</span>
      </>
    ),
  },
  {
    content: (
      <>
        <span className="text-foreground/50">{"}"}</span>
        <span className="text-foreground/50">;</span>
        <span className="ml-1 inline-block h-3.5 w-2 translate-y-[2px] bg-lime animate-blink" />
      </>
    ),
  },
];

export const StackSection = () => (
  <section
    id="stack"
    className="relative scroll-mt-28 border-b-[3px] border-line bg-background py-20 sm:py-28"
  >
    <div className="mx-auto w-full max-w-[1180px] px-6">
      <SectionHeading
        eyebrow="Toolbelt · 2025"
        title={
          <>
            Stack e ferramentas
            <br className="hidden sm:block" /> que{" "}
            <span className="font-accent italic text-violet">utilizo.</span>
          </>
        }
        description="Tecnologias que uso no dia a dia para tirar um site do briefing e colocar no ar — rápido, responsivo e fácil de manter."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative border-[3px] border-line bg-ink text-foreground shadow-brutal-violet">
            <div className="flex items-center gap-2 border-b-2 border-line/15 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose" />
              <span className="h-2.5 w-2.5 rounded-full bg-orange" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
              <span className="ml-2 font-mono text-[11px] text-foreground/45">
                ~/matheus.ts
              </span>
            </div>

            <pre className="overflow-x-auto p-5 font-mono text-[10.5px] leading-[2] sm:text-[13px] sm:leading-[1.95]">
              <code>
                {codeLines.map((line, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="w-4 shrink-0 select-none text-right text-foreground/20">
                      {index + 1}
                    </span>
                    <span className="whitespace-pre">{line.content}</span>
                  </div>
                ))}
              </code>
            </pre>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-line/15 px-4 py-3">
              <span className="label-mono text-[10px] text-foreground/40">
                html · react · python
              </span>
              <span className="label-mono text-[10px] text-lime">deploy: online</span>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 border-[3px] border-line bg-lime p-4 shadow-brutal-sm">
            <span className="mt-0.5 font-mono text-[11px] font-bold">//</span>
            <p className="font-mono text-[11.5px] leading-relaxed text-ink">
              briefing → layout → código → publicação. Repetir até ficar certo.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {stackGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="h-full border-[3px] border-line bg-card p-5 shadow-brutal-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-brutal">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="label-mono text-ink-soft">{group.title}</h3>
                  <span className={`h-2 w-2 rounded-full ${accentDot[group.accent]}`} />
                </div>
                <div className="my-3 border-t-2 border-dashed border-line/20" />
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-line bg-surface px-2 py-1 font-mono text-[11px] font-medium leading-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
