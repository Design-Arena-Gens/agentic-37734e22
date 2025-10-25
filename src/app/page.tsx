import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { DesignSystemSection } from "@/components/sections/design-system";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <NavBar />
      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <DesignSystemSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {profile.owner.name}. Crafted in {profile.owner.location}.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href={`mailto:${profile.contact.email}`} className="transition hover:text-white">
              {profile.contact.email}
            </a>
            <a href={profile.owner.linkedin} className="transition hover:text-white">
              LinkedIn
            </a>
            <span className="font-mono text-xs text-white/40">jmuthukumar.design</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
