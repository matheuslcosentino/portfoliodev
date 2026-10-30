import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex h-[62px] items-center justify-between gap-3 border-[3px] border-line bg-card px-3.5 shadow-brutal sm:h-[72px] sm:px-5">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${profile.fullName} — início`}
            onClick={() => setOpen(false)}
          >
            <span className="h-3.5 w-3.5 rounded-full border-[3px] border-line bg-lime" />
            <span className="font-display text-[17px] font-extrabold tracking-[-0.035em] sm:text-[19px]">
              matheus<span className="text-violet">lopes</span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-mono px-3.5 py-2 text-ink-soft transition-colors hover:bg-lime hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hidden h-10 w-10 shadow-none hover:bg-lime sm:inline-flex"
            >
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>

            <Button asChild variant="lime" size="sm" className="hidden h-10 md:inline-flex">
              <a href="#contato">
                Falar comigo
                <ArrowUpRight />
              </a>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 items-center justify-center border-[3px] border-line bg-card text-foreground lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav
            className="mt-2 flex flex-col border-[3px] border-line bg-card p-2 shadow-brutal-sm"
            aria-label="Navegação mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-3 font-display text-base font-bold tracking-tight transition-colors hover:bg-lime"
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
