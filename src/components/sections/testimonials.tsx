import { profile } from "@/data/profile";
import { TiltCard } from "@/components/tilt-card";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Testimonials
          </h2>
          <p className="mt-3 text-2xl font-semibold text-white">
            Trusted partners on shipping design outcomes.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {profile.testimonials.map((testimonial) => (
          <TiltCard key={testimonial.name}>
            <figure className="space-y-5">
              <blockquote className="text-lg text-white/80">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="text-sm text-white/60">
                <span className="font-medium text-white/80">{testimonial.name}</span> · {testimonial.role}
              </figcaption>
            </figure>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
