import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

export function AboutSection() {
  return (
    <section id="about" className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <TiltCard>
        <div className="space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
              About
            </h2>
            <p className="mt-4 text-xl font-medium text-white/90">
              {profile.about.summary}
            </p>
          </div>
          <ul className="grid gap-4 text-sm text-white/70">
            {profile.about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
      <TiltCard>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">
              Process
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Human-centered, systems-driven, and collaborative from discovery to delivery.
            </p>
          </div>
          <ol className="grid gap-4 text-sm text-white/75">
            {profile.about.process.map((item, index) => (
              <li key={item.step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-white/80">
                  {index + 1}
                </span>
                <div>
                  <p className="text-base font-semibold text-white/90">
                    {item.step}
                  </p>
                  <p className="text-sm text-white/60">{item.details}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </TiltCard>
    </section>
  );
}
