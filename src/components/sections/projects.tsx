import Link from "next/link";
import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Selected Work
          </h2>
          <p className="mt-3 text-3xl font-semibold text-white">
            Case studies with measurable impact.
          </p>
        </div>
        <Link
          href="mailto:jmuthukumar@example.com"
          className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:bg-white/10"
        >
          Request a project walkthrough
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {profile.projects.map((project) => (
          <TiltCard key={project.id} className="h-full">
            <article className="flex h-full flex-col gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>{project.role}</span>
                  <span>{project.year}</span>
                </div>
                <div className="mt-4 h-36 rounded-xl bg-black/40 p-4">
                  <div className="h-full rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(14,165,161,0.35),_transparent_55%)]" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/65">{project.summary}</p>
              </div>
              <ul className="space-y-2 text-sm text-white/70">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-white"
                >
                  View prototype ↗
                </Link>
              </div>
            </article>
          </TiltCard>
        ))}
      </div>
      <TiltCard>
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">Case study kit</h3>
            <p className="text-sm text-white/70">
              Fully documented case studies with the narrative, artefacts, and metrics teams need to align quickly.
            </p>
            <ul className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
              {profile.caseStudy.sections.map((section) => (
                <li key={section} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{section}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Assets Provided
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {profile.caseStudy.assetsRequired.map((asset) => (
                <li key={asset} className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-primary to-accent" />
                  <span>{asset}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
