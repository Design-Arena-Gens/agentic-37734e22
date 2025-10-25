import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

export function DesignSystemSection() {
  const { designSystem } = profile;

  return (
    <section id="design-system" className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Design System
          </h2>
          <p className="mt-3 text-2xl font-semibold text-white">
            {designSystem.description}
          </p>
        </div>
        <p className="text-sm text-white/60">
          Delivery: {designSystem.deliveryFormat.join(" • ")}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <TiltCard>
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">
              Core components
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {designSystem.components.map((component) => (
                <div
                  key={component}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/80"
                >
                  <span>{component}</span>
                  <span className="text-white/30">↗</span>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">
              Tokens
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white/80">Spacing:</span> {designSystem.tokens.spacing}
              </p>
              <p>
                <span className="font-semibold text-white/80">Type scale:</span> {designSystem.tokens.typographyScale}
              </p>
              <p>
                <span className="font-semibold text-white/80">Elevation:</span> {designSystem.tokens.elevation}
              </p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
