import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import arquitetura from "@/assets/work-arquitetura.jpg";
import fintech from "@/assets/work-fintech.jpg";
import restaurante from "@/assets/work-restaurante.jpg";
import saas from "@/assets/work-saas.jpg";
import clinica from "@/assets/work-clinica.jpg";
import { cn } from "@/lib/utils";
import { SectionHeading, WhatsAppCta } from "./SectionHeading";

const categories = ["Todos", "Institucionais", "Landing pages", "Tecnológicos"] as const;
type Category = (typeof categories)[number];

const projects: {
  name: string;
  type: string;
  category: Exclude<Category, "Todos">;
  image: string;
  text: string;
  tags: string[];
}[] = [
  {
    name: "Andersson Arquitetura",
    type: "Site institucional",
    category: "Institucionais",
    image: arquitetura,
    text: "Site sóbrio e editorial para um escritório de arquitetura, com projetos em destaque e fotografia em tela cheia.",
    tags: ["Portfólio de projetos", "Blog", "SEO"],
  },
  {
    name: "Finora",
    type: "Landing page",
    category: "Landing pages",
    image: fintech,
    text: "Landing page de lançamento para fintech, com foco em conversão e apresentação clara do produto.",
    tags: ["Captação de leads", "Animações", "Integração CRM"],
  },
  {
    name: "La Bella Tavola",
    type: "Site de restaurante",
    category: "Institucionais",
    image: restaurante,
    text: "Site para restaurante italiano com cardápio, reservas e atmosfera que dá fome só de olhar.",
    tags: ["Cardápio digital", "Reservas", "Google Maps"],
  },
  {
    name: "NovaMind",
    type: "Plataforma SaaS",
    category: "Tecnológicos",
    image: saas,
    text: "Site e painel de uma plataforma de IA, com visual futurista e área do cliente.",
    tags: ["Área logada", "Assinaturas", "IA"],
  },
  {
    name: "BrightSmile",
    type: "Clínica odontológica",
    category: "Landing pages",
    image: clinica,
    text: "Página leve e acolhedora para clínica, com agendamento direto pelo WhatsApp.",
    tags: ["Agendamento", "Depoimentos", "Responsivo"],
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Category>("Todos");
  const visible = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Portfólio"
          title={<>Projetos que colocam marcas no ar.</>}
          description="Cada site é desenhado do zero para o negócio do cliente. Explore por tipo de projeto."
        />

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-2 shadow-card">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                active === c
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
                <span className="size-2.5 rounded-full bg-primary/30" />
                <span className="size-2.5 rounded-full bg-primary/50" />
                <span className="size-2.5 rounded-full bg-primary/80" />
              </div>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`Site ${p.name}`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{p.type}</p>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{p.name}</h3>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all group-hover:border-transparent group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-accent-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <WhatsAppCta note="Gostou de algum estilo? Mande o nome dele na mensagem." />
      </div>
    </section>
  );
}
