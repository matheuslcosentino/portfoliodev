import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { StackSection } from "@/components/portfolio/StackSection";
import { TechMarquee } from "@/components/portfolio/TechMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <HeroSection />
        <TechMarquee />
        <ProjectsSection />
        <StackSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
