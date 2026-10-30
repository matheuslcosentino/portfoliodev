import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { profile } from "@/data/portfolio";

const cardClass =
  "group relative flex h-full w-full flex-col border-[3px] border-line bg-card p-5 shadow-brutal-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-brutal";

const tileClass =
  "flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-line";

const labelClass = "label-mono mt-6 text-ink-soft";
const valueClass = "mt-2 break-words font-display text-[15px] font-bold leading-snug tracking-[-0.01em]";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(profile.phone);
      setCopied(true);
      toast.success("Número copiado para a área de transferência");
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      toast.error("Não foi possível copiar. O número é " + profile.phone);
    }
  };

  return (
    <section
      id="contato"
      className="relative scroll-mt-28 overflow-hidden bg-background py-20 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-lime/12 blur-[120px]" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1180px] px-6">
        <SectionHeading
          align="center"
          eyebrow="Contato"
          className="mx-auto items-center text-center"
          title={
            <>
              Vamos
              <br />
              <span className="font-accent italic text-violet">conversar.</span>
            </>
          }
          description="Aberto a novos projetos, parcerias e conversas sobre sites — presencial ou remoto."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <a href={`mailto:${profile.email}`} className={cardClass}>
              <div className="flex items-start justify-between">
                <span className={`${tileClass} bg-mail text-ink-foreground`}>
                  <Mail size={19} />
                </span>
                <ArrowUpRight
                  size={17}
                  className="text-ink-soft transition-colors group-hover:text-violet"
                />
              </div>
              <span className={labelClass}>E-mail direto</span>
              <span className={`${valueClass} text-[12.5px] [overflow-wrap:anywhere]`}>
                {profile.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={70}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={cardClass}>
              <div className="flex items-start justify-between">
                <span className={`${tileClass} bg-linkedin text-ink-foreground`}>
                  <Linkedin size={19} />
                </span>
                <ArrowUpRight
                  size={17}
                  className="text-ink-soft transition-colors group-hover:text-violet"
                />
              </div>
              <span className={labelClass}>Rede profissional</span>
              <span className={valueClass}>LinkedIn</span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <a href={profile.github} target="_blank" rel="noreferrer" className={cardClass}>
              <div className="flex items-start justify-between">
                <span className={`${tileClass} bg-line text-ink`}>
                  <Github size={19} />
                </span>
                <ArrowUpRight
                  size={17}
                  className="text-ink-soft transition-colors group-hover:text-violet"
                />
              </div>
              <span className={labelClass}>Código aberto</span>
              <span className={valueClass}>GitHub</span>
            </a>
          </Reveal>

          <Reveal delay={210}>
            <button type="button" onClick={copyPhone} className={`${cardClass} text-left`}>
              <div className="flex items-start justify-between">
                <span className={`${tileClass} bg-whats text-ink-foreground`}>
                  <WhatsAppIcon />
                </span>
                <span className="text-ink-soft transition-colors group-hover:text-violet">
                  {copied ? <Check size={17} className="text-whats" /> : <Copy size={17} />}
                </span>
              </div>
              <span className={labelClass}>WhatsApp · copiar</span>
              <span className={valueClass}>{profile.phone}</span>
            </button>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="label-mono inline-flex items-center gap-1.5 border-2 border-line bg-card px-3 py-2 shadow-brutal-xs transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-lime"
          >
            Chamar no WhatsApp
            <ArrowUpRight size={12} />
          </a>
          <span className="label-mono text-ink-soft">
            {profile.location} · atendimento remoto
          </span>
        </div>
      </div>
    </section>
  );
};

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className="h-[19px] w-[19px]"
  >
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.32 4.94L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.13c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.14 8.14 0 0 1-1.25-4.36c0-4.51 3.67-8.17 8.19-8.17 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.78c0 4.52-3.68 8.18-8.19 8.18Zm4.49-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.13-.56.12-.17.25-.65.8-.8.96-.15.17-.29.19-.54.07-.25-.13-1.04-.39-1.98-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.07-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);
