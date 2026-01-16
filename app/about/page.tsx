// app/about/page.tsx
"use client";

import dynamic from "next/dynamic";
import PageHeader from "@/app/components/PageHeader";
import { Globe2, Camera, Book, Dumbbell, Code2 } from "lucide-react";

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
  return (
    <>
      <PageHeader
        kicker="About"
        title="A builder at heart."
        subtitle="I gravitate toward hard problems — understanding systems end-to-end and building solutions that help people. I like the intersection of strategy, technology, and execution."
      />

      {/* Snapshot cards */}
      <section className="section-container pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-skeuo">
            <h2 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-primary" /> Professional Snapshot
            </h2>
            <ul className="text-xs text-text-secondary space-y-2">
              <li>• M&amp;A &amp; Transformation @ PwC (Standalone, carve-outs, synergies)</li>
              <li>• Building toward Product / Deployment Strategy roles</li>
              <li>• Technical focus: Python, SQL, DS/ML, systems thinking</li>
            </ul>
          </div>

          <div className="card-skeuo">
            <h2 className="text-base font-semibold text-text-primary mb-3 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-brand-primary" /> Personal Snapshot
            </h2>
            <ul className="text-xs text-text-secondary space-y-2">
              <li>• NYC-based, always exploring new restaurants & neighborhoods</li>
              <li>• Active traveler &amp; scuba diver (Nitrox certified)</li>
              <li>• Fitness: lifting, running, skiing, BJJ</li>
              <li>• Reading, photography, and learning new ideas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Book className="w-4 h-4 text-brand-primary" /> Interests
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Things I spend time on outside of work — and the topics I keep coming back to.
        </p>

        <div className="rounded-2xl border border-border-subtle bg-background/60 px-6 py-5">
          <table className="w-full text-left text-sm text-text-secondary border-collapse">
            <tbody>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">Tech & Data</td>
                <td>AI deployment, product thinking, data engineering, ML systems</td>
              </tr>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">Travel</td>
                <td>Scuba diving, cultural immersion, photography, city exploration</td>
              </tr>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">Learning</td>
                <td>Economics, astrophysics, nuclear energy, sustainable farming</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Languages */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Camera className="w-4 h-4 text-brand-primary" /> Languages
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          What I can comfortably operate in day-to-day.
        </p>

        <div className="rounded-2xl border border-border-subtle bg-background/60 px-6 py-5">
          <table className="w-full text-left text-sm text-text-secondary border-collapse">
            <tbody>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">English</td>
                <td>Native</td>
              </tr>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">Spanish</td>
                <td>Intermediate</td>
              </tr>
              <tr className="border-b border-border/20">
                <td className="py-3 font-medium text-text-primary w-40">Russian</td>
                <td>Learning!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Map */}
      <section className="section-container pb-24">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-brand-primary" /> Countries I&apos;ve Visited
        </h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Evolving map of my travels around the world.
        </p>

        <div className="card-skeuo">
          <WorldMap
            // keep this aligned to your single brand hue
            color="#2563eb"
            size="responsive"
            data={visitedCountryData}
          />
        </div>
      </section>
    </>
  );
}
