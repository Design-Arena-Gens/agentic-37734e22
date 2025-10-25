import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

export function ServicesSection() {
  return (
    <section id="services" className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Services
          </h2>
          <p className="mt-3 text-2xl font-semibold text-white">
            Flexible collaboration for product teams and founders.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
        <TiltCard>
          <ul className="grid gap-4 text-sm text-white/80 sm:grid-cols-2">
            {profile.services.map((service) => (
              <li key={service} className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4">
                <span className="text-white/90">{service}</span>
              </li>
            ))}
          </ul>
        </TiltCard>
        <TiltCard>
          <div className="space-y-4 text-sm text-white/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Engagement models
            </h3>
            <p>
              <span className="font-semibold text-white/80">Freelance:</span> {profile.pricingHint.freelanceRates}
            </p>
            <p>
              <span className="font-semibold text-white/80">Enterprise:</span> {profile.pricingHint.enterprise}
            </p>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
