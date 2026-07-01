"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Award,
  BookOpen,
  Cpu,
  ExternalLink,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Microscope,
  MoveRight,
  Rocket,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { designSystem } from "@/lib/design-system";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Startup", id: "startup" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Achievements", id: "achievements" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const stats = [
  { value: "180nm", label: "Custom IC design training exposure" },
  { value: "VLSID 2026", label: "Fellowship recognition" },
  { value: "3", label: "Engineering project pillars" },
  { value: "Kerala", label: "Startup impact focus" },
];

const startupTimeline = [
  {
    title: "Discovery",
    body: "Curate lesser-known places, map local stories, and surface travel options beyond crowded tourist routes.",
  },
  {
    title: "Trust Layer",
    body: "Connect travelers with independent guides, verified local context, and practical information for responsible visits.",
  },
  {
    title: "Community Value",
    body: "Create visibility for local communities while encouraging respectful, distributed tourism across Kerala.",
  },
  {
    title: "Platform Scale",
    body: "Evolve into a data-backed travel platform with guide tools, itinerary intelligence, and regional partnerships.",
  },
];

const startupCards = [
  {
    title: "Mission",
    body: "Make unexplored destinations in Kerala easier to discover while keeping local people, culture, and sustainability at the center.",
  },
  {
    title: "Vision",
    body: "Build a trusted travel platform where authentic local experiences become accessible without turning every place into a crowded commodity.",
  },
  {
    title: "Problem Statement",
    body: "Many travelers see the same familiar locations, while smaller communities, local guides, and meaningful routes remain invisible.",
  },
  {
    title: "Why It Matters",
    body: "Responsible discovery can distribute opportunity, reduce pressure on overvisited places, and help travelers experience Kerala with more context.",
  },
];

const benefits = [
  {
    title: "For Travelers",
    body: "Clear discovery, authentic routes, local guide access, and practical context before visiting lesser-known places.",
  },
  {
    title: "For Local Communities",
    body: "Better visibility, more distributed tourism income, and a platform narrative that respects culture and place.",
  },
  {
    title: "For Independent Guides",
    body: "A stronger digital presence, direct discovery by travelers, and tools to explain the value of their local expertise.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "Geospatial data",
  "Content curation",
  "Guide onboarding",
  "Community-first UX",
];

const roadmap = [
  "Destination and guide database",
  "Traveler itinerary flows",
  "Local community partner profiles",
  "Responsible travel scoring",
  "Demo platform for curated Kerala routes",
];

const aboutStory = [
  {
    title: "Academic Journey",
    body: "Sanath is pursuing an MSc in Applied Physics with specialization in VLSI at Digital University Kerala after completing a BSc in Physics from Calicut University.",
  },
  {
    title: "Interest in VLSI",
    body: "His current work centers on CMOS fundamentals, digital IC design, physical design basics, layout, DRC, LVS, Verilog RTL, and circuit simulation.",
  },
  {
    title: "Quantum Computing",
    body: "Alongside semiconductor design, he is drawn to quantum computing as a future research direction where physics and computation meet.",
  },
  {
    title: "Leadership",
    body: "As a student leader and General Secretary, he brings organization, communication, and ownership into technical environments.",
  },
  {
    title: "Problem Solving",
    body: "His projects connect theory to working systems, from VGG-11 hardware implementation to ESP32-based autonomous object detection.",
  },
  {
    title: "Future Goals",
    body: "He aims to contribute to reliable semiconductor and hardware design while building technology products that create real-world impact.",
  },
];

const skills = [
  { title: "VLSI", icon: Cpu, items: ["CMOS circuit design", "Digital IC design", "Physical design basics", "Layout, DRC, LVS"] },
  { title: "EDA Tools", icon: Layers3, items: ["Cadence Virtuoso", "LTspice", "Magic VLSI", "Xschem", "Silvaco TCAD"] },
  { title: "Programming", icon: BookOpen, items: ["Verilog RTL", "C", "Python", "Arduino"] },
  { title: "Embedded Systems", icon: Rocket, items: ["ESP32", "Ultrasonic sensing", "Motor driver control", "Real-time response"] },
  { title: "Research", icon: Microscope, items: ["Analog IC design", "Mixed signal design", "ASIC design", "Quantum computing"] },
  { title: "Leadership", icon: Users, items: ["Student leadership", "General Secretary", "Team coordination", "Founder mindset"] },
];

const projects = [
  {
    title: "Bandgap Reference Design",
    overview: "Analog IC design exploration focused on a stable reference circuit, transistor-level thinking, and simulation-led refinement.",
    problem: "Reliable integrated circuits need reference voltages that remain useful across operating and process conditions.",
    solution: "Designed the project around CMOS analog fundamentals, circuit simulation, and layout-aware design decisions.",
    tech: ["CMOS", "Analog IC Design", "Cadence Virtuoso", "LTspice"],
    results: "Strengthened practical understanding of analog circuit behavior, reference generation, and simulation discipline.",
    imagePosition: "left center",
  },
  {
    title: "VGG-11 Hardware Accelerator",
    overview: "A Verilog HDL implementation of VGG-11 architecture with behavioral simulation and hardware-oriented optimization.",
    problem: "Deep neural networks require efficient hardware mapping when targeting ASIC-style implementation paths.",
    solution: "Implemented layer-wise operations in Verilog, studied resource behavior, and optimized the design for hardware execution.",
    tech: ["Verilog HDL", "RTL Design", "ASIC Targeting", "Behavioral Simulation"],
    results: "Created an ASIC tape-out oriented design study with layer-wise analysis and resource efficiency review.",
    imagePosition: "center center",
  },
  {
    title: "ESP32 Autonomous Robot",
    overview: "An autonomous object detection car built with ESP32, ultrasonic sensing, and L293D motor driver control.",
    problem: "Small embedded systems need fast sensing and response loops to navigate obstacles in real time.",
    solution: "Built microcontroller logic for obstacle detection, motor control, and autonomous response behavior.",
    tech: ["ESP32", "Arduino", "Ultrasonic Sensors", "L293D"],
    results: "Delivered a working embedded robotics project with real-time object detection and movement control.",
    imagePosition: "right center",
  },
];

const research = [
  { title: "Analog IC Design", body: "CMOS fundamentals, stable circuit behavior, reference generation, and transistor-level design discipline." },
  { title: "Mixed Signal Design", body: "Bridging analog behavior and digital control through practical coursework and simulation-led learning." },
  { title: "ASIC Design", body: "RTL design, physical design basics, and hardware implementation thinking for scalable silicon systems." },
  { title: "Quantum Computing", body: "A future-facing interest rooted in applied physics and the evolution of computation beyond classical systems." },
  { title: "Neuromorphic Computing", body: "A research direction that connects circuits, computation, and brain-inspired hardware architectures." },
  { title: "Future Research Interests", body: "Reliable hardware, efficient accelerators, device-aware design, and semiconductor systems with practical impact." },
];

const achievements = [
  { title: "Leadership Recognition", body: "Recognized through student leadership responsibilities and a track record of taking ownership beyond academics." },
  { title: "General Secretary", body: "Served as a student leader, developing communication, coordination, and decision-making experience." },
  { title: "VLSID 2026 Fellowship", body: "Selected for the VLSI Design Conference fellowship in Pune, India, recognizing academic merit and interest in VLSI research." },
  { title: "NIT Calicut IC Design Training", body: "Completed a short-term training programme on Custom IC Design and Layout using Standard 180nm PDK with NIT Calicut and IEEE SSCS." },
  { title: "Academic Achievements", body: "Progressed from BSc Physics into MSc Applied Physics with VLSI specialization, with coursework in VLSI technologies, physical design, digital IC design, and mixed signal design." },
];

function SectionHeading({ kicker, title, body }: { kicker: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{body}</p> : null}
    </div>
  );
}

function MotionSection({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className={className} {...designSystem.motion.section}>
      {children}
    </motion.section>
  );
}

function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  const styles = {
    primary: "bg-primary text-white shadow-card hover:-translate-y-0.5 hover:bg-blue-700",
    secondary: "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
    ghost: "text-ink hover:text-primary",
  };

  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${styles[variant]}`}>
      {children}
    </a>
  );
}
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sanath Palakkal",
      email: "sanath.es24@duk.ac.in",
      jobTitle: "MSc Applied Physics student specializing in VLSI",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        addressCountry: "India",
      },
      alumniOf: ["Digital University Kerala", "Calicut University"],
      knowsAbout: ["VLSI", "Analog IC Design", "Digital IC Design", "ASIC Design", "Embedded Systems", "Quantum Computing"],
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:sanath.es24@duk.ac.in?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-background text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-white/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="flex items-center gap-3 font-semibold">
            <span className="flex size-10 items-center justify-center rounded-full bg-ink text-sm text-white">SP</span>
            <span className="hidden sm:block">Sanath Palakkal</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === item.id ? "bg-surface text-primary" : "text-muted hover:bg-surface hover:text-ink"}`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:block">
            <ButtonLink href="/Sanath_CV_26.pdf" variant="secondary">Resume</ButtonLink>
          </div>

          <button className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" type="button">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
            <div className="hide-scrollbar flex gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${activeSection === item.id ? "bg-surface text-primary" : "text-muted"}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10 soft-grid opacity-55" />
        <motion.div aria-hidden className="absolute left-[8%] top-32 -z-10 size-36 rounded-full border border-primary/15 bg-primary/5" animate={{ y: [0, 14, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden className="absolute bottom-20 right-[12%] -z-10 size-44 rounded-full border border-secondary/15 bg-secondary/5" animate={{ y: [0, -16, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />

        <div className={designSystem.spacing.shell}>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="section-kicker">VLSI engineer in progress</p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">Sanath Palakkal </h1>
              <p className="mt-5 text-xl font-medium text-primary sm:text-2xl">MSc Applied Physics (VLSI)</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">Building reliable hardware, meaningful software, and technology that solves real-world problems.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#startup">View Startup <MoveRight size={17} /></ButtonLink>
                <ButtonLink href="#projects" variant="secondary">View Projects <ExternalLink size={17} /></ButtonLink>
                <ButtonLink href="/Sanath_CV_26.pdf" variant="secondary">Download Resume</ButtonLink>
              </div>
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.value} className="rounded-2xl border border-line bg-white/80 p-4">
                    <p className="text-lg font-semibold text-ink">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="glass relative overflow-hidden rounded-[2rem] p-3">
                <Image src="/images/sanath-portrait.png" alt="Professional editorial portrait visual for Sanath Palakkal" width={1200} height={1400} priority className="aspect-[4/5] w-full rounded-[1.55rem] object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-white p-5 shadow-card">
                <p className="text-sm font-semibold text-ink">Founder of KuTu</p>
                <p className="mt-1 text-sm leading-6 text-muted">A travel technology idea focused on discovery, community value, and responsible local experiences.</p>
              </div>
            </motion.div>
          </div>

          <a href="#startup" className="mt-20 inline-flex items-center gap-3 text-sm font-medium text-muted">
            <span className="relative flex h-10 w-6 justify-center rounded-full border border-line">
              <motion.span className="mt-2 size-1.5 rounded-full bg-primary" animate={{ y: [0, 14, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            </span>
            Scroll to flagship work
          </a>
        </div>
      </section>

      <MotionSection id="startup" className="bg-surface py-24 sm:py-28 lg:py-32">
        <div className={designSystem.spacing.shell}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">Flagship startup</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">Exploring Unexplored Kerala</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">A responsible travel discovery platform designed to help people find lesser-known Kerala experiences while creating value for local communities and independent guides.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#startup">Explore Startup <Rocket size={17} /></ButtonLink>
                <ButtonLink href="#startup-case-study" variant="secondary">Read Case Study</ButtonLink>
                <ButtonLink href="#startup-demo" variant="secondary">View Demo</ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(1).map((item) => (
                <div key={item.value} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <p className="text-2xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
            <Image src="/images/startup-kerala.png" alt="Exploring Unexplored Kerala travel technology visual" width={1800} height={1000} className="h-[320px] w-full object-cover sm:h-[480px]" />
          </div>

          <div id="startup-case-study" className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {startupCards.map((card) => (
              <motion.article key={card.title} className="rounded-2xl border border-line bg-white p-6 shadow-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">How the platform works</h3>
              <div className="mt-8 space-y-3">
                {startupTimeline.map((step, index) => (
                  <button key={step.title} type="button" onClick={() => setActiveStep(index)} className={`w-full rounded-2xl border p-5 text-left transition ${activeStep === index ? "border-primary bg-primary/5" : "border-line bg-white hover:border-primary/30"}`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-ink">{step.title}</span>
                      <span className="text-sm text-primary">0{index + 1}</span>
                    </div>
                    <p className={`mt-3 text-sm leading-7 ${activeStep === index ? "text-ink" : "text-muted"}`}>{step.body}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                    <h4 className="font-semibold text-ink">{benefit.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-muted">{benefit.body}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h4 className="font-semibold text-ink">Technology Stack</h4>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {techStack.map((item) => <span key={item} className="rounded-full bg-surface px-3 py-2 text-sm text-ink">{item}</span>)}
                  </div>
                </div>
                <div id="startup-demo" className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h4 className="font-semibold text-ink">Current Progress</h4>
                  <p className="mt-4 text-sm leading-7 text-muted">The concept, positioning, audience value, and early platform structure are being shaped around travel discovery, guide visibility, and community-centered impact.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <h4 className="font-semibold text-ink">Future Roadmap</h4>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {roadmap.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-secondary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="about" className={designSystem.spacing.section}>
        <div className={designSystem.spacing.shell}>
          <SectionHeading kicker="About" title="A physics student moving toward silicon, systems, and meaningful products." body="This is the story behind the resume: where Sanath is learning, what he is building, and why his interests sit across hardware, research, leadership, and entrepreneurship." />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="sticky top-28 overflow-hidden rounded-[2rem] border border-line bg-surface p-3 shadow-card">
              <Image src="/images/sanath-portrait.png" alt="Professional image visual for Sanath Palakkal" width={900} height={1100} className="aspect-[4/5] w-full rounded-[1.45rem] object-cover" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {aboutStory.map((item) => (
                <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article key={skill.title} className="rounded-2xl border border-line bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-white text-primary"><Icon size={18} /></span>
                    <h3 className="font-semibold text-ink">{skill.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => <span key={item} className="rounded-full bg-white px-3 py-2 text-sm text-muted">{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="projects" className="bg-surface py-24 sm:py-28 lg:py-32">
        <div className={designSystem.spacing.shell}>
          <SectionHeading kicker="Engineering Projects" title="Hardware-centered projects with practical systems thinking." body="The startup stands on its own. This section focuses on engineering work across analog design, neural network acceleration, and embedded robotics." />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-card" whileHover={{ y: -6 }} transition={{ duration: 0.22 }}>
                <Image src="/images/engineering-projects.png" alt={`${project.title} visual`} width={1200} height={800} className="h-64 w-full object-cover" style={{ objectPosition: project.imagePosition }} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{project.overview}</p>
                  <div className="mt-6 space-y-4">
                    <div><p className="text-sm font-semibold text-ink">Problem</p><p className="mt-1 text-sm leading-7 text-muted">{project.problem}</p></div>
                    <div><p className="text-sm font-semibold text-ink">Solution</p><p className="mt-1 text-sm leading-7 text-muted">{project.solution}</p></div>
                    <div><p className="text-sm font-semibold text-ink">Results</p><p className="mt-1 text-sm leading-7 text-muted">{project.results}</p></div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => <span key={item} className="rounded-full bg-surface px-3 py-2 text-xs font-medium text-ink">{item}</span>)}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink href="https://github.com/sanathpalakkale" variant="secondary"><GitBranch size={16} /> GitHub</ButtonLink>
                    <ButtonLink href="#contact" variant="ghost">Case Study <MoveRight size={16} /></ButtonLink>
                    <ButtonLink href="#contact" variant="ghost">Demo <MoveRight size={16} /></ButtonLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="research" className={designSystem.spacing.section}>
        <div className={designSystem.spacing.shell}>
          <SectionHeading kicker="Research" title="Research interests shaped by circuits, computation, and applied physics." />
          <div className="mx-auto max-w-4xl">
            {research.map((item, index) => (
              <div key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-sm font-semibold text-primary">{index + 1}</span>
                  {index < research.length - 1 ? <span className="h-full w-px bg-line" /> : null}
                </div>
                <div className="pb-10">
                  <article className="rounded-2xl border border-line bg-white p-6 shadow-card">
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
      <MotionSection id="achievements" className="bg-surface py-24 sm:py-28 lg:py-32">
        <div className={designSystem.spacing.shell}>
          <SectionHeading kicker="Achievements" title="Recognition, leadership, and technical growth." />
          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary"><Award size={18} /></span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="resume" className={designSystem.spacing.section}>
        <div className={designSystem.spacing.shell}>
          <SectionHeading kicker="Resume" title="A concise view of Sanath's academic and engineering profile." body="The embedded resume includes education, domain skills, EDA tools, academic projects, certificates, and areas of interest." />
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-2xl font-semibold tracking-tight">Resume Highlights</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-muted">
                <p>MSc Applied Physics with specialization in VLSI at Digital University Kerala.</p>
                <p>Hands-on exposure to analog circuit design, Verilog HDL, CMOS layout, circuit simulation, and embedded systems.</p>
                <p>Selected as a VLSID 2026 Fellowship Recipient and trained in Custom IC Design and Layout using Standard 180nm PDK.</p>
              </div>
              <div className="mt-8"><ButtonLink href="/Sanath_CV_26.pdf">Download Resume <MoveRight size={17} /></ButtonLink></div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft">
              <iframe title="Sanath Palakkal resume PDF" src="/Sanath_CV_26.pdf" className="h-[720px] w-full" />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="bg-ink py-24 text-white sm:py-28 lg:py-32">
        <div className={designSystem.spacing.shell}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">Contact</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Let us talk about silicon, research, startups, or meaningful technology.</h2>
              <div className="mt-10 grid gap-4">
                <a href="mailto:palakkalsanath@gmail.com" className="flex items-center gap-3 text-gray-300 transition hover:text-white"><Mail size={18} /> palakkalsanath@gmail.cpm</a>
                <a href="https://www.linkedin.com/in/sanath-palakkal-34a78a212/" className="flex items-center gap-3 text-gray-300 transition hover:text-white"><ExternalLink size={18} /> sanathpalakkal</a>
                <a href="https://github.com/sanathpalakkale" className="flex items-center gap-3 text-gray-300 transition hover:text-white"><GitBranch size={18} /> github.com/sanathpalakkale</a>
                <p className="flex items-center gap-3 text-gray-300"><MapPin size={18} /> Kozhikode, Kerala, India</p>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-white">Name<input name="name" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-primary" /></label>
                <label className="text-sm font-medium text-white">Email<input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-primary" /></label>
              </div>
              <label className="mt-5 block text-sm font-medium text-white">Message<textarea name="message" required rows={6} className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white px-4 py-3 text-ink outline-none transition focus:border-primary" /></label>
              <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">Send Message <Send size={16} /></button>
            </form>
          </div>

          <footer className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Sanath Palakkal - VLSI, research, startup building, and leadership.</p>
            <a href="#home" className="inline-flex items-center gap-2 text-white transition hover:text-secondary">Back to top <ArrowUp size={16} /></a>
          </footer>
        </div>
      </MotionSection>
    </main>
  );
}
