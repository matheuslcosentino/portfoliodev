import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Reveal } from "@/components/portfolio/Reveal";
import { Tag } from "@/components/portfolio/Tag";
import { experiences } from "@/data/portfolio";

export const ExperienceSection = () => (
  <section
    id="carreira"
    className="relative scroll-mt-28 overflow-hidden border-b-[3px] border-line bg-surface py-20 sm:py-28"
  >
    <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dense opacity-40" />

    <div className="relative mx-auto w-full max-w-[1180px] px-6">
      <SectionHeading
        eyebrow="Trajetória · 2022 — presente"
        title={
          <>
            Minha{" "}
            <span className="font-accent italic text-violet">experiência.</span>
          </>
        }
        description="Do primeiro site entregue à liderança técnica de uma plataforma web — uma trajetória construída resolvendo problemas reais e colocando produto no ar."
      />

      <ol className="relative mt-12 space-y-5 sm:ml-2 sm:border-l-[3px] sm:border-line/20 sm:pl-9">
        {experiences.map((item, index) => (
          <Reveal as="li" key={`${item.role}-${item.period}`} delay={index * 70}>
            <div className="relative">
              <span
                aria-hidden
                className={`absolute -left-[47px] top-7 hidden h-4 w-4 rounded-full border-[3px] border-line sm:block ${
                  item.current ? "bg-lime" : "bg-card"
                }`}
              />

              <div className="border-[3px] border-line bg-card p-5 shadow-brutal-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-brutal sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-black leading-tight tracking-[-0.03em] sm:text-[1.4rem]">
                      {item.role}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] font-semibold text-foreground">
                      {item.company}{" "}
                      <span className="font-normal text-ink-soft">· {item.location}</span>
                    </p>
                  </div>
                  <Tag tone={item.current ? "lime" : "default"} className="self-start whitespace-nowrap">
                    {item.period}
                  </Tag>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-ink-soft sm:text-[14.5px]"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-violet" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t-2 border-dashed border-line/20 pt-4">
                  {item.tags.map((tag) => (
                    <Tag key={tag} tone="muted">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
