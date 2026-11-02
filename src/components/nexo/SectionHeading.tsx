import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { BUSINESS_HOURS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={cn("eyebrow", dark && "text-primary-glow")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-balance text-4xl font-extrabold leading-[1.05] md:text-5xl",
          dark ? "text-night-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-night-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function WhatsAppCta({
  dark = false,
  note = `Sem compromisso. ${BUSINESS_HOURS}`,
  lead,
}: {
  dark?: boolean;
  note?: string;
  lead?: string;
}) {
  return (
    <div className="mt-14 flex flex-col items-center text-center">
      {lead && (
        <p className={cn("mb-5 text-lg font-semibold", dark ? "text-night-foreground" : "text-foreground")}>
          {lead}
        </p>
      )}
      <Button asChild variant="hero" size="xl">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Pedir orçamento no WhatsApp
        </a>
      </Button>
      <p className={cn("mt-4 text-sm", dark ? "text-night-muted" : "text-muted-foreground")}>{note}</p>
    </div>
  );
}
