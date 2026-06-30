export const designSystem = {
  colors: {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#111827",
    secondaryText: "#6B7280",
    primaryAccent: "#2563EB",
    secondaryAccent: "#10B981",
  },
  spacing: {
    section: "py-24 sm:py-28 lg:py-32",
    shell: "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10",
    stack: "space-y-6",
  },
  radii: {
    card: "rounded-2xl",
    button: "rounded-full",
  },
  motion: {
    section: {
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
} as const;
