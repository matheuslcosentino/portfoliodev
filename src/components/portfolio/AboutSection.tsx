import { Reveal } from "@/components/portfolio/Reveal";
import { aboutParagraphs, profile, stats } from "@/data/portfolio";

const chips = ["Full-Stack", "Navegantes, SC", "Sites sob medida"];

export const AboutSection = () => (
  <section
    id="sobre"
    className="relative scroll-mt-28 overflow-hidden border-b-[3px] border-line bg-ink py-20 text-foreground sm:py-28"
  >
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet/25 blur-[110px]" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lime/10 blur-[100px]" />
    </div>

    <div className="relative mx-auto grid w-full max-w-[1180px] gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-7 bg-lime" />
          <span className="label-mono text-lime">Quem sou eu</span>
        </div>

        <h2 className="mt-4 font-display text-[clamp(2.8rem,6.4vw,4.6rem)] font-black leading-[0.88] tracking-[-0.045em]">
          Matheus
          <br />
          <span className="font-accent italic tracking-[-0.03em] text-lime">
            Lopes.
          </span>
        </h2>

        <div className="mt-7 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="label-mono border-2 border-line/30 px-2.5 py-1.5 text-foreground/85"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 max-w-lg space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-[14.5px] leading-relaxed text-foreground/65 sm:text-[15px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <Reveal className="lg:pt-6">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 border-[3px] border-lime"
          />
          <div className="relative border-[3px] border-line/30 bg-ink-elevated p-5 sm:p-7">
            <div className="flex items-center justify-between gap-2 border-b-2 border-line/15 pb-3">
              <span className="font-mono text-[11px] text-foreground/40">// stats.json</span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-line/25" />
                <span className="h-2 w-2 rounded-full bg-line/25" />
                <span className="h-2 w-2 rounded-full bg-lime" />
              </div>
            </div>

            <dl className="divide-y divide-line/15">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-end justify-between gap-6 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-[2.4rem] font-black leading-none tracking-[-0.04em] text-lime">
                    {stat.value}
                  </dd>
                  <dd className="max-w-[9rem] text-right font-mono text-[11px] uppercase leading-snug tracking-[0.08em] text-foreground/55">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-2 flex flex-wrap items-center gap-2 border-t-2 border-dashed border-line/15 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-foreground/45">
                Disponível para novos projetos · {profile.location}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
