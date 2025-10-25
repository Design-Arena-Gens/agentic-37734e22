import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

const skillGroups: Array<{ title: string; items: string[] }> = [
  { title: "UX", items: profile.skills.ux },
  { title: "UI", items: profile.skills.ui },
  { title: "Prototyping", items: profile.skills.prototyping },
  { title: "Research", items: profile.skills.research },
  { title: "Soft Skills", items: profile.skills.softSkills },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Capabilities
          </h2>
          <p className="mt-3 text-lg font-medium text-white/90">
            A hybrid designer bridging research, interaction, and design systems.
          </p>
        </div>
        <span className="text-sm text-white/50">
          Tools: {profile.tools.join(", ")}
        </span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <TiltCard key={group.title} className="h-full">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                {group.title}
              </h3>
              <ul className="grid gap-3 text-sm text-white/70">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-accent" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
