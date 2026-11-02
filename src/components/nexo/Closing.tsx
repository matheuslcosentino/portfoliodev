import logo from "@/assets/nexo-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS_HOURS, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Quem faz</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-foreground md:text-5xl">
            Uma empresa nova, com um compromisso simples.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A Nexo nasceu de uma convicção: toda empresa merece uma presença digital profissional,
            moderna e à altura daquilo que oferece. Vimos muitos negócios excelentes com sites
            desatualizados ou que não representavam sua qualidade.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Por isso trabalhamos com escopo por escrito, você aprova cada etapa e nunca abrimos mão da
            qualidade técnica nem da ética profissional.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Converse com a gente
            </a>
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative flex aspect-square items-center justify-center rounded-[2rem] border border-border bg-card p-12 shadow-elegant">
            <img src={logo.url} alt="Logo Nexo" width={1141} height={266} className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Quanto custa criar um site?", a: "Depende do tipo de site, número de páginas e funcionalidades. Depois de uma conversa rápida no WhatsApp, enviamos uma proposta por escrito com escopo, prazo e valor — sem compromisso." },
  { q: "Quanto tempo leva para o site ficar pronto?", a: "A primeira versão do site fica pronta entre 24 e 48 horas. Depois, fazemos os ajustes necessários e, com a sua aprovação, publicamos." },
  { q: "Preciso ter os textos e as imagens prontos?", a: "Não. Ajudamos a organizar o conteúdo e indicamos o que é necessário para apresentar bem a sua empresa." },
  { q: "O site vai funcionar no celular?", a: "Sim. Todos os sites são responsivos e testados em celular, tablet e computador." },
  { q: "O site fica no meu nome?", a: "Sim. Código, domínio e acessos ficam em seu nome. Você não depende da Nexo para nada." },
  { q: "Vocês fazem manutenção depois?", a: "Oferecemos 30 dias de suporte após a entrega e, se quiser, um plano de manutenção contínua." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Perguntas frequentes" title="Dúvidas antes de falar com a gente" />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-card"
            >
              <AccordionTrigger className="py-5 text-left text-base font-bold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-night py-24 md:py-28">
      <div className="absolute inset-0 grid-glow" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="text-4xl font-extrabold leading-[1.05] text-night-foreground md:text-6xl">
          Vamos tirar o seu site <span className="text-gradient">do papel</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-night-muted">
          Conte sua ideia em uma mensagem. Respondemos com os próximos passos e uma proposta por escrito.
        </p>
        <Button asChild variant="hero" size="xl" className="mt-10">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Pedir orçamento no WhatsApp
          </a>
        </Button>
        <p className="mt-4 text-sm text-night-muted">Sem compromisso. {BUSINESS_HOURS}</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-night-border bg-night py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <img src={logo.url} alt="Nexo" width={1141} height={266} className="logo-white h-7 w-auto" />
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-night-muted transition-colors hover:text-night-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-night-muted">© {new Date().getFullYear()} Nexo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
