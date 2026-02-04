// app/about/page.tsx
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { Globe2, Camera, Book, Dumbbell, Code2, X } from "lucide-react";

const WorldMap = dynamic(
  () => import("react-svg-worldmap").then((mod) => mod.default),
  { ssr: false }
);

const visitedCountryData = [
  { country: "US", value: 1 },
  { country: "CA", value: 1 },
  { country: "MX", value: 1 },
  { country: "CR", value: 1 },
  { country: "CO", value: 1 },
  { country: "BZ", value: 1 },
  { country: "ES", value: 1 },
  { country: "FR", value: 1 },
  { country: "PT", value: 1 },
  { country: "MC", value: 1 },
  { country: "NL", value: 1 },
  { country: "CH", value: 1 },
  { country: "GB", value: 1 },
  { country: "IE", value: 1 },
  { country: "IN", value: 1 },
  { country: "TH", value: 1 },
  { country: "KH", value: 1 },
  { country: "VN", value: 1 },
  { country: "MA", value: 1 },
  { country: "VA", value: 1 },
  { country: "AE", value: 1 },
  { country: "IT", value: 1 },
  { country: "TR", value: 1 },
  { country: "BE", value: 1 },
  { country: "LC", value: 1 },
  { country: "GI", value: 1 },
  { country: "PE", value: 1 },
];

export default function AboutPage() {
  const interests = [
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
  ];

  const [activeInterestId, setActiveInterestId] = useState<string | null>(null);
  const activeInterest = interests.find((i) => i.id === activeInterestId) || null;

  return (
    <>
      <PageHeader
        kicker="About"
        title="How I build and show up."
        subtitle="I like the messy middle — translating between operators, data, and leadership to ship decisions, not just slides."
      />

      {/* Snapshot cards */}
      <section className="section-container pb-12">
        <div className="top-grid">
          <div className="panel-clear h-full">
            <p className="panel-title mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-primary" /> Professional Snapshot
            </p>
            <ul className="text-sm md:text-base text-text-secondary space-y-2">
              <li>• Deals Transformation @ PwC (standalone, carve-outs, synergies)</li>
              <li>• Built internal tools + decision systems under deal timelines</li>
              <li>• Focus: deployment strategy, product thinking, data systems (Python, SQL)</li>
            </ul>
          </div>

          <div className="top-vert-divider" />

          <div className="panel-clear h-full">
            <p className="panel-title mb-2 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-brand-primary" /> Personal Snapshot
            </p>
            <ul className="text-sm md:text-base text-text-secondary space-y-2">
              <li>• NYC-based, originally Buffalo; always exploring new neighborhoods</li>
              <li>• Active traveler &amp; scuba diver (Nitrox certified)</li>
              <li>• Fitness: lifting, running, skiing, BJJ</li>
              <li>• Reading, photography, and learning new ideas</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How I work */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Book className="w-4 h-4 text-brand-primary" /> How I Work
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          The patterns I default to when I’m building with teams under pressure.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="panel-clear h-full">
            <p className="panel-title mb-2">Translate the messy middle</p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              I like turning unclear inputs into decision-ready outputs — workflows,
              dashboards, and artifacts people can actually use in live meetings.
            </p>
          </div>
          <div className="panel-clear h-full">
            <p className="panel-title mb-2">Ship, then iterate fast</p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              MVPs first, feedback loops always. I build for speed-to-answer while
              keeping numbers trustworthy and traceable.
            </p>
          </div>
          <div className="panel-clear h-full">
            <p className="panel-title mb-2">Operators first</p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              Systems win when operators trust them. I obsess over adoption, clarity,
              and the real constraints teams deal with.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Interests (mirror Overview "Outside of work") */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Book className="w-4 h-4 text-brand-primary" /> Interests
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Some other things about me.
        </p>

        {activeInterest && (
          <div className="interest-featured">
            <button
              type="button"
              className="icon-btn"
              aria-label="Collapse"
              onClick={() => setActiveInterestId(null)}
            >
              <X size={16} />
            </button>

            <div className="text-center mt-2">
              <div className="text-2xl">{activeInterest.emoji}</div>
              <div className="text-base font-semibold text-text-primary mt-2">
                {activeInterest.label}
              </div>
              <p className="text-sm text-text-secondary mt-2 max-w-xl mx-auto">
                {activeInterest.detail}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 justify-start">
          {interests.map((i) => (
            <button
              key={i.id}
              type="button"
              className={`interest-pill ${activeInterestId === i.id ? "interest-pill-active" : ""}`}
              onClick={() => setActiveInterestId(i.id)}
            >
              <span aria-hidden>{i.emoji}</span> {i.label}
            </button>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Languages */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Camera className="w-4 h-4 text-brand-primary" /> Languages
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          What I can operate in day-to-day.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "English · Native",
            "Spanish · Intermediate",
            "French · Beginner",
            "Russian · Learning",
          ].map((item) => (
            <span key={item} className="interest-pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Map */}
      <section className="section-container pb-24">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-brand-primary" /> Countries I&apos;ve Visited
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          A living map — more about perspective than checklists.
        </p>

        <div className="card-skeuo map-card">
          <div className="map-viewport">
            <WorldMap
              // keep this aligned to your single brand hue
              color="#2563eb"
              size="responsive"
              data={visitedCountryData}
              tooltipTextFunction={(context) => context.countryName}
            />
          </div>
        </div>
      </section>
    </>
  );
}
