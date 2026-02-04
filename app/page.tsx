// app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";
import { Linkedin, X } from "lucide-react";

type Experience = {
  id: string;
  company: string;
  logoSrc: string;
  roleLine: string;
  short: string;
  overview: string[];
  highlights?: string[];
};

type Deployment = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  bullets: string[];
};

type Education = {
  id: string;
  icon: string; // emoji
  school: string;
  degreeLine: string; // degree/focus/class/year
  highlightsLine: string; // black dot-separated highlights line
  detail: {
    overview: string[];
    coursework?: string[];
    languages?: string;
    software?: string;
  };
};

type Interest = {
  id: string;
  label: string;
  emoji: string;
  detail: string;
};

export default function Home() {
  const experiences: Experience[] = useMemo(
    () => [
      {
        id: "pwc",
        company: "PwC",
        logoSrc: "/companies/pwc_logo.png",
        roleLine: "Senior Associate · Deals Transformation · 2022–Now",
        short: "Led deal transformation across PE diligence and separation programs.",
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
        company: "Alvarez & Marsal",
        logoSrc: "/companies/AM_logo.png",
        roleLine: "Data Analyst · Disputes & Investigations · 2020–2021",
        short: "Forensic analytics and visualization for legal damages cases.",
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
        company: "Goldman Sachs",
        logoSrc: "/companies/GS_logo.png",
        roleLine: "Analyst · PWM & Operations · 2019",
        short: "Analytics, compliance, and reporting for PWM operations at scale.",
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
    ],
    []
  );

  const deployments = useMemo<Deployment[]>(
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
      },
      {
        id: "metrics-hub",
        icon: "📈",
        title: "Benchmarking & Performance Tool",
        summary: "Sector comps combining internal + market data for quick storytelling.",
        bullets: [
          "Unified disparate sources into a consistent metric dictionary.",
          "Built “tell me the story” views for partner conversations.",
          "Standardized inputs + outputs to improve speed-to-insight.",
        ],
      },
      {
        id: "reporting-hub",
        icon: "🧩",
        title: "Business Reporting / Metrics Hub",
        summary: "Reporting layer that makes risks + KPIs hard to ignore.",
        bullets: [
          "Translated messy operational reality into clean weekly reporting.",
          "Created rollups aligning operators and execs on the same numbers.",
          "Designed visuals for clarity under time pressure.",
        ],
      },
      {
        id: "aml",
        icon: "🕵️",
        title: "AML Pattern Analysis (Case Study)",
        summary: "SQL + Python triage of coordination, routes, and suspicious behavior.",
        bullets: [
          "Built lag, frequency, dyad, and network analyses to triage suspects.",
          "Produced decision-ready visuals + suspect short list for review.",
          "Focused on explainable signals over black-box scoring.",
        ],
      },
    ],
    []
  );

  const education = useMemo<Education[]>(
    () => [
      {
        id: "neu",
        icon: "🎓",
        school: "Northeastern University",
        degreeLine: "B.S. Industrial Engineering · Math + Econ minors · Class of 2020",
        highlightsLine: "3.9 GPA · Magna Cum Laude · Dean's List · Honors College",
        detail: {
          overview: [
            "Systems + optimization foundation with strong quantitative coursework.",
            "Graduated from the Honors College; built comfort translating real-world mess into structured models and decisions.",
          ],
          coursework: [
            "Math + statistics: Calculus 3, Differential Equations, Linear Algebra, Probability & Statistics.",
            "Economics: Macro Economics, Micro Economics, Engineering Economics.",
            "Engineering systems: Manufacturing Systems, Operations Research, Engineering Databases, Physics.",
          ],
          languages: "AMPL, OCTOPUZ, C++, SQL, Python, MATLAB 2017, Arduino",
          software: "AutoCAD 2018, SolidWorks 2018, Fusion 360, Microsoft Suite: Access, Excel, PowerPoint, Word",
        },
      },
      {
        id: "mit",
        icon: "🤖",
        school: "MIT xPRO",
        degreeLine: "AI / ML Bootcamp · Python-heavy · 2024–2025",
        highlightsLine: "Capstone: Malaria CNN · Model evaluation artifacts · End-to-end ML pipeline",
        detail: {
          overview: [
            "Hands-on data cleansing, feature engineering, and ML pipeline work.",
            "Built and evaluated models with clear artifacts (metrics + diagnostics) for non-technical stakeholders.",
          ],
          coursework: [
            "Model training + evaluation, feature engineering + preprocessing, validation strategies + error analysis.",
          ],
          languages: "Python",
          software: "Jupyter / Notebook workflows (local + cloud), Git / version control",
        },
      },
      {
        id: "hs",
        icon: "🏫",
        school: "East Aurora High School",
        degreeLine: "Regents Diploma with Honors · Class of 2017",
        highlightsLine: "98.5 GPA · 11 APs · Top 10 in Class · Top Math SAT score (class)",
        detail: {
          overview: [
            "Graduated with a Regents Diploma with Honors.",
            "Balanced rigorous coursework with leadership roles and competitive extracurriculars.",
            "Top math SAT score in my class.",
            "Leadership: Class VP, Student Council VP.",
          ],
          coursework: [
            "11 APs (incl. Calc AB/BC, Statistics, Chemistry, Economics, Government).",
          ],
        },
      },
    ],
    []
  );

  const interests: Interest[] = useMemo(
    () => [
      {
        id: "diver",
        label: "PADI Advanced Diver",
        emoji: "🤿",
        detail:
          "I’m happiest underwater. I like technical skill-building and calm problem solving when things get spicy.",
      },
      {
        id: "lifeguard",
        label: "Lifeguard / CPR",
        emoji: "🛟",
        detail:
          "Certified, trained, and still quietly judging people who run at the pool. Safety-first, always.",
      },
      {
        id: "bjj",
        label: "BJJ (white belt)",
        emoji: "🥋",
        detail:
          "Weekly humility practice. Learning to stay calm, get feedback, and keep showing up anyway.",
      },
      {
        id: "paragliding",
        label: "Paragliding (5 flights)",
        emoji: "🪂",
        detail:
          "Working toward certification. 5 flights recorded, 0 hero moments — I’m a process guy, not a stunt guy.",
      },
      {
        id: "wwoof",
        label: "WWOOF / sustainable farming",
        emoji: "🌱",
        detail:
          "Volunteered on a rural Italy farm when I was dead broke. Great character development (and sore back).",
      },
      {
        id: "runner",
        label: "Half marathon running",
        emoji: "🏃",
        detail:
          "I suffer for fun, on schedule. Good training for long deployments and hard problems.",
      },
      {
        id: "snow",
        label: "Ski + snowboard",
        emoji: "🎿",
        detail:
          "Cold weather + controlled chaos. Also where I do my best thinking (between runs).",
      },
      {
        id: "wac",
        label: "Williamsburg Athletic Club",
        emoji: "🏋️",
        detail:
          "Adult recess. Consistency > motivation — applies to training and building.",
      },
      {
        id: "travel",
        label: "New country every year",
        emoji: "🌍",
        detail:
          "Collecting perspective, not magnets. I like being the dumbest person in a new room (briefly).",
      },
      {
        id: "tech",
        label: "Technical tinkering",
        emoji: "🧠",
        detail:
          "Always learning: SQL, Python, data pipelines, and building stuff that’s actually usable.",
      },
    ],
    []
  );

  const [activeExperience, setActiveExperience] = useState<Experience | null>(null);
  const [activeDeployment, setActiveDeployment] = useState<Deployment | null>(null);
  const [activeEducation, setActiveEducation] = useState<Education | null>(null);

  const [activeInterestId, setActiveInterestId] = useState<string | null>(null);
  const activeInterest = interests.find((i) => i.id === activeInterestId) || null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveExperience(null);
        setActiveDeployment(null);
        setActiveEducation(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <PageHeader
        kicker="Overview"
        title="Arjuna Velayudam"
        subtitle="Engineer working to get out of Finance & into tech. Looking for on-the-ground, with-customers roles tackling important missions."
      />

      {/* Top section */}
      <Section>
        <div className="top-grid">
          <div className="panel-clear h-full flex flex-col">
            <p className="panel-title mb-2">Who I am</p>

            <p className="text-base md:text-[1.05rem] text-text-secondary leading-relaxed">
              I love working directly with clients from CFOs to analysts on the ground shipping systems — translating between operators,
              data, and leadership so teams can make clean decisions.
            </p>

            <div className="divider-soft my-5" />

            <div className="flex-1">
              <p className="panel-title mb-2">What I&apos;m looking for</p>
              <ul className="text-sm md:text-base text-text-secondary space-y-1">
                <li>• Build solutions alongside talented people</li>
                <li>• Work hand-in-hand with customers and operators</li>
                <li>• Build, deploy, iterate — real problems, real outcomes</li>
              </ul>
            </div>
          </div>

          <div className="top-vert-divider" />

          <div className="panel-clear h-full">
            <p className="panel-title mb-4">Snapshot</p>

            <div className="space-y-4">
              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>💼</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Current</div>
                  <div className="text-text-secondary">
                    Senior Associate · PwC Deals Transformation
                  </div>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>📍</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Location</div>
                  <div className="text-text-secondary">
                    New York City · originally Buffalo, NY
                  </div>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>📧</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Email</div>
                  <a
                    href="mailto:velayudamarjuna@gmail.com"
                    className="text-brand-primary underline underline-offset-2 hover:opacity-90"
                  >
                    velayudamarjuna@gmail.com
                  </a>
                </div>
              </div>

              <div className="snapshot-row">
                <div className="snapshot-icon">
                  <span aria-hidden>📞</span>
                </div>
                <div>
                  <div className="snapshot-label mb-1">Phone</div>
                  <a
                    href="tel:+17168034767"
                    className="text-brand-primary underline underline-offset-2 hover:opacity-90"
                  >
                    +1 (716) 803 - 4767
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
      </Section>

      <div className="section-divider" />

      {/* Experience */}
      <Section>
        <h2 className="section-title mb-2">Where I&apos;ve Worked</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          I&apos;ve been the “make it real” person: messy inputs → clean outputs → shipped workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((e) => (
            <button
              key={e.id}
              type="button"
              className="experience-card experience-card-centered"
              onClick={() => setActiveExperience(e)}
            >
              <div className="experience-logo-plain">
                <Image
                  src={e.logoSrc}
                  alt={`${e.company} logo`}
                  width={100}
                  height={100}
                  className="experience-logo-img"
                  priority
                />
              </div>

              <div className="experience-stack">
                <div className="experience-company">{e.company}</div>
                <div className="experience-role">{e.roleLine}</div>
                <p className="experience-short">{e.short}</p>
              </div>

              <div className="experience-cta">View Details</div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/experience" className="btn-muted">
            View all experience →
          </Link>
        </div>

        {activeExperience && (
          <div className="modal-overlay" onMouseDown={() => setActiveExperience(null)}>
            <div className="modal-card" onMouseDown={(ev) => ev.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="modal-logo">
                    <Image
                      src={activeExperience.logoSrc}
                      alt={`${activeExperience.company} logo`}
                      width={64}
                      height={64}
                      className="experience-logo-img"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-text-primary">
                      {activeExperience.company}
                    </div>
                    <div className="text-sm text-text-primary mt-1">
                      {activeExperience.roleLine}
                    </div>
                    <p className="text-sm text-text-secondary mt-3">
                      {activeExperience.short}
                    </p>
                  </div>
                </div>

                <button className="icon-btn" onClick={() => setActiveExperience(null)} aria-label="Close modal">
                  <X size={16} />
                </button>
              </div>

              <div className="mt-5">
                {activeExperience.highlights && activeExperience.highlights.length > 0 ? (
                  <>
                    <div className="text-xs font-semibold text-text-primary mb-2">Overview</div>
                    <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                      {activeExperience.overview.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="text-xs font-semibold text-text-primary mt-5 mb-2">Work Highlights</div>
                    <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                      {activeExperience.highlights.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-semibold text-text-primary mb-2">Highlights</div>
                    <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                      {activeExperience.overview.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/experience" className="btn-secondary" onClick={() => setActiveExperience(null)}>
                  Full experience →
                </Link>
              </div>
            </div>
          </div>
        )}
      </Section>

      <div className="section-divider" />

      {/* Featured Deployments */}
      <Section>
        <h2 className="section-title mb-2">Featured Deployments &amp; Product Work</h2>
        <p className="section-subtitle max-w-3xl mb-6">A few highlights. Click a card to open details.</p>

        <div className="hscroll-outer hscroll-outer-soft">
          <div className="hscroll hscroll-hidebar">
            {deployments.map((d) => (
              <button
                key={d.id}
                type="button"
                className="hscroll-card hscroll-card-centered"
                onClick={() => setActiveDeployment(d)}
              >
                <div className="hscroll-icon">{d.icon}</div>

                <div className="hscroll-stack">
                  <div className="hscroll-title">{d.title}</div>
                  <div className="hscroll-meta">{d.summary}</div>
                </div>

                <div className="hscroll-cta-row">
                  <span className="hscroll-cta">View Details</span>
                </div>
              </button>
            ))}

            <Link href="/deployments" className="hscroll-card hscroll-card-centered hscroll-viewall">
              <div className="hscroll-icon">→</div>
              <div className="hscroll-stack">
                <div className="hscroll-title">View all</div>
                <div className="hscroll-meta">See the full deployments &amp; product page.</div>
              </div>
              <div className="hscroll-cta-row">
                <span className="hscroll-cta">Go →</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/deployments" className="btn-muted">
            View all deployments →
          </Link>
        </div>

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
                  </div>
                </div>

                <button className="icon-btn" onClick={() => setActiveDeployment(null)} aria-label="Close modal">
                  <X size={16} />
                </button>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold text-text-primary mb-2">What it is / what I did</div>
                <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
                  {activeDeployment.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex justify-end">
                <Link href="/deployments" className="btn-secondary" onClick={() => setActiveDeployment(null)}>
                  View more →
                </Link>
              </div>
            </div>
          </div>
        )}
      </Section>

      <div className="section-divider" />

      {/* Education (updated to match experience cards) */}
      <Section>
        <h2 className="section-title mb-2">Education</h2>
        <p className="section-subtitle max-w-3xl mb-6">Formal training + the “I like learning hard things” habit.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((ed) => (
            <button
              key={ed.id}
              type="button"
              className="experience-card experience-card-centered"
              onClick={() => setActiveEducation(ed)}
            >
              <div className="experience-logo-plain text-[28px]">{ed.icon}</div>

              <div className="experience-stack">
                <div className="experience-company">{ed.school}</div>
                <div className="experience-role">{ed.degreeLine}</div>
                <div className="education-highlights">{ed.highlightsLine}</div>
              </div>

              <div className="experience-cta">View Details</div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/education" className="btn-muted">
            View education →
          </Link>
        </div>

        {activeEducation && (
          <div className="modal-overlay" onMouseDown={() => setActiveEducation(null)}>
            <div className="modal-card" onMouseDown={(ev) => ev.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="modal-logo text-[22px]">{activeEducation.icon}</div>
                  <div>
                    <div className="text-xl font-semibold text-text-primary">{activeEducation.school}</div>
                    <div className="text-sm text-text-primary mt-1">{activeEducation.degreeLine}</div>
                    <div className="text-sm text-text-secondary mt-2">{activeEducation.highlightsLine}</div>
                  </div>
                </div>

                <button className="icon-btn" onClick={() => setActiveEducation(null)} aria-label="Close modal">
                  <X size={16} />
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-xs font-semibold text-text-primary mb-2">Overview</div>
                  <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                    {activeEducation.detail.overview.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                {activeEducation.detail.coursework && activeEducation.detail.coursework.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-text-primary mb-2">Coursework</div>
                    <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                      {activeEducation.detail.coursework.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(activeEducation.detail.languages || activeEducation.detail.software) && (
                  <div>
                    <div className="text-xs font-semibold text-text-primary mb-2">
                      Programming Languages / Software
                    </div>
                    <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                      {activeEducation.detail.languages && (
                        <li>{activeEducation.detail.languages}</li>
                      )}
                      {activeEducation.detail.software && (
                        <li>{activeEducation.detail.software}</li>
                      )}
                    </ul>
                  </div>
                )}

              </div>

              <div className="mt-6 flex justify-end">
                <Link href="/education" className="btn-secondary" onClick={() => setActiveEducation(null)}>
                  Full education →
                </Link>
              </div>
            </div>
          </div>
        )}
      </Section>

      <div className="section-divider" />

      {/* Outside of work */}
      <Section>
        <h2 className="section-title mb-2">Outside of work</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Love taking on new hobbies &amp; skills — currently working on my next diving certification &amp; always down to talk about it.
        </p>

        <div className="flex flex-wrap gap-3 justify-start">
          {interests.map((i) => (
            <button
              key={i.id}
              type="button"
              className={`interest-pill ${activeInterestId === i.id ? "interest-pill-active" : ""}`}
              onClick={() => setActiveInterestId((prev) => (prev === i.id ? null : i.id))}
            >
              <span aria-hidden>{i.emoji}</span> {i.label}
            </button>
          ))}
        </div>

        {activeInterest && (
          <div className="interest-featured mt-6">
            <button type="button" className="icon-btn" aria-label="Collapse" onClick={() => setActiveInterestId(null)}>
              <X size={16} />
            </button>

            <div className="text-center mt-2">
              <div className="text-2xl">{activeInterest.emoji}</div>
              <div className="text-base font-semibold text-text-primary mt-2">{activeInterest.label}</div>
              <p className="text-sm text-text-secondary mt-2 max-w-xl mx-auto">{activeInterest.detail}</p>
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
