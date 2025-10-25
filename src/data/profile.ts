export const profile = {
  owner: {
    name: "J.Muthukumar",
    role: "Senior UI/UX Designer",
    location: "Chennai, India",
    email: "jmuthukumar@example.com",
    phone: "+91-XXXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/jmuthukumar",
    portfolioDomain: "jmuthukumar.design",
  },
  hero: {
    title: "Designing intuitive, beautiful interfaces for modern products",
    subtitle:
      "UI/UX Designer focused on product clarity, motion-driven interactions, and accessibility.",
    primaryCta: {
      label: "View Work",
      anchor: "#projects",
    },
    secondaryCta: {
      label: "Download Resume",
      href: "/files/JMuthukumar_Resume.pdf",
    },
    localizedIntro:
      "Vanakkam — naan J.Muthukumar. UI/UX design la neat, high-tech interfaces pannuven.",
    visualSlides: [
      {
        id: "nova",
        title: "Nova Analytics",
        description: "Enterprise dashboard evolution",
        tags: ["Data Viz", "Design System"],
      },
      {
        id: "flux",
        title: "Flux Wallet",
        description: "Secure mobile finance experience",
        tags: ["Fintech", "Motion"],
      },
      {
        id: "pulse",
        title: "Pulse Commerce",
        description: "High-converting e-commerce journey",
        tags: ["E-commerce", "Growth"],
      },
    ],
  },
  about: {
    summary:
      "7+ years designing consumer & enterprise products. I combine user research, interaction design, and pixel-perfect UI to build experiences that scale.",
    highlights: [
      "Led end-to-end redesign for an analytics dashboard used by 50k+ users.",
      "Worked closely with engineers to ship accessible components (WCAG AA).",
      "Prototyped micro-interactions with Lottie and Framer.",
    ],
    process: [
      { step: "Discover", details: "user interviews & data analysis" },
      { step: "Define", details: "user journeys & information architecture" },
      { step: "Design", details: "wireframes, high-fidelity UI, prototyping" },
      { step: "Deliver", details: "design system, developer handoff, QA" },
    ],
  },
  skills: {
    ux: [
      "User research",
      "Wireframing",
      "Information architecture",
      "Usability testing",
      "Personas",
      "Accessibility (WCAG)",
    ],
    ui: [
      "High-fidelity mockups",
      "Design systems",
      "Micro-interactions",
      "Responsive layout",
      "Motion design",
    ],
    prototyping: [
      "Figma (variants, auto-layout)",
      "Framer",
      "ProtoPie",
      "Principle",
    ],
    research: ["User interviews", "Surveys", "Analytics-driven insights"],
    softSkills: [
      "Collaboration",
      "Design thinking workshops",
      "Stakeholder communication",
    ],
  },
  tools: [
    "Figma",
    "Framer",
    "FigJam",
    "Adobe Illustrator",
    "Lottie",
    "HTML/CSS (for prototyping)",
    "React (for component previews)",
  ],
  projects: [
    {
      id: "p-analyticsdash",
      title: "Nova Analytics — Enterprise Dashboard",
      role: "Lead Product Designer",
      year: 2024,
      tags: ["Dashboard", "Data Viz", "Design System"],
      summary:
        "Reimagined complex analytics into modular, glanceable cards with custom charts and guided insights.",
      highlights: [
        "Reduced onboarding time by 30% via contextual walkthroughs",
        "Built a component library (Figma + Storybook) used by 10+ teams",
        "Implemented accessible color palettes and keyboard nav",
      ],
      demoUrl: "https://prototype.jmuthukumar.design/nova-analytics",
      thumbnail: "/images/projects/nova-analytics-thumb.png",
    },
    {
      id: "p-mobilewallet",
      title: "Flux Wallet — Mobile Finance App",
      role: "Senior UI/UX Designer",
      year: 2023,
      tags: ["Mobile", "Fintech", "Motion Design"],
      summary:
        "Designed a secure, delightful mobile wallet with emphasis on microcopy and motion to build trust.",
      highlights: [
        "Micro-animations to confirm transactions (Lottie)",
        "A/B tested onboarding flows; improved activation by 18%",
        "High contrast mode and large-type support",
      ],
      demoUrl: "https://prototype.jmuthukumar.design/flux-wallet",
      thumbnail: "/images/projects/flux-wallet-thumb.png",
    },
    {
      id: "p-ecom",
      title: "Pulse Commerce — E-commerce Experience",
      role: "Product Designer",
      year: 2022,
      tags: ["E-commerce", "Checkout", "Conversion"],
      summary:
        "Optimized checkout UX and product discovery to increase conversion and average order value.",
      highlights: [
        "Streamlined checkout to 3 steps; reduced cart abandonment by 22%",
        "Personalized product recommendations via progressive disclosure",
        "Design tokens created for fast theming across brands",
      ],
      demoUrl: "https://prototype.jmuthukumar.design/pulse-commerce",
      thumbnail: "/images/projects/pulse-commerce-thumb.png",
    },
  ],
  caseStudy: {
    sections: [
      "Problem",
      "Research",
      "Design Process",
      "Solution",
      "Impact & Metrics",
      "Handover",
    ],
    assetsRequired: [
      "Screenshots",
      "Prototype link",
      "User quotes",
      "Before/after metrics",
    ],
  },
  designSystem: {
    description:
      "Scalable tokens, components, and documentation for consistent UI across products.",
    components: [
      "Button",
      "Input",
      "Card",
      "Modal",
      "Tab",
      "Toast",
      "DataTable",
      "ChartCard",
    ],
    tokens: {
      spacing: "4,8,12,16,24,32",
      typographyScale: "12,14,16,20,24,32,40",
      elevation: "none, small, medium, large",
    },
    deliveryFormat: ["Figma library", "Storybook (React)", "Tokens JSON"],
  },
  testimonials: [
    {
      name: "A. Rao",
      role: "PM, Nova Analytics",
      quote:
        "Muthu transformed our dashboard into a product our clients finally love. Clear thinker and great collaborator.",
    },
    {
      name: "S. Priya",
      role: "CTO, Flux Wallet",
      quote:
        "Delivered production-ready designs with excellent developer handoff and attention to accessibility.",
    },
  ],
  services: [
    "Product UX Audit",
    "End-to-end Product Design",
    "Design System Creation",
    "Prototyping & Motion Design",
    "UX Research & Testing",
  ],
  pricingHint: {
    freelanceRates:
      "Contact for project-based or retainer pricing. Example: UX audit starting ₹25,000.",
    enterprise:
      "Negotiate per-scope; includes research, 3 high-fidelity flows, and design system starter kit.",
  },
  contact: {
    email: "jmuthukumar@example.com",
    endpoint: "/api/contact",
    availableFor: ["Full-time", "Freelance", "Contract"],
    timezone: "Asia/Kolkata",
  },
};

export type Profile = typeof profile;
