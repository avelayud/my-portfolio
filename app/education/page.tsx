// app/education/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";
import { ChevronDown, ChevronUp, GraduationCap, X } from "lucide-react";

type EduId = "mit" | "neu" | "lyon" | "eahs";

type Activity = {
  title: string;
  desc: string;
  category: string;
};

type EduEntry = {
  id: EduId;
  icon: string;
  name: string;
  degreeLine?: string;
  highlightsLine?: string;
  gradYear?: string;
  tag: string;
  location: string;
  duration: string;
  shortDesc: string;
  detail: {
    overview: string[];
    coursework?: string[];
    languages?: string;
    software?: string;
  };
  activities: Activity[];
};

const EDUCATION: EduEntry[] = [
  {
    id: "mit",
    icon: "🤖",
    name: "MIT Bootcamp — Python for AI & Data",
    degreeLine: "AI / ML Bootcamp · Python-heavy · 2024–2025",
    highlightsLine:
      "Capstone: Malaria CNN · Model evaluation artifacts · End-to-end ML pipeline",
    gradYear: "2024–2025",
    tag: "Continuing Education",
    location: "Remote / Global",
    duration: "16-week program",
    shortDesc:
      "Focused on using Python to build AI-powered and data-driven applications.",
    detail: {
      overview: [
        "Hands-on data cleansing, feature engineering, and ML pipeline work with a deployment mindset.",
        "Built and evaluated models with clear artifacts (metrics + diagnostics) that make results legible to non-technical stakeholders.",
        "Capstone centered on a malaria CNN, with an end-to-end workflow from preprocessing to evaluation.",
      ],
      coursework: [
        "Model training + evaluation, feature engineering + preprocessing, validation strategies + error analysis.",
      ],
      languages: "Python",
      software: "Jupyter / Notebook workflows (local + cloud), Git / version control",
    },
    activities: [
      {
        title: "ML Pipelines",
        desc: "End-to-end workflows from raw data through feature engineering, training, and evaluation across multiple datasets.",
        category: "Data & Modeling",
      },
      {
        title: "Computer Vision",
        desc: "Applied CNNs to image datasets, experimenting with architectures, augmentation, and evaluation metrics.",
        category: "AI / CV",
      },
      {
        title: "EDA & Statistics",
        desc: "Exploratory analysis and statistical testing to stress-test assumptions before committing to models.",
        category: "Analytics",
      },
      {
        title: "Deployment Mindset",
        desc: "Framed projects around operators and decision points instead of just model accuracy or leaderboard scores.",
        category: "Deployment",
      },
    ],
  },
  {
    id: "neu",
    icon: "🎓",
    name: "Northeastern University — B.S. Industrial Engineering",
    degreeLine: "B.S. Industrial Engineering · Math + Econ minors · Class of 2022",
    highlightsLine: "3.9 GPA · Magna Cum Laude · Dean's List · Honors College",
    gradYear: "Class of 2022",
    tag: "Undergraduate",
    location: "Boston, MA",
    duration: "5-year co-op program",
    shortDesc:
      "Industrial Engineering with Economics & Math minors, built around three 6-month co-op rotations.",
    detail: {
      overview: [
        "Systems + optimization foundation with strong quantitative coursework across math, stats, and engineering systems.",
        "Honors College graduate; learned to translate real-world ambiguity into structured models and decisions.",
        "Program built around three full-time co-op rotations, tying classroom theory to live operational constraints.",
      ],
      coursework: [
        "Math + statistics: Calculus 3, Differential Equations, Linear Algebra, Probability & Statistics.",
        "Economics: Macro Economics, Micro Economics, Engineering Economics.",
        "Engineering systems: Manufacturing Systems, Operations Research, Engineering Databases, Physics.",
      ],
      languages: "AMPL, OCTOPUZ, C++, SQL, Python, MATLAB 2017, Arduino",
      software:
        "AutoCAD 2018, SolidWorks 2018, Fusion 360, Microsoft Suite: Access, Excel, PowerPoint, Word",
    },
    activities: [
      {
        title: "Co-op Rotations",
        desc: "Three 6-month full-time roles in NYC, SF, and Mexico, working inside live businesses rather than just classrooms.",
        category: "Experience",
      },
      {
        title: "Chemistry Lab Research",
        desc: "Assisted in developing catalysts to convert methane into methanol, targeting greenhouse gas reduction.",
        category: "Research",
      },
      {
        title: "Engineering Capstone",
        desc: "Applied industrial engineering methods to a live system, combining data, process mapping, and stakeholder interviews.",
        category: "Capstone",
      },
      {
        title: "Kappa Sigma",
        desc: "Took on leadership and operations responsibilities, learning how to steer a group of peers toward shared goals.",
        category: "Leadership",
      },
      {
        title: "Robotics Club",
        desc: "Worked with hardware and software in small teams, building and iterating on robotics projects.",
        category: "Technical",
      },
      {
        title: "Fenway Academic Mentoring",
        desc: "Tutored local students, learning to explain technical ideas clearly and meet people where they are.",
        category: "Community",
      },
    ],
  },
  {
    id: "lyon",
    icon: "🌍",
    name: "Lyon Catholic University (Université Catholique de Lyon)",
    gradYear: "2019",
    tag: "Study Abroad",
    location: "Lyon, France",
    duration: "Semester abroad",
    shortDesc:
      "Study abroad term through Northeastern combining coursework with immersion in French language and culture.",
    detail: {
      overview: [
        "Study abroad term combining coursework with immersion in French language and culture.",
        "Experienced how institutions and teams operate outside the U.S., navigating academics and daily life in French.",
        "Built comfort collaborating across cultural expectations and communication styles.",
      ],
    },
    activities: [
      {
        title: "French Language",
        desc: "Built comfort navigating day-to-day life, coursework, and relationships in French.",
        category: "Language",
      },
      {
        title: "Cross-Cultural Work",
        desc: "Saw how expectations, timelines, and communication styles differ across cultures, and adjusted accordingly.",
        category: "Context",
      },
    ],
  },
  {
    id: "eahs",
    icon: "📣",
    name: "East Aurora High School",
    degreeLine: "Regents Diploma with Honors · Class of 2017",
    highlightsLine:
      "98.5 GPA · 11 APs · Top 10 in Class · Top Math SAT score (class)",
    tag: "Foundation",
    location: "East Aurora, NY",
    duration: "Class of 2017",
    shortDesc:
      "Leadership, academics, sports, and music that set the base for how I show up on teams.",
    detail: {
      overview: [
        "Balanced student leadership roles, varsity sports, music, and a heavy AP course load.",
        "Built early habits for responsibility, follow-through, and showing up for teams.",
        "Focused on rigorous academics alongside consistent extracurricular commitment.",
      ],
      coursework: [
        "11 APs across math, science, economics, history, Spanish, and composition.",
      ],
    },
    activities: [
      {
        title: "Student Council President",
        desc: "Led student government, representing peers and coordinating with administrators on events and initiatives.",
        category: "Leadership",
      },
      {
        title: "Key Club President",
        desc: "Organized community service efforts and volunteer projects, focusing on consistency and reliability.",
        category: "Leadership",
      },
      {
        title: "Varsity Sports",
        desc: "Played Varsity Soccer and Track, learning how to prepare, compete, and contribute inside a team structure.",
        category: "Sports",
      },
      {
        title: "Drummers Unlimited",
        desc: "Performed as a drummer, reinforcing discipline, timing, and comfort performing in front of people.",
        category: "Music",
      },
      {
        title: "AP Coursework",
        desc: "Took 10 AP classes across math, science, economics, history, Spanish, and composition, building a broad academic base.",
        category: "Academics",
      },
    ],
  },
];

export default function EducationPage() {
  const activityIcons: Record<string, string> = {
    "Data & Modeling": "🧮",
    "AI / CV": "🤖",
    Analytics: "📊",
    Deployment: "🚀",
    Experience: "🧭",
    Research: "🧪",
    Capstone: "🧩",
    Leadership: "🧱",
    Technical: "🛠️",
    Community: "🤝",
    Language: "🗣️",
    Context: "🧭",
    Sports: "🏅",
    Music: "🥁",
    Academics: "📚",
  };
  const [activeId, setActiveId] = useState<EduId | null>(null);
  const [activeActivityByEdu, setActiveActivityByEdu] = useState<
    Partial<Record<EduId, string | null>>
  >({});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSelect = (id: EduId) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id;
      if (prev === id) {
        setActiveActivityByEdu((curr) => ({ ...curr, [id]: null }));
      }
      return next;
    });
  };

  const handlePillClick = (eduId: EduId, title: string) => {
    setActiveActivityByEdu((prev) => {
      const current = prev[eduId] ?? null;
      return { ...prev, [eduId]: current === title ? null : title };
    });
  };

  return (
    <>
      <PageHeader
        kicker="Education"
        title="Global, applied, and still ongoing."
        subtitle="A path through Boston, Lyon, New York, San Francisco, and Mexico — mixing engineering, data, and real work with operators."
      />

      <Section>
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-4 w-4 text-brand-primary" />
          <h2 className="section-title mb-0">Education &amp; Training</h2>
        </div>
        <p className="section-subtitle max-w-3xl mb-6">
          Each program added tools for thinking, building, and shipping work that
          holds up under real-world constraints.
        </p>

        <div className="grid gap-6">
          {EDUCATION.map((edu) => {
            const isActive = edu.id === activeId;
            const activeTitle = activeActivityByEdu[edu.id] ?? null;
            const activeActivity = activeTitle
              ? edu.activities.find((a) => a.title === activeTitle) ?? null
              : null;

            return (
            <article
              key={edu.id}
              className={`experience-card education-card-wide ${
                isActive ? "education-card-expanded" : ""
              }`}
              onClick={() => handleSelect(edu.id)}
              aria-expanded={isActive}
              id={edu.id}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleSelect(edu.id);
                }
              }}
            >
              <div className="education-card-icon" aria-hidden>
                {edu.icon}
              </div>

              <div className="education-card-body">
                <div>
                  <div className="card-kicker">{edu.tag}</div>
                  <div className="education-card-title">{edu.name}</div>
                </div>
                <div className="education-card-meta">
                  {edu.duration} · {edu.location}
                  {edu.gradYear ? ` · ${edu.gradYear}` : ""}
                </div>
                {isActive && edu.highlightsLine ? (
                  <div className="education-highlights">{edu.highlightsLine}</div>
                ) : null}
                {!isActive && <p className="education-card-short">{edu.shortDesc}</p>}

                {isActive && (
                  <>
                    <div className="mt-5 space-y-5">
                      <div>
                        <div className="text-xs font-semibold text-text-primary mb-2">Overview</div>
                        <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                          {edu.detail.overview.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>

                      {edu.detail.coursework && edu.detail.coursework.length > 0 && (
                        <div>
                          <div className="text-xs font-semibold text-text-primary mb-2">Coursework</div>
                          <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                            {edu.detail.coursework.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {(edu.detail.languages || edu.detail.software) && (
                        <div>
                          <div className="text-xs font-semibold text-text-primary mb-2">
                            Programming Languages / Software
                          </div>
                          <ul className="text-sm text-text-secondary space-y-1 list-disc list-outside pl-5">
                            {edu.detail.languages && <li>{edu.detail.languages}</li>}
                            {edu.detail.software && <li>{edu.detail.software}</li>}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="text-xs font-semibold text-text-primary mt-6 mb-2">
                      Activities
                    </div>
                    <div
                      className="flex flex-wrap gap-3 justify-start"
                      aria-label="Focus areas"
                    >
                      {edu.activities.map((act) => (
                        <button
                          key={act.title}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePillClick(edu.id, act.title);
                          }}
                          className={`interest-pill ${
                            activeTitle === act.title ? "interest-pill-active" : ""
                          }`}
                        >
                          <span aria-hidden>{activityIcons[act.category] ?? "•"}</span>
                          {act.title}
                        </button>
                      ))}
                    </div>

                    {activeActivity && (
                      <div className="interest-featured education-activity-featured mt-6">
                        <button
                          type="button"
                          className="icon-btn"
                          aria-label="Collapse"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePillClick(edu.id, activeActivity.title);
                          }}
                        >
                          <X size={16} />
                        </button>

                        <div className="text-left mt-2">
                          <div className="flex items-center gap-2 text-base font-semibold text-text-primary mt-2">
                            <span aria-hidden>
                              {activityIcons[activeActivity.category] ?? "•"}
                            </span>
                            {activeActivity.title}
                          </div>
                          <p className="text-sm text-text-secondary mt-2 max-w-xl">
                            {activeActivity.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

              </div>

              <div className="education-card-chevron" aria-hidden>
                {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

            </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
