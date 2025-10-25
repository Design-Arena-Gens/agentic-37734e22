"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(profile.contact.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="space-y-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-primary/80">
            Contact
          </h2>
          <p className="mt-3 text-3xl font-semibold text-white">
            Let’s build interfaces that perform for users and business.
          </p>
        </div>
        <div className="text-sm text-white/60">
          <p>{profile.owner.location}</p>
          <p>Time zone · {profile.contact.timezone}</p>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/60">
              Your name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/60">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/60">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-primary/60 bg-primary/80 px-6 py-3 text-sm font-semibold text-black transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-primary/80">Thanks! I’ll get back within 24 hours.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Try emailing jmuthukumar@example.com.</p>
          )}
        </motion.form>
        <div className="space-y-6 rounded-[28px] border border-white/10 bg-black/40 p-8">
          <p className="text-sm text-white/70">
            Available for {profile.contact.availableFor.join(", ")} engagements.
          </p>
          <div className="space-y-3 text-sm text-white/70">
            <p>
              <span className="font-medium text-white/80">Email:</span> {profile.contact.email}
            </p>
            <p>
              <span className="font-medium text-white/80">Phone:</span> {profile.owner.phone}
            </p>
            <p>
              <span className="font-medium text-white/80">LinkedIn:</span> {profile.owner.linkedin}
            </p>
            <p>
              <span className="font-medium text-white/80">Portfolio:</span> {profile.owner.portfolioDomain}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
