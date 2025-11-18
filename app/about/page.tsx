"use client";

import dynamic from "next/dynamic";
import { Globe2, Camera, Book, Dumbbell, Code2 } from "lucide-react";

// Dynamically import the map component to avoid SSR issues
const WorldMap = dynamic(
  () => import("react-svg-worldmap").then((mod) => mod.default),
  { ssr: false }
);

// ISO 3166-1 alpha-2 codes for visited countries
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
];

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <section className="section-container pt-20 mb-12">
        <h1 className="text-4xl font-semibold text-text-primary mb-4">
          About Me
        </h1>
        <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
          I'm Arjuna — a builder at heart, a consultant by training, and someone who
          gravitates toward hard problems. I love diving deep into industries,
          understanding systems end-to-end, and building solutions that actually
          help people. Whether it's AI deployment, M&A transformation, or
          data-driven product design, I thrive in the intersection of strategy,
          technology, and execution.
        </p>
      </section>

      {/* Snapshot Grid */}
      <section className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 rounded-av-xl bg-brand-secondary/5 shadow-skeuo-soft">
          <h2 className="text-xl font-medium text-text-primary mb-3 flex items-center gap-2">
            <Code2 className="w-5 h-5" /> Professional Snapshot
          </h2>
          <ul className="text-text-secondary space-y-2 text-sm">
            <li>M&A & Transformation @ PwC (Standalone, carve-outs, synergies)</li>
            <li>Building toward Product / Deployment Strategy roles</li>
            <li>Technical focus: Python, SQL, DS/ML, systems thinking</li>
            <li>Entrepreneurial projects across restaurants, AI, and dual-use tech</li>
          </ul>
        </div>

        <div className="p-6 rounded-av-xl bg-brand-secondary/5 shadow-skeuo-soft">
          <h2 className="text-xl font-medium text-text-primary mb-3 flex items-center gap-2">
            <Dumbbell className="w-5 h-5" /> Personal Snapshot
          </h2>
          <ul className="text-text-secondary space-y-2 text-sm">
            <li>NYC-based, always exploring new restaurants & neighborhoods</li>
            <li>Active traveler & scuba diver (Nitrox certified)</li>
            <li>Fitness-focused: lifting, running, skiing, martial arts</li>
            <li>Enjoy reading, photography, and exploring new ideas</li>
          </ul>
        </div>
      </section>

      {/* Interests */}
      <section className="section-container mb-16">
        <h2 className="section-title mb-4 flex items-center gap-2">
          <Book className="w-5 h-5" /> Interests
        </h2>
        <table className="w-full text-left text-sm text-text-secondary border-collapse">
          <tbody>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                Tech & Data
              </td>
              <td>
                AI deployment, product thinking, data engineering, ML systems
              </td>
            </tr>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                Travel
              </td>
              <td>
                Scuba diving, cultural immersion, photography, city exploration
              </td>
            </tr>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                Learning
              </td>
              <td>
                Economics, astrophysics, nuclear energy, sustainable farming
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Languages */}
      <section className="section-container mb-16">
        <h2 className="section-title mb-4 flex items-center gap-2">
          <Camera className="w-5 h-5" /> Languages
        </h2>
        <table className="w-full text-left text-sm text-text-secondary border-collapse">
          <tbody>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                English
              </td>
              <td>Native</td>
            </tr>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                Spanish
              </td>
              <td>Intermediate</td>
            </tr>
            <tr className="border-b border-border/20">
              <td className="py-3 font-medium text-text-primary w-40">
                Hindi
              </td>
              <td>Conversational</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Travel Map */}
      <section className="section-container mb-20">
        <h2 className="section-title mb-4 flex items-center gap-2">
          <Globe2 className="w-5 h-5" /> Countries I've Visited
        </h2>
        <p className="text-text-secondary mb-4 text-sm">
          A snapshot of my travels around the world.
        </p>

        <div className="bg-brand-secondary/5 rounded-av-xl p-6 shadow-skeuo-soft">
          <WorldMap color="blue" size="responsive" data={visitedCountryData} />
        </div>
      </section>
    </>
  );
}
