"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type EduId = "mit" | "neu" | "lyon" | "eahs";

type Activity = {
  title: string;
  desc: string;
  category: string;
};

type EduEntry = {
  id: EduId;
  name: string;
  tag: string;
  location: string;
  duration: string;
  shortDesc: string;
  longDesc: string;
  cardAccentClass: string;
  pillAccentClass: string;
  activities: Activity[];
};

const EDUCATION: EduEntry[] = [
  {
    id: "mit",
    name: "MIT Bootcamp — Python for AI & Data",
    tag: "Continuing Education",
    location: "Remote / Global",
    duration: "16-week program",
    shortDesc:
      "Focused on using Python to build AI-powered and data-driven applications.",
    longDesc:
      "Built end-to-end ML pipelines and analytics workflows using Python, from EDA and feature engineering through model training and evaluation, with a focus on computer vision and deployment-minded use cases.",
    cardAccentClass: "edu-card-mit",
    pillAccentClass: "edu-pill-mit",
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
    name: "Northeastern University — B.S. Industrial Engineering",
    tag: "Undergraduate",
    location: "Boston, MA",
    duration: "5-year co-op program",
    shortDesc:
      "Industrial Engineering with Economics & Math minors, built around three 6-month co-op rotations.",
    longDesc:
      "Combined engineering fundamentals with real-world rotations in New York, San Francisco, and Mexico, tying data and process design to how organizations actually operate under constraints.",
    cardAccentClass: "edu-card-neu",
    pillAccentClass: "edu-pill-neu",
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
    name: "Lyon Catholic University (Université Catholique de Lyon)",
    tag: "Study Abroad",
    location: "Lyon, France",
    duration: "Semester abroad",
    shortDesc:
      "Study abroad term through Northeastern combining coursework with immersion in French language and culture.",
    longDesc:
      "Spent a term in Lyon, experiencing how institutions and teams operate outside the U.S., and learning to navigate academics and daily life in French.",
    cardAccentClass: "edu-card-lyon",
    pillAccentClass: "edu-pill-lyon",
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
    name: "East Aurora High School",
    tag: "Foundation",
    location: "East Aurora, NY",
    duration: "4 years",
    shortDesc:
      "Leadership, academics, sports, and music that set the base for how I show up on teams.",
    longDesc:
      "Balanced student leadership roles, varsity sports, music, and a heavy AP course load, building early habits for responsibility and follow-through.",
    cardAccentClass: "edu-card-eahs",
    pillAccentClass: "edu-pill-eahs",
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

  const handlePillClick = (eduId: EduId, title: string) => {
    setActiveActivityByEdu((prev) => {
      const current = prev[eduId] ?? null;
      return {
        ...prev,
        [eduId]: current === title ? null : title,
      };
    });
  };

  const handleSelect = (id: EduId) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id;

      // Only scroll when opening a card
      if (next === id) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      return next;
    });
  };

  return (
    <main className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 md:ml-64 ml-0 pt-14 md:pt-0">
        {/* HERO: vertical list */}
        <section id="top" className="section-container pt-20 pb-8">
          <div className="relative">
            {/* Faint blue accent bar */}
            <div className="hidden md:block absolute -left-8 top-0 h-full w-1 rounded-full bg-brand-secondary/25" />

            <div className="relative">
              {/* Tagline */}
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary mb-4">
                Education
              </p>

              {/* Heading + line */}
              <div className="mb-4">
                <h1 className="text-4xl md:text-[2.75rem] font-bold text-text-primary mb-2 leading-tight">
                  Global, applied, and still ongoing.
                </h1>
                <p className="text-sm md:text-base text-text-secondary max-w-xl">
                  A path through Boston, Lyon, New York, San Francisco, and
                  Mexico — mixing engineering, data, and real work with operators.
                </p>
                <div className="h-1 w-24 bg-brand-accent rounded-full mt-4" />
              </div>

              {/* Hero vertical list */}
              <div className="hero-list">
                {EDUCATION.map((edu) => (
                  <button
                    key={edu.id}
                    type="button"
                    onClick={() => handleSelect(edu.id)}
                    className="hero-list-item text-left"
                  >
                    <div className="snapshot-icon">
                      {edu.id === "mit"
                        ? "🤖"
                        : edu.id === "neu"
                        ? "🎓"
                        : edu.id === "lyon"
                        ? "🌍"
                        : "📣"}
                    </div>
                    <div>
                      <div className="hero-list-text-main">{edu.name}</div>
                      <div className="hero-list-text-meta">
                        {edu.duration} · {edu.location}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS HEADER */}
        <section className="section-container pb-4">
          <h2 className="section-title">Details &amp; Activities</h2>
          <div className="w-full h-px bg-divider" />
        </section>

        {/* DETAIL CARDS */}
        <section className="section-container pb-24 space-y-8">
          {EDUCATION.map((edu) => {
            const isActive = edu.id === activeId;

            return (
              <article
                key={edu.id}
                id={edu.id}
                className={`edu-card ${edu.cardAccentClass} ${
                  isActive ? "edu-card-active" : "edu-card-inactive"
                } scroll-mt-28`}
                onClick={() => handleSelect(edu.id)}
              >
                <header className="edu-card-header">
                  <div>
                    <h3 className="edu-card-title">{edu.name}</h3>
                    <p className="edu-card-meta">
                      {edu.duration} · {edu.location}
                    </p>
                  </div>
                  <span className="edu-card-tag">
                    {edu.tag}
                    {isActive ? " · Selected" : ""}
                  </span>
                </header>

                <p className="edu-card-short">{edu.shortDesc}</p>

                {isActive && (
                  <>
                    <p className="edu-card-long">{edu.longDesc}</p>

                    {/* Activity pills */}
                    <div className="edu-pill-row">
                      {(() => {
                        const activeTitle = activeActivityByEdu[edu.id] ?? null;

                        const activitiesForCard = activeTitle
                          ? [
                              // active first
                              ...edu.activities.filter(
                                (a) => a.title === activeTitle
                              ),
                              // others after
                              ...edu.activities.filter(
                                (a) => a.title !== activeTitle
                              ),
                            ]
                          : edu.activities;

                        return activitiesForCard.map((act) => {
                          const isActivityActive =
                            activeActivityByEdu[edu.id] === act.title;

                          return (
                            <button
                              key={act.title}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePillClick(edu.id, act.title);
                              }}
                              className={`edu-pill ${edu.pillAccentClass} ${
                                isActivityActive ? "edu-pill-active" : ""
                              }`}
                            >
                              {/* Always show title */}
                              <span className="font-semibold text-text-primary">
                                {act.title}
                              </span>

                              {/* Only show tag + description when active */}
                              {isActivityActive && (
                                <>
                                  <span className="edu-pill-badge mt-1">
                                    {act.category}
                                  </span>
                                  <p className="text-[11px] text-text-secondary mt-1">
                                    {act.desc}
                                  </p>
                                </>
                              )}
                            </button>
                          );
                        });
                      })()}
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
