import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Tag } from "@/components/portfolio/Tag";
import { Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export const ProjectsSection = () => (
  <section
    id="projetos"
    className="relative scroll-mt-28 overflow-hidden border-b-[3px] border-line bg-surface py-20 sm:py-28"
  >
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dense opacity-40" />

    <div className="relative mx-auto w-full max-w-[1180px] px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected work · 2025"
          title={
            <>
              O que tenho{" "}
              <span className="font-accent italic text-violet">construído.</span>
            </>
          }
          description="Sites e produtos digitais entregues para clientes reais — do design à publicação."
        />
        <span className="label-mono hidden shrink-0 border-2 border-line bg-card px-3 py-1.5 text-ink-soft sm:inline-flex">
          {projects.length} projeto publicado
        </span>
      </div>

      <div className="mt-12 space-y-5">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80} as="article">
            <div className="group grid overflow-hidden border-[3px] border-line bg-card shadow-brutal transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-brutal-lg lg:grid-cols-[1.06fr_0.94fr]">
              <div className="relative border-b-[3px] border-line bg-ink p-4 sm:p-6 lg:border-b-0 lg:border-r-[3px]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose" />
                    <span className="h-2.5 w-2.5 rounded-full bg-orange" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                  </div>
                  <span className="truncate font-mono text-[10px] tracking-tight text-foreground/40">
                    sitedralineestetica.vercel.app
                  </span>
                </div>

                <div className="overflow-hidden border-[3px] border-line bg-surface">
                  <img
                    src={project.image}
                    alt={`Prévia do site ${project.name}`}
                    width={1400}
                    height={875}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                  />
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-ink-soft">/ {project.id}</span>
                  <Tag tone="lime">{project.category}</Tag>
                </div>

                <h3 className="mt-5 font-display text-[1.75rem] font-black leading-none tracking-[-0.04em] sm:text-[2.15rem]">
                  {project.name}
                </h3>
                <p className="mt-2.5 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.1em] text-ink-soft">
                  {project.subtitle}
                </p>

                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                  <Button asChild variant="default">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visitar site
                      <ArrowUpRight />
                    </a>
                  </Button>
                  <span className="label-mono hidden text-ink-soft sm:block">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={120}>
          <div className="flex flex-col items-start justify-between gap-4 border-[3px] border-dashed border-line/30 bg-card/60 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl font-black text-line/25">02</span>
              <div>
                <p className="font-display text-[15px] font-bold tracking-tight">
                  Próximo projeto em construção
                </p>
                <p className="mt-0.5 text-[13px] text-ink-soft">
                  Novos trabalhos entram aqui conforme ficam prontos.
                </p>
              </div>
            </div>
            <span className="label-mono text-ink-soft">Em breve</span>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
