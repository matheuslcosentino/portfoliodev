import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nexo-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "border-b border-border bg-background/90 shadow-card backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" aria-label="Nexo — início" className="shrink-0">
          <img
            src={logo.url}
            alt="Nexo"
            width={1141}
            height={266}
            className={cn("h-7 w-auto transition-all md:h-8", !solid && "logo-white")}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                solid ? "text-foreground hover:text-primary" : "text-night-foreground/90 hover:text-night-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="hero" size="pill">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              Pedir orçamento no WhatsApp
            </a>
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={cn("lg:hidden", solid ? "text-foreground" : "text-night-foreground")}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="hero" size="xl" className="mt-5 w-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Pedir orçamento no WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
