import { ArrowUp } from "lucide-react";

import { profile } from "@/data/portfolio";

export const SiteFooter = () => (
  <footer className="border-t-[3px] border-line bg-surface">
    <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center justify-between gap-4 px-6 py-7 sm:flex-row">
      <p className="font-mono text-[11px] tracking-tight text-ink-soft">
        © {new Date().getFullYear()} {profile.fullName} · Todos os direitos reservados
      </p>

      <div className="flex items-center gap-4">
        <span className="label-mono hidden text-ink-soft sm:inline">
          {profile.location} · UTC-3
        </span>
        <a
          href="#top"
          className="label-mono inline-flex items-center gap-1.5 border-2 border-line bg-card px-2.5 py-1.5 shadow-brutal-xs transition-transform duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-lime"
        >
          Topo
          <ArrowUp size={12} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  </footer>
);
