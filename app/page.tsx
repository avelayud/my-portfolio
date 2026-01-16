// app/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";
import { Mail, Linkedin, X } from "lucide-react";

type Deployment = {
  id: string;
  icon: string; // emoji or short text
  title: string;
  summary: string;
  bullets: string[];
  tag: string;
};

export default function Home() {
  const deployments: Deployment[] = useMemo(
    () => [
      {
        id: "deal-hub",
        icon: "🧠",
        title: "Deal Scenario Analysis Hub",
        summary: "Internal web tool to simulate deal scenarios fast across engagements.",
        bullets: [
          "Defined must-have scenarios with partners; shipped MVP in weeks.",
          "Normalized financial + operational inputs into one decision-ready view.",
          "Designed workflows for non-technical teams; reduced repeat analysis churn.",
        ],
        tag: "Deployed · Internal Tool",
      },
      {
        id: "metrics-hub",
        icon: "📈",
        title: "Benchmarking & Performance Comparison Tool",
        summary: "Sector metrics hub combining internal + market data for quick comps.",
        bullets: [
          "Unified disparate sources into a consistent metric dictionary.",
          "Built “tell me the story” views for partners in live meetings.",
          "Improved speed-to-insight by standardizing inputs + outputs.",
        ],
        tag: "Deployed · Analytics",
      },
      {
        id: "reporting-hub",
        icon: "🧩",
        title: "Business Reporting / Metrics Hub",
        summary: "Reporting layer that makes status, risks, and KPIs hard to ignore.",
        bullets: [
          "Translated messy operational reality into clean weekly reporting.",
          "Created rollups that align operators and execs on the same numbers.",
          "Designed visuals for clarity under time pressure.",
        ],
        tag: "Deployed · Ops Reporting",
      },
      {
        id: "aml",
        icon: "🕵️",
        title: "AML Pattern Analysis (Case Study)",
        summary: "SQL + Python exploration of coordination, routes, and suspicious behavior.",
        bullets: [
          "Built lag, frequency, dyad, and network analyses to triage suspects.",
          "Produced decision-ready visuals + suspect short list for a director review.",
          "Focused on explainable signals over black-box scoring.",
        ],
        tag: "Project · Data Analysis",
      },
      {
        id: "tipper",
        icon: "🍝",
        title: "Restaurant Tip & Performance Analytics",
        summary: "Prototype to quantify server performance and design a fair bonus pool.",
        bullets: [
          "Designed PostgreSQL schema for PoS-like transactions and shifts.",
          "Built Python metrics for revenue, tips, and repeatable performance signals.",
          "Grounded in real operator conversations (not spreadsheet fantasy).",
        ],
        tag: "In Progress · Data Product",
      },
    ],
    []
  );

  // Carousel / modal state
  const [activeDeployment, setActiveDeployment] = useState<Deployment | null>(null);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // Pause the marquee when modal opens, resume when closed
  useEffect(() => {
    setMarqueePaused(Boolean(activeDeployment));
  }, [activeDeployment]);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDeployment(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Duplicate items to create a seamless loop
  const marqueeItems = useMemo(() => [...deployments, ...deployments], [deployments]);

  return (
    <>
      <PageHeader
        kicker="Overview"
        title="Arjuna Velayudam"
        subtitle="Engineer working to get out of Finance & into tech. Looking for on-the-ground, with-customers roles tackling important missions."
      />

      {/* Intro + Snapshot */}
      <section className="section-container pb-8">
        <div className="grid gap-6 md:grid-cols-[1.7fr_1fr] items-start">
          {/* Left */}
          <div className="space-y-3">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              I like turning ambiguity into systems that ship — translating between operators, data, and product so teams can make
              clean decisions and move.
            </p>

            <div className="rounded-2xl border border-border-subtle bg-background/60 px-5 py-4 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-tertiary mb-2">
                what I&apos;m looking for
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Build alongside talented people (high standards, low ego)</li>
                <li>• Work hand-in-hand with customers and operators</li>
                <li>• Build, deploy, iterate — real problems, real outcomes</li>
              </ul>
            </div>
          </div>

          {/* Right: Snapshot (smaller) */}
          <div className="rounded-2xl border border-border-subtle bg-background/70 px-5 py-5 shadow-skeuo-soft/40">
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-tertiary mb-3">
              Snapshot
            </p>

            <div className="space-y-4">
              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>💼</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Current</div>
                  <div className="text-text-secondary">Senior Associate · PwC Deals Transformation</div>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>📍</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Location</div>
                  <div className="text-text-secondary">New York City · originally Buffalo, NY</div>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon" aria-label="Email">
                  <Mail size={14} />
                </div>
                <div>
                  <div className="snapshot-label mb-1">Contact</div>
                  <a
                    href="mailto:velayudamarjuna@gmail.com"
                    className="text-brand-primary underline underline-offset-2 hover:opacity-90"
                  >
                    velayudamarjuna@gmail.com
                  </a>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon" aria-label="LinkedIn">
                  <Linkedin size={14} />
                </div>
                <div>
                  <div className="snapshot-label mb-1">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/arjuna-velayudam"
                    className="text-brand-primary underline underline-offset-2 hover:opacity-90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    /in/arjunavelayudam
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview: Experience */}
      <section className="section-container pb-10">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="section-title mb-1">Where I&apos;ve Worked</h2>
            <p className="section-subtitle max-w-3xl mb-0">
              I&apos;ve been the “make it real” person: messy inputs → clean outputs → shipped workflows.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PwC */}
          <div className="group perspective h-64">
            <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
              <div className="flip-card-face rounded-av-lg flex flex-col justify-center px-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center overflow-hidden">
                    <Image
                      src="/companies/pwc_logo.png"
                      alt="PwC logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-text-primary leading-tight">PwC</div>
                    <div className="text-xs text-text-secondary">Senior Associate · Deals Transformation · 2022–Now</div>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Built internal tools + decision systems for partners and teams operating under deal timelines.
                </p>
                <p className="mt-3 text-[11px] text-text-muted">
                  Flip for the “resume bullets” version →
                </p>
              </div>

              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">Highlights</div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Shipped a scenario hub used across engagements; reduced repeat modeling churn.</li>
                  <li>Designed partner-friendly outputs that work live in meetings (fast, legible, decisive).</li>
                  <li>Translated operator constraints into product requirements and iterated with feedback.</li>
                </ul>
                <div className="mt-3 text-[11px] text-text-muted">
                  “Clear answers, quickly” — without sacrificing accuracy.
                </div>
              </div>
            </div>
          </div>

          {/* A&M */}
          <div className="group perspective h-64">
            <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
              <div className="flip-card-face rounded-av-lg flex flex-col justify-center px-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center overflow-hidden">
                    <Image
                      src="/companies/AM_logo.png"
                      alt="Alvarez & Marsal logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-text-primary leading-tight">Alvarez &amp; Marsal</div>
                    <div className="text-xs text-text-secondary">Analyst · Performance Improvement · 2020–2022</div>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Built SQL workflows, visualizations, and forecast models to support expert testimony in damages cases.
                </p>
                <p className="mt-3 text-[11px] text-text-muted">
                  Flip for the “resume bullets” version →
                </p>
              </div>

              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">Highlights</div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Built repeatable SQL pipelines for multi-source datasets under tight deadlines.</li>
                  <li>Produced exhibits and visuals that held up to scrutiny (and cross-examination).</li>
                  <li>Created forecast models tying assumptions to outcomes; documented logic end-to-end.</li>
                </ul>
                <div className="mt-3 text-[11px] text-text-muted">
                  Learned to be precise when stakes (and lawyers) are high.
                </div>
              </div>
            </div>
          </div>

          {/* Goldman */}
          <div className="group perspective h-64">
            <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
              <div className="flip-card-face rounded-av-lg flex flex-col justify-center px-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center overflow-hidden">
                    <Image
                      src="/companies/GS_logo.png"
                      alt="Goldman Sachs logo"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-text-primary leading-tight">Goldman Sachs</div>
                    <div className="text-xs text-text-secondary">Ops / Markets · Internship · 2017–2018</div>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  First look at high-volume systems, tight SLAs, and how small breaks become big problems.
                </p>
                <p className="mt-3 text-[11px] text-text-muted">
                  Flip for the “resume bullets” version →
                </p>
              </div>

              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">Highlights</div>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Automated recurring ops reporting; improved reliability under strict SLAs.</li>
                  <li>Flagged flow anomalies by validating inputs, breaks, and downstream impact quickly.</li>
                  <li>Coordinated across teams to resolve data issues with minimal downtime.</li>
                </ul>
                <div className="mt-3 text-[11px] text-text-muted">
                  Systems thinking started here — and stuck.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View all */}
        <div className="mt-6 flex justify-center">
          <Link href="/experience" className="btn-primary">
            View all experience →
          </Link>
        </div>
      </section>

      {/* Featured Deployments & Product work (scrolling carousel + modal) */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2">Featured Deployments &amp; Product Work</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          A rotating sampler — click one to pause and peek inside.
        </p>

        <div
          className={`marquee-outer ${marqueePaused ? "marquee-paused" : ""}`}
          onMouseEnter={() => setMarqueePaused(true)}
          onMouseLeave={() => setMarqueePaused(Boolean(activeDeployment))}
        >
          <div className="marquee-track" ref={marqueeRef}>
            {marqueeItems.map((d, idx) => (
              <button
                key={`${d.id}-${idx}`}
                className="marquee-card"
                onClick={() => setActiveDeployment(d)}
                type="button"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center text-[16px]">
                      {d.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-text-primary leading-tight">{d.title}</div>
                      <div className="text-xs text-text-secondary">{d.summary}</div>
                    </div>
                  </div>
                  <span className="pill-tag">{d.tag}</span>
                </div>
              </button>
            ))}

            {/* “See more” card */}
            <Link href="/deployments" className="marquee-card link-card">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center text-[16px]">
                    →
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-text-primary leading-tight">See more</div>
                    <div className="text-xs text-text-secondary">Full list of deployments &amp; product work.</div>
                  </div>
                </div>
                <span className="pill-tag">Explore</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Modal */}
        {activeDeployment && (
          <div className="modal-overlay" onMouseDown={() => setActiveDeployment(null)}>
            <div className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl border border-divider bg-background flex items-center justify-center text-[18px]">
                    {activeDeployment.icon}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-text-primary">{activeDeployment.title}</div>
                    <div className="text-sm text-text-secondary mt-1">{activeDeployment.summary}</div>
                    <div className="mt-2">
                      <span className="pill-tag">{activeDeployment.tag}</span>
                    </div>
                  </div>
                </div>

                <button className="icon-btn" onClick={() => setActiveDeployment(null)} aria-label="Close modal">
                  <X size={16} />
                </button>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold text-text-primary mb-2">What it is / what I did</div>
                <ul className="text-sm text-text-secondary space-y-2 list-disc list-inside">
                  {activeDeployment.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex justify-end">
                <Link href="/deployments" className="btn-secondary" onClick={() => setActiveDeployment(null)}>
                  View more deployments →
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Education */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2">Education</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Formal training + the “I like learning hard things” habit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Northeastern */}
          <div className="edu-mini-card group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center">
                  🎓
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Northeastern University</div>
                  <div className="text-xs text-text-secondary">B.S. Industrial Engineering · Math + Econ minors</div>
                  <div className="text-xs text-text-muted mt-1">Honors / notes: (add here)</div>
                </div>
              </div>
              <span className="pill-tag">Boston</span>
            </div>

            <div className="edu-hover">
              <div className="mt-3 text-xs font-semibold text-text-primary">Coursework highlights</div>
              <ul className="mt-2 text-xs text-text-secondary list-disc list-inside space-y-1">
                <li>Optimization, stochastic models, operations research</li>
                <li>Statistics, probability, econometrics foundations</li>
                <li>Systems design + process improvement</li>
              </ul>

              <div className="mt-3 text-xs font-semibold text-text-primary">Honors &amp; leadership</div>
              <ul className="mt-2 text-xs text-text-secondary list-disc list-inside space-y-1">
                <li>(Add 1–2 items you want recruiters to see)</li>
                <li>(Clubs, leadership, awards, etc.)</li>
              </ul>
            </div>
          </div>

          {/* MIT / course */}
          <div className="edu-mini-card group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">MIT (xPRO)</div>
                  <div className="text-xs text-text-secondary">AI / ML Bootcamp · Python-heavy</div>
                  <div className="text-xs text-text-muted mt-1">Capstone: malaria detection (CNN)</div>
                </div>
              </div>
              <span className="pill-tag">Online</span>
            </div>

            <div className="edu-hover">
              <div className="mt-3 text-xs font-semibold text-text-primary">What I built</div>
              <ul className="mt-2 text-xs text-text-secondary list-disc list-inside space-y-1">
                <li>End-to-end ML pipeline (preprocessing → training → eval)</li>
                <li>Model iteration with regularization + early stopping</li>
                <li>Clear evaluation artifacts (metrics, confusion matrix, etc.)</li>
              </ul>
            </div>
          </div>

          {/* High school placeholder */}
          <div className="edu-mini-card group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl border border-divider bg-background flex items-center justify-center">
                  🏫
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">High School</div>
                  <div className="text-xs text-text-secondary">Name · Year</div>
                  <div className="text-xs text-text-muted mt-1">Honors / activities (optional)</div>
                </div>
              </div>
              <span className="pill-tag">Buffalo</span>
            </div>

            <div className="edu-hover">
              <div className="mt-3 text-xs font-semibold text-text-primary">More details</div>
              <ul className="mt-2 text-xs text-text-secondary list-disc list-inside space-y-1">
                <li>(Optional: 1–2 bullets only)</li>
                <li>(Keep it light)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/education" className="btn-secondary">
            View education →
          </Link>
        </div>
      </section>

      {/* Interests / vibe */}
      <section className="section-container pb-24">
        <h2 className="section-title mb-2">Outside of work</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          I take “recovery” seriously… and then do something mildly unsafe (but certified).
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="interest-chip" title="PADI certified, yes I log dives like a nerd.">
            🤿 PADI Advanced Diver
          </span>
          <span className="interest-chip" title="Certified lifeguard/CPR: I can save you, then roast you for panicking.">
            🛟 Lifeguard / CPR
          </span>
          <span className="interest-chip" title="BJJ white belt: professional humbling enthusiast.">
            🥋 BJJ (white belt)
          </span>
          <span className="interest-chip" title="Working on paragliding: 5 flights logged, 0 hero moments (so far).">
            🪂 Paragliding (5 flights)
          </span>
          <span className="interest-chip" title="Volunteered on a rural Italy farm when I was dead broke. Great character development.">
            🌱 WWOOF / sustainable farming
          </span>
          <span className="interest-chip" title="Half marathon runner: I suffer for fun, on schedule.">
            🏃 Half marathon running
          </span>
          <span className="interest-chip" title="Skiing/snowboarding: happiest when it’s cold and I’m slightly out of control.">
            🎿 Ski + snowboard
          </span>
          <span className="interest-chip" title="Williamsburg Athletic Club: adult recess, responsibly.">
            🏋️ Williamsburg Athletic Club
          </span>
          <span className="interest-chip" title="New country every year: collecting perspective, not magnets.">
            🌍 New country every year
          </span>
          <span className="interest-chip" title="Technical: always learning, occasionally finishing personal projects.">
            🧠 Technical tinkering
          </span>
        </div>
      </section>
    </>
  );
}
