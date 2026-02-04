// app/education/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import { GraduationCap } from "lucide-react";

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
  tag: string;
  location: string;
  duration: string;
  shortDesc: string;
  longDesc: string;
  activities: Activity[];
};

const EDUCATION: EduEntry[] = [
  {
    id: "mit",
    icon: "🤖",
    name: "MIT Bootcamp — Python for AI & Data",
    tag: "Continuing Education",
    location: "Remote / Global",
    duration: "16-week program",
    shortDesc:
      "Focused on using Python to build AI-powered and data-driven applications.",
    longDesc:
      "Built end-to-end ML pipelines and analytics workflows using Python, from EDA and feature engineering through model training and evaluation, with a focus on computer vision and deployment-minded use cases.",
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
    tag: "Undergraduate",
    location: "Boston, MA",
    duration: "5-year co-op program",
    shortDesc:
      "Industrial Engineering with Economics & Math minors, built around three 6-month co-op rotations.",
    longDesc:
      "Combined engineering fundamentals with real-world rotations in New York, San Francisco, and Mexico, tying data and process design to how organizations actually operate under constraints.",
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
    tag: "Study Abroad",
    location: "Lyon, France",
    duration: "Semester abroad",
    shortDesc:
      "Study abroad term through Northeastern combining coursework with immersion in French language and culture.",
    longDesc:
      "Spent a term in Lyon, experiencing how institutions and teams operate outside the U.S., and learning to navigate academics and daily life in French.",
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
    tag: "Foundation",
    location: "East Aurora, NY",
    duration: "4 years",
    shortDesc:
      "Leadership, academics, sports, and music that set the base for how I show up on teams.",
    longDesc:
      "Balanced student leadership roles, varsity sports, music, and a heavy AP course load, building early habits for responsibility and follow-through.",
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

      <section className="section-container pb-24">
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
            const otherActivities = activeTitle
              ? edu.activities.filter((a) => a.title !== activeTitle)
              : edu.activities;

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
                <div className="card-kicker">{edu.tag}</div>
                <div className="education-card-title">{edu.name}</div>
                <div className="education-card-meta">
                  {edu.duration} · {edu.location}
                </div>
                <p className="education-card-short">{edu.shortDesc}</p>

                {isActive && (
                  <>
                    <p className="education-card-long">{edu.longDesc}</p>

                    <div className="education-pill-stack" aria-label="Focus areas">
                      {activeActivity && (
                        <div className="education-pill-row education-pill-row-expanded">
                          <button
                            key={activeActivity.title}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePillClick(edu.id, activeActivity.title);
                            }}
                            className="education-pill education-pill-active education-pill-expanded"
                          >
                            <span className="education-pill-title">
                              {activeActivity.title}
                            </span>
                            <p className="education-pill-desc">
                              {activeActivity.desc}
                            </p>
                          </button>
                        </div>
                      )}

                      <div className="education-pill-row education-pill-row-secondary">
                        {otherActivities.map((act) => (
                          <button
                            key={act.title}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePillClick(edu.id, act.title);
                            }}
                            className="education-pill"
                          >
                            <span className="education-pill-title">
                              {act.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div
                  className={`education-cta-row ${
                    isActive ? "education-cta-row-expanded" : ""
                  }`}
                >
                  <div className="experience-cta">
                    {isActive ? "Collapse details ←" : "View details →"}
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
