const items = [
  "Sites institucionais",
  "Landing pages",
  "Full-Stack",
  "Design responsivo",
  "Performance",
  "SEO local",
  "Publicação rápida",
];

const MarqueeRow = () => (
  <div className="flex shrink-0 items-center">
    {items.map((item) => (
      <span key={item} className="flex items-center gap-7 px-7">
        <span className="label-mono whitespace-nowrap text-[12px] text-ink">{item}</span>
        <span className="h-1.5 w-1.5 shrink-0 bg-ink" />
      </span>
    ))}
  </div>
);

export const TechMarquee = () => (
  <div className="relative overflow-hidden border-y-[3px] border-line bg-lime py-3">
    <div className="flex w-max animate-marquee">
      <MarqueeRow />
      <MarqueeRow />
    </div>
  </div>
);
