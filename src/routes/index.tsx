import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/nexo/SiteHeader";
import { Hero } from "@/components/nexo/Hero";
import { Included, Services, HowItWorks, Commitments } from "@/components/nexo/Sections";
import { Portfolio } from "@/components/nexo/Portfolio";
import { About, Faq, FinalCta, SiteFooter, FloatingWhatsApp } from "@/components/nexo/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexo — Criação de sites profissionais e portfólio" },
      {
        name: "description",
        content:
          "A Nexo cria sites institucionais e landing pages sob medida. Veja nosso portfólio e peça um orçamento no WhatsApp.",
      },
      { property: "og:title", content: "Nexo — Criação de sites profissionais" },
      {
        property: "og:description",
        content: "Sites rápidos, responsivos e à altura da sua marca. Conheça o portfólio da Nexo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Included />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Commitments />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
