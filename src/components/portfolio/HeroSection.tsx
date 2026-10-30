import { ArrowRight, Code2, GraduationCap, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tag } from "@/components/portfolio/Tag";
import { profile } from "@/data/portfolio";

const chips = [
  { icon: MapPin, label: "Navegantes, SC" },
  { icon: GraduationCap, label: "Bacharel em Desenvolvimento" },
  { icon: Code2, label: "Full-Stack" },
];

export const HeroSection = () => (
  <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid opacity-80 mask-fade-b" />
      <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-violet/25 blur-[90px]" />
      <div className="absolute -right-10 -top-24 h-[460px] w-[460px] rounded-full bg-lime/15 blur-[130px]" />
    </div>

    <div className="mx-auto grid w-full max-w-[1180px] items-center gap-14 px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
      <div className="reveal" data-visible="true">
        <div className="inline-flex items-center gap-2.5 border-[3px] border-line bg-card px-3 py-2 shadow-brutal-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-lime animate-pulse-ring" />
            <span className="relative h-2.5 w-2.5 rounded-full border border-line bg-lime" />
          </span>
          <span className="label-mono">Disponível para novos projetos</span>
        </div>

        <h1 className="mt-7 font-display text-[clamp(3.5rem,10.5vw,6.4rem)] font-black leading-[0.85] tracking-[-0.05em]">
          <span className="block">Matheus</span>
          <span className="relative mt-2 inline-block sm:mt-3">
            <span
              aria-hidden
              className="absolute inset-0 translate-x-[9px] translate-y-[10px] bg-lime sm:translate-x-[12px] sm:translate-y-[12px]"
            />
            <span className="relative block bg-line px-3 pb-2 pt-1 text-ink sm:px-4">
              Lopes<span className="ml-1 inline-block h-[0.14em] w-[0.14em] translate-y-[-0.06em] bg-lime animate-blink" />
            </span>
          </span>
        </h1>

        <p className="mt-7 max-w-[30rem] text-[15px] leading-relaxed text-ink-soft sm:text-[17px]">
          Desenvolvedor full-stack criando sites que unem{" "}
          <strong className="font-bold text-foreground underline decoration-lime decoration-[3px] underline-offset-[5px]">
            design e resultado
          </strong>
          . Do layout à publicação, cuido de tudo que existe entre o negócio do
          cliente e a primeira visita.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild variant="lime" size="lg">
            <a href="#projetos">
              Ver projetos
              <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contato">Falar comigo</a>
          </Button>
          <Button asChild variant="default" size="lg">
            <a href={`mailto:${profile.email}?subject=Orçamento de site`}>
              Pedir orçamento
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {chips.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="label-mono inline-flex items-center gap-1.5 border-2 border-line bg-card px-2.5 py-1.5"
            >
              <Icon size={12} strokeWidth={2.5} className="text-violet" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[420px] lg:max-w-[460px]">
        <div
          aria-hidden
          className="absolute -right-2.5 -top-2.5 h-full w-full border-[3px] border-line bg-lime sm:-right-3 sm:-top-3"
        />
        <div
          aria-hidden
          className="absolute -bottom-3 -left-2.5 h-full w-full rotate-[2deg] border-[3px] border-line bg-violet sm:-left-3"
        />

        <div className="relative -rotate-[1.6deg] border-[3px] border-line bg-card p-2.5 shadow-brutal-lg transition-transform duration-500 ease-out hover:rotate-0">
          <div className="relative overflow-hidden border-[3px] border-line">
            <img
              src="/matheus-lopes.jpg"
              alt="Retrato de Matheus Lopes Cosentino usando óculos e terno"
              className="aspect-[4/5] w-full object-cover object-[50%_28%]"
              width={1187}
              height={1284}
              fetchPriority="high"
            />
          </div>

          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border-2 border-line bg-card px-3 py-1.5 shadow-brutal-xs">
            <span className="h-2 w-2 rounded-full bg-lime" />
            <span className="font-mono text-[11px] font-medium tracking-tight">
              {profile.handle}
            </span>
          </div>
        </div>

        <Tag tone="dark" className="absolute right-3 top-4 rotate-[8deg] shadow-brutal-xs sm:-right-4 sm:top-6">
          Full-Stack
        </Tag>
      </div>
    </div>
  </section>
);
