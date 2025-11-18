"use client"; // keep if you're on Next.js App Router; safe to leave in either case

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type EduId = "mit" | "neu" | "lyon" | "eahs";

export default function EducationPage() {
  const [activeId, setActiveId] = useState<EduId>("neu");

  const handleSelect = (id: EduId) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-background flex">
        <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 ml-0 pt-14 md:pt-0">
        {/* HERO: simple header + list */}
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

              {/* Hero list of major education items */}
              <div className="hero-list">
                <button
                  type="button"
                  onClick={() => handleSelect("mit")}
                  className="hero-list-item text-left"
                >
                  <div className="snapshot-icon">🤖</div>
                  <div>
                    <div className="hero-list-text-main">
                      MIT Bootcamp
                    </div>
                    <div className="hero-list-text-meta">
                      Python for AI &amp; Data · Remote / Global
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect("neu")}
                  className="hero-list-item text-left"
                >
                  <div className="snapshot-icon">🎓</div>
                  <div>
                    <div className="hero-list-text-main">
                      Northeastern University
                    </div>
                    <div className="hero-list-text-meta">
                      Industrial Engineering · Boston, MA
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect("lyon")}
                  className="hero-list-item text-left"
                >
                  <div className="snapshot-icon">🌍</div>
                  <div>
                    <div className="hero-list-text-main">
                      Lyon Catholic University
                    </div>
                    <div className="hero-list-text-meta">
                      Study Abroad · Lyon, France
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelect("eahs")}
                  className="hero-list-item text-left"
                >
                  <div className="snapshot-icon">📣</div>
                  <div>
                    <div className="hero-list-text-main">
                      East Aurora High School
                    </div>
                    <div className="hero-list-text-meta">
                      Leadership &amp; AP Track · East Aurora, NY
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS HEADER */}
        <section className="section-container pb-4">
          <h2 className="section-title">Details &amp; Activities</h2>
          <div className="w-full h-px bg-divider" />
        </section>

        {/* DETAIL SECTIONS */}
        <section className="section-container pb-24 space-y-8">
          {/* MIT */}
          <div
            id="mit"
            className={`edu-expand scroll-mt-28 ${
              activeId === "mit" ? "" : "opacity-80"
            }`}
          >
            <div className="edu-expand-header">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1 flex items-center gap-2">
                  MIT Bootcamp — Python for AI &amp; Data
                  {activeId === "mit" && (
                    <span className="text-[10px] text-brand-primary uppercase tracking-wide">
                      Selected
                    </span>
                  )}
                </h3>
                <p className="text-xs text-text-secondary">
                  Remote / Global · 16-week continuing education program
                </p>
              </div>
              <span className="edu-expand-tag">
                Click cards below to see more
              </span>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              Focused on using Python to build AI-powered and data-driven
              applications, from exploratory analysis to full machine learning
              workflows.
            </p>

            <div className="edu-subgrid">
              <div className="edu-subcard">
                <div className="edu-subcard-title">ML Pipelines</div>
                <div className="edu-subcard-body">
                  Built end-to-end pipelines from raw data through feature
                  engineering, training, and evaluation for multiple datasets.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Computer Vision</div>
                <div className="edu-subcard-body">
                  Applied CNNs to image data, experimenting with architectures,
                  augmentation, and evaluation metrics.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">EDA &amp; Statistics</div>
                <div className="edu-subcard-body">
                  Performed exploratory analysis and statistical tests to stress
                  test assumptions before modeling.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Deployment Mindset</div>
                <div className="edu-subcard-body">
                  Framed work around real operators and decision points, not
                  just model accuracy.
                </div>
              </div>
            </div>
          </div>

          {/* Northeastern */}
          <div
            id="neu"
            className={`edu-expand scroll-mt-28 ${
              activeId === "neu" ? "" : "opacity-80"
            }`}
          >
            <div className="edu-expand-header">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1 flex items-center gap-2">
                  Northeastern University — B.S. Industrial Engineering
                  {activeId === "neu" && (
                    <span className="text-[10px] text-brand-primary uppercase tracking-wide">
                      Selected
                    </span>
                  )}
                </h3>
                <p className="text-xs text-text-secondary">
                  Boston, MA · Minors in Economics &amp; Mathematics · 5-year co-op program
                </p>
              </div>
              <span className="edu-expand-tag">
                Click activity tiles to read more
              </span>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              A five-year program combining engineering fundamentals with three
              six-month full-time co-op roles across New York, San Francisco,
              and Mexico.
            </p>

            <div className="edu-subgrid">
              <div className="edu-subcard">
                <div className="edu-subcard-title">Co-op Rotations</div>
                <div className="edu-subcard-body">
                  Three 6-month co-ops in NYC, SF, and Mexico, working inside
                  live businesses instead of only in the classroom.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Chemistry Lab Research</div>
                <div className="edu-subcard-body">
                  Assisted in developing catalysts to convert methane to methanol,
                  with the goal of reducing greenhouse gas emissions.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Engineering Capstone</div>
                <div className="edu-subcard-body">
                  Applied industrial engineering methods to a real system,
                  combining data, process mapping, and stakeholder interviews.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Kappa Sigma</div>
                <div className="edu-subcard-body">
                  Took on leadership and operations responsibilities, learning how
                  to move a group of peers toward shared goals.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Robotics Club</div>
                <div className="edu-subcard-body">
                  Worked with hardware and software in small teams, building and
                  iterating on robotics projects.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Fenway Academic Mentoring</div>
                <div className="edu-subcard-body">
                  Tutored local students, learning how to explain technical
                  ideas clearly and meet people where they are.
                </div>
              </div>
            </div>
          </div>

          {/* Lyon */}
          <div
            id="lyon"
            className={`edu-expand scroll-mt-28 ${
              activeId === "lyon" ? "" : "opacity-80"
            }`}
          >
            <div className="edu-expand-header">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1 flex items-center gap-2">
                  Lyon Catholic University (Université Catholique de Lyon)
                  {activeId === "lyon" && (
                    <span className="text-[10px] text-brand-primary uppercase tracking-wide">
                      Selected
                    </span>
                  )}
                </h3>
                <p className="text-xs text-text-secondary">
                  Lyon, France · Study abroad through Northeastern
                </p>
              </div>
              <span className="edu-expand-tag">
                Global context &amp; language immersion
              </span>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              Combined coursework with day-to-day immersion in French language,
              culture, and operating in a new environment.
            </p>

            <div className="edu-subgrid">
              <div className="edu-subcard">
                <div className="edu-subcard-title">French Language</div>
                <div className="edu-subcard-body">
                  Built comfort navigating daily life, coursework, and
                  relationships in French.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Cross-Cultural Work</div>
                <div className="edu-subcard-body">
                  Experienced how teams and institutions operate differently
                  outside the U.S., adjusting communication and expectations.
                </div>
              </div>
            </div>
          </div>

          {/* East Aurora HS */}
          <div
            id="eahs"
            className={`edu-expand scroll-mt-28 ${
              activeId === "eahs" ? "" : "opacity-80"
            }`}
          >
            <div className="edu-expand-header">
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1 flex items-center gap-2">
                  East Aurora High School
                  {activeId === "eahs" && (
                    <span className="text-[10px] text-brand-primary uppercase tracking-wide">
                      Selected
                    </span>
                  )}
                </h3>
                <p className="text-xs text-text-secondary">
                  East Aurora, NY · Leadership, academics, and music foundation
                </p>
              </div>
              <span className="edu-expand-tag">
                Early leadership &amp; AP foundation
              </span>
            </div>

            <p className="text-sm text-text-secondary mb-3">
              Early mix of leadership, academics, sports, and music that shaped
              how I show up on teams and handle responsibility.
            </p>

            <div className="edu-subgrid">
              <div className="edu-subcard">
                <div className="edu-subcard-title">Student Council President</div>
                <div className="edu-subcard-body">
                  Led student government, representing peers and coordinating
                  with administrators on events and initiatives.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Key Club President</div>
                <div className="edu-subcard-body">
                  Organized community service efforts and volunteer projects
                  with a focus on consistency and follow-through.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Varsity Sports</div>
                <div className="edu-subcard-body">
                  Played Varsity Soccer and Track, learning how to compete,
                  prepare, and work within a team structure.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">Drummers Unlimited</div>
                <div className="edu-subcard-body">
                  Performed as a drummer, reinforcing rhythm, practice, and
                  performing in front of people.
                </div>
              </div>
              <div className="edu-subcard">
                <div className="edu-subcard-title">AP Coursework</div>
                <div className="edu-subcard-body">
                  10 AP classes across math, science, economics, history,
                  Spanish, and composition, building a broad academic base.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
