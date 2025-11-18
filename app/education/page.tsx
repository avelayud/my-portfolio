// app/education/page.tsx
"use client";

import { useState } from "react";

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
  // … your EDU entries unchanged …
  // (keep all the MIT / NEU / Lyon / EAHS objects as-is)
  // I’m omitting them here for brevity, but don’t delete them in your file.
  // -----------------------------------------
  // paste your existing EDUCATION array here
  // -----------------------------------------
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
    <>
      {/* HERO: vertical list, tall section */}
      <section id="top" className="edu-hero-section">
        <div className="relative">
          {/* Faint blue accent bar */}
          <div className="hidden md:block absolute -left-8 top-0 h-full w-1 rounded-full bg-brand-secondary/25" />

          <div className="relative">
            {/* Tagline */}
            <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary mb-4">
              Education
            </p>

            {/* Heading + line */}
            <div className="mb-2">
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
              {EDUCATION.map((edu) => {
                const isActive = edu.id === activeId;

                return (
                  <button
                    key={edu.id}
                    type="button"
                    onClick={() => handleSelect(edu.id)}
                    className={`hero-list-item ${
                      isActive ? "hero-list-item-active" : ""
                    }`}
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
                );
              })}
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
      <section className="section-container pb-24 space-y-10">
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
                            ...edu.activities.filter(
                              (a) => a.title === activeTitle
                            ),
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
                            <span className="font-semibold text-text-primary">
                              {act.title}
                            </span>

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
    </>
  );
}
