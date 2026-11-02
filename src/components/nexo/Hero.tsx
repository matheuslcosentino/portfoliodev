import { Check, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-studio.jpg";
import { Button } from "@/components/ui/button";
import { BUSINESS_HOURS, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const promises = [
  "Proposta por escrito, sem compromisso",
  "Você aprova o layout antes da programação",
  "30 dias de suporte após a entrega",
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden bg-night">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover blur-[2px]"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 grid-glow" />

      <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-32 text-center md:px-8">
        <p className="eyebrow animate-fade-up text-primary-glow">Estúdio digital · Portfólio</p>
        <h1 className="mt-6 animate-fade-up text-5xl font-extrabold leading-[1.02] text-night-foreground [animation-delay:100ms] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Sites que conectam,
          <br />
          <span className="text-gradient">à altura da sua marca</span>.
        </h1>
        <p className="mx-auto mt-8 max-w-3xl animate-fade-up text-lg leading-relaxed text-night-muted [animation-delay:200ms] md:text-xl">
          A Nexo é um estúdio de criação de sites. Desenvolvemos sites institucionais e landing pages
          rápidos, responsivos e sob medida. Você conta sua ideia; nós cuidamos do design, da
          programação e da publicação.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:300ms] sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Pedir orçamento no WhatsApp
            </a>
          </Button>
          <Button asChild variant="glass" size="xl">
            <a href="#portfolio">Ver portfólio</a>
          </Button>
        </div>
        <p className="mt-4 animate-fade-up text-sm text-night-muted [animation-delay:350ms]">
          Sem compromisso. {BUSINESS_HOURS}
        </p>

        <ul className="mx-auto mt-10 flex max-w-3xl animate-fade-up flex-wrap justify-center gap-x-7 gap-y-3 [animation-delay:450ms]">
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-night-muted">
              <Check className="size-4 text-primary-glow" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#recebe"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-night-muted"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
}
