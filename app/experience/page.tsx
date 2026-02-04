// app/experience/page.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { X, Briefcase, Rocket, HeartHandshake, FlaskConical } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

type SectionKey = "Professional" | "Entrepreneurial" | "Research" | "Volunteer";

type ExpItem = {
  id: string;
  section: SectionKey;
  company: string;
  roleLine: string;
  location: string; // shown on card + modal
  logoSrc?: string;
  icon?: string;
  short: string; // SHORT overview text (card)
  overview: string[]; // overview bullets (modal)
  highlights?: string[]; // work highlights bullets (modal)
};

export default function ExperiencePage() {
  const items: ExpItem[] = useMemo(
    () => [
      /* =======================
         Professional
      ======================= */
      {
        id: "pwc",
        section: "Professional",
        company: "PwC",
        logoSrc: "/companies/pwc_logo.png",
        roleLine: "Senior Associate · Deals Transformation · 2022–Now",
        location: "New York, NY",
        short:
          "Led deal transformation across PE diligence and separation programs.",
        overview: [
          "Extensive experience (25+ engagements) across industries on PE standalone and synergy diligence.",
          "On-the-ground client exposure on long-term M&A programs (separations and spins).",
          "Worked across 15+ clients and promoted first in class on a 1-year accelerated timeline.",
          "Built a technical brand by leveraging SQL and Python to accelerate analysis.",
        ],
        highlights: [
          "Led teams of 3–7 across US automotive and industrials to deliver multi-workstream programs.",
          "Drove corporate org design, standalone and synergy modeling, budget development, and rollout of project-wide technical tools.",
          "Shipped a commercial scenario hub; generalized the approach into a new solution offering driving $5M+ in revenue to date.",
          "Designed custom ETL aggregation to improve management forecasting and market penetration insights.",
          "Led C-suite report-outs for product pitches and workstream updates, translating data into clear narratives.",
          "Owned end-to-end delivery across multiple workstreams: scoping, build coordination, rollout, and adoption support.",
        ],
      },
      {
        id: "am",
        section: "Professional",
        company: "Alvarez & Marsal",
        logoSrc: "/companies/AM_logo.png",
        roleLine: "Data Analyst · Disputes & Investigations · 2020–2021",
        location: "San Francisco, CA",
        short:
          "Forensic analytics and visualization for legal damages cases.",
        overview: [
          "Analyzed large datasets and built visual narratives for expert testimony on legal damages.",
          "Supported matters spanning lost revenue quantification and software IP infringement.",
        ],
        highlights: [
          "Acted as a forensic accountant, analyzing tax filings and financial statements to trace investment allocations and cash flows.",
          "Identified $600M+ in questionable offshore investments delegated to tax havens.",
          "Took projects from raw data dumps to multi-dashboard work products using Python and Tableau over six-month timelines.",
          "Cleaned and evaluated multi-million-row SQL datasets, creating variables for complex analysis and exhibit-ready outputs.",
          "Delivered exhibits and written analyses for expert reports and client presentations across damages and contract breach cases.",
          "Built repeatable SQL pipelines and forecast models with documented assumptions and audit-ready traceability.",
        ],
      },
      {
        id: "gs",
        section: "Professional",
        company: "Goldman Sachs",
        logoSrc: "/companies/GS_logo.png",
        roleLine: "Analyst · PWM & Operations · 2019",
        location: "New York, NY",
        short:
          "Analytics, compliance, and reporting for PWM operations at scale.",
        overview: [
          "Supported Private Wealth Management operations with analytics, compliance remediation, and reporting.",
          "Focused on improving advisor performance metrics and ensuring regulatory adherence.",
        ],
        highlights: [
          "Built custom Salesforce reports to analyze advisor wins and identify incentive-driven growth opportunities.",
          "Partnered on division-wide budget reallocation and performance metric analysis.",
          "Ran cost-benefit analysis on underfunded accounts, comparing revenue gain vs management fee loss over time.",
          "Designed a 3-month remediation workflow to address new regulations; coordinated bi-weekly with compliance and advisors.",
          "Developed VBA automations and spreadsheet systems to track fees and compensation across 12 offices.",
          "Cut a manual, month-long annual process down to a single-day system update.",
        ],
      },

      /* =======================
         Entrepreneurial
      ======================= */
      {
        id: "orators",
        section: "Entrepreneurial",
        company: "Manhattan Orators",
        roleLine: "Co-Founder · VP Finance · Speaker · 2023–Now",
        location: "New York, NY",
        icon: "🎤",
        short:
          "Co-founded a professional speaking community and built the operating system.",
        overview: [
          "Co-founded a monthly, membership-based public speaking club for professionals.",
          "Designed pricing and membership structure; managed finances and sustainability.",
          "Facilitated sessions and spoke regularly to keep standards high.",
          "Built lightweight ops: scheduling, onboarding, communications, and feedback loops.",
        ],
      },
      {
        id: "el-comedor",
        section: "Entrepreneurial",
        company: "El Comedor",
        roleLine: "Founder & Manager · 2020–2021",
        location: "Playa del Carmen, MX",
        icon: "🍲",
        short:
          "Built and ran a small operation delivering meals during COVID disruption.",
        overview: [
          "Responded to food insecurity after tourism collapsed during COVID-19.",
          "Hired and managed a small operating team across cooking and distribution.",
          "Created simple workflows for procurement, prep, and delivery.",
          "Distributed 7,500+ meals using donations and fundraising.",
        ],
      },

      /* =======================
         Research
      ======================= */
      {
        id: "chem-lab",
        section: "Research",
        company: "Chemistry Lab Research",
        roleLine: "Methane → Methanol Catalysis",
        location: "Northeastern University",
        icon: "🧪",
        short:
          "Hands-on lab research with strict procedures and process discipline.",
        overview: [
          "Assisted in developing catalysts to convert methane into methanol.",
          "Worked in a lab environment with careful documentation and repeatability.",
          "Connected chemistry and engineering work to sustainability goals.",
        ],
      },

      /* =======================
         Volunteer
      ======================= */
      {
        id: "wwoof",
        section: "Volunteer",
        company: "WWOOF Italia",
        roleLine: "Farm Hand & Chef · 2017",
        location: "Padua, Italy",
        icon: "🌱",
        short:
          "Field work focused on consistency, teamwork, and physical systems.",
        overview: [
          "Worked at an organic farm supporting daily operations.",
          "Helped build a greenhouse and maintain an apiary.",
          "Planted, harvested, and cooked with seasonal farm output.",
        ],
      },
      {
        id: "fam",
        section: "Volunteer",
        company: "Fenway Academic Mentoring (FAM)",
        roleLine: "Mentor",
        location: "Boston, MA",
        icon: "📚",
        short:
          "Mentored high school students through consistent academic support.",
        overview: [
          "Mentored students after school across multiple subjects.",
          "Helped with homework, study habits, and confidence-building.",
          "Served as a consistent role model and sounding board.",
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<ExpItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const sections = [
    {
      key: "Professional" as const,
      icon: <Briefcase className="h-4 w-4 text-brand-primary" />,
      title: "Professional",
      subtitle:
        "Roles where I shipped under pressure — building tools and workflows that actually get used.",
    },
    {
      key: "Entrepreneurial" as const,
      icon: <Rocket className="h-4 w-4 text-brand-primary" />,
      title: "Entrepreneurial",
      subtitle:
        "0→1 efforts focused on execution, iteration, and real-world constraints.",
    },
    {
      key: "Research" as const,
      icon: <FlaskConical className="h-4 w-4 text-brand-primary" />,
      title: "Research",
      subtitle:
        "Hands-on research work emphasizing process discipline and repeatability.",
    },
    {
      key: "Volunteer" as const,
      icon: <HeartHandshake className="h-4 w-4 text-brand-primary" />,
      title: "Volunteer",
      subtitle:
        "Work centered on consistency, trust, and showing up for others.",
    },
  ];

  const colsFor = (key: SectionKey) =>
    key === "Professional" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <>
      <PageHeader
        kicker="Experience"
        title="Where I’ve built, shipped, and showed up."
        subtitle="Experience aligned to deployment strategy, solutions engineering, and product-focused delivery."
      />

      {sections.map((s, idx) => {
        const sectionItems = items.filter((i) => i.section === s.key);

        return (
          <div key={s.key}>
            <Section>
              <div className="flex items-center gap-2 mb-2">
                {s.icon}
                <h2 className="section-title mb-0">{s.title}</h2>
              </div>
              <p className="section-subtitle max-w-3xl mb-6">{s.subtitle}</p>

              <div className={`grid gap-6 ${colsFor(s.key)}`}>
                {sectionItems.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    className="experience-card experience-card-centered"
                    onClick={() => setActive(it)}
                  >
                    <div className="experience-logo-plain">
                      {it.logoSrc ? (
                        <Image
                          src={it.logoSrc}
                          alt={`${it.company} logo`}
                          width={92}
                          height={92}
                          className="experience-logo-img"
                          priority={it.section === "Professional"}
                        />
                      ) : (
                        <div className="experience-fallback-icon" aria-hidden>
                          {it.icon ?? "✦"}
                        </div>
                      )}
                    </div>

                    <div className="experience-stack">
                      <div className="card-kicker">{it.location}</div>
                      <div className="experience-company">{it.company}</div>
                      <div className="experience-role">{it.roleLine}</div>
                      <p className="experience-short">{it.short}</p>
                    </div>

                    <div className="experience-cta">View Details</div>
                  </button>
                ))}
              </div>
            </Section>

            {idx !== sections.length - 1 && <div className="section-divider" />}
          </div>
        );
      })}

      {active && (
        <div className="modal-overlay" onMouseDown={() => setActive(null)}>
          <div className="modal-card" onMouseDown={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="modal-logo">
                  {active.logoSrc ? (
                    <Image
                      src={active.logoSrc}
                      alt={`${active.company} logo`}
                      width={64}
                      height={64}
                      className="experience-logo-img"
                    />
                  ) : (
                    <span className="text-[18px]" aria-hidden>
                      {active.icon ?? "✦"}
                    </span>
                  )}
                </div>

                <div>
                  <div className="card-kicker mb-2">{active.location}</div>
                  <div className="text-xl font-semibold text-text-primary">
                    {active.company}
                  </div>
                  <div className="text-sm text-text-primary mt-1">
                    {active.roleLine}
                  </div>
                  <p className="text-sm text-text-secondary mt-3">
                    {active.short}
                  </p>
                </div>
              </div>

              <button
                className="icon-btn"
                onClick={() => setActive(null)}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-5">
              {active.highlights && active.highlights.length > 0 ? (
                <>
                  <div className="text-xs font-semibold text-text-primary mb-2">
                    Overview
                  </div>
                  <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                    {active.overview.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="text-xs font-semibold text-text-primary mt-5 mb-2">
                    Work Highlights
                  </div>
                  <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                    {active.highlights.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <div className="text-xs font-semibold text-text-primary mb-2">
                    Highlights
                  </div>
                  <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                    {active.overview.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
