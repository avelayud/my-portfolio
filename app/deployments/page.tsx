// app/deployments/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";
import { X, Briefcase, Boxes, GraduationCap } from "lucide-react";

type SectionKey = "Deal Tools" | "Data Products" | "Academic & ML";

type DeployItem = {
  id: string;
  section: SectionKey;
  icon: string;
  kicker: string; // small uppercase line
  title: string;
  short: string; // card summary (keep tight)
  bullets: string[]; // modal details
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export default function DeploymentsPage() {
  const items: DeployItem[] = useMemo(
    () => [
      /* =======================
         Deal & Internal Tools
      ======================= */
      {
        id: "deal-hub",
        section: "Deal Tools",
        icon: "🧠",
        kicker: "Internal tool",
        title: "Deal Scenario Analysis Hub",
        short: "Internal web tool to simulate deal scenarios fast across engagements.",
        bullets: [
          "Defined must-have scenarios with partners; shipped an MVP quickly under deal timelines.",
          "Normalized financial + operational inputs into one decision-ready view.",
          "Designed workflows for non-technical teams; reduced repeat analysis churn.",
        ],
      },
      {
        id: "reporting-hub",
        section: "Deal Tools",
        icon: "📊",
        kicker: "Internal tool",
        title: "Business Reporting / Metrics Hub",
        short: "Reporting layer that makes risks + KPIs hard to ignore.",
        bullets: [
          "Translated messy operational reality into clean weekly reporting.",
          "Created rollups that align operators and execs on the same numbers.",
          "Designed outputs for clarity under time pressure (fast, legible, decision-ready).",
        ],
      },
      {
        id: "metrics-hub",
        section: "Deal Tools",
        icon: "📈",
        kicker: "Analytics",
        title: "Benchmarking & Performance Tool",
        short: "Sector comps combining internal + market data for quick storytelling.",
        bullets: [
          "Unified disparate sources into a consistent metric dictionary and schema.",
          "Built reusable “tell me the story” views for partner conversations.",
          "Standardized inputs + outputs to improve speed-to-insight across deals.",
        ],
      },
      {
        id: "am-trucking",
        section: "Deal Tools",
        icon: "🚚",
        kicker: "Operations model",
        title: "Trucking Network & Cost Model",
        short: "Operational + financial model tying routing and utilization to unit economics.",
        bullets: [
          "Mapped routes, lanes, and asset utilization into a single structure.",
          "Linked operational changes directly to cost per mile and margin outcomes.",
          "Clarified which levers had real impact vs. noise for performance improvement.",
        ],
      },

      /* =======================
         Data Products & In-Progress
      ======================= */
      {
        id: "mytab",
        section: "Data Products",
        icon: "🍽️",
        kicker: "Data product · in progress",
        title: "MyTab — Tip & Performance Analytics",
        short: "Prototype to quantify server performance and design a fair, incentive-aligned tip pool.",
        bullets: [
          "Designed a PoS-style schema (tickets, tips, shifts) to support operator questions.",
          "Built Python analyses for revenue attribution, tip distribution, and fairness metrics.",
          "Optimized for explainable outputs that feel fair to staff (not black-box scoring).",
        ],
      },
      {
        id: "fds",
        section: "Data Products",
        icon: "🛡️",
        kicker: "Analytics · defense / industrials",
        title: "Defense & Industrials Analytics Sandbox",
        short: "Structured view of segments, players, and where value is likely to accrue.",
        bullets: [
          "Organized messy inputs into a usable, queryable structure.",
          "Framed outputs around operator- and investor-relevant questions.",
          "Served as a sandbox for forecasting / ML ideas as data quality improves.",
        ],
      },
      {
        id: "aml",
        section: "Data Products",
        icon: "🕵️",
        kicker: "Data analysis · aml / networks",
        title: "AML Pattern Analysis (Case Study)",
        short: "SQL + Python triage of coordination, routes, and suspicious behavior.",
        bullets: [
          "Built lag, frequency, dyad, and network analyses to triage suspects.",
          "Produced decision-ready visuals and a short list for review.",
          "Prioritized explainable signals over opaque scoring to support investigation workflows.",
        ],
        table: {
          headers: ["Signal", "Why it matters"],
          rows: [
            ["Fast pickup (lag)", "Timing coordination indicator; clusters by actor/channel."],
            ["Repeated dyads", "Controlled “channels” are stronger signal than volume alone."],
            ["Endpoint concentration", "Highlights likely aggregation / cash-out nodes."],
          ],
        },
      },

      /* =======================
         Academic & ML
      ======================= */
      {
        id: "pain-capstone",
        section: "Academic & ML",
        icon: "🩺",
        kicker: "Capstone · computer vision",
        title: "Facial Expression–Based Pain Assessment",
        short: "Remote pain assessment capstone using ML under COVID constraints.",
        bullets: [
          "Defined scope and methodology with advisors; led execution as capstone lead.",
          "Used OpenFace to extract facial action units (AUs) from remote video captures.",
          "Trained an SVM model and documented how performance could improve with more data.",
        ],
      },
      {
        id: "mit-malaria",
        section: "Academic & ML",
        icon: "🔬",
        kicker: "MIT bootcamp · CNN",
        title: "Malaria Detection Capstone",
        short: "End-to-end CV pipeline with attention to data quality and deployment constraints.",
        bullets: [
          "Built data loaders, augmentations, and training loops in Python.",
          "Evaluated architectures against baselines; tuned for generalization.",
          "Framed results around how a real workflow would use the output.",
        ],
      },
      {
        id: "svhn",
        section: "Academic & ML",
        icon: "🔢",
        kicker: "ML project · vision",
        title: "SVHN Digit Recognition",
        short: "Compared simpler ANNs vs deeper CNNs and studied failure modes.",
        bullets: [
          "Implemented and compared ANN and CNN approaches on the SVHN dataset.",
          "Explored hyperparameters, regularization, and augmentation effects.",
          "Focused on interpretability: where the model fails and why.",
        ],
      },
      {
        id: "foodhub",
        section: "Academic & ML",
        icon: "🍔",
        kicker: "Analytics · python / stats",
        title: "FoodHub Order Analysis",
        short: "EDA + stats to understand demand patterns and customer behavior.",
        bullets: [
          "Performed EDA on order and customer-level data to find behavioral patterns.",
          "Used statistical tests to validate hypotheses (not just visual intuition).",
          "Translated findings into simple, decision-ready recommendations.",
        ],
      },
    ],
    []
  );

  const sections = useMemo(
    () => [
      {
        key: "Deal Tools" as const,
        icon: <Briefcase className="h-4 w-4 text-brand-primary" />,
        title: "Deal & Internal Tools",
        subtitle:
          "Decision-support tools built in deal environments where speed and explainability matter as much as accuracy.",
        cols: "md:grid-cols-2",
      },
      {
        key: "Data Products" as const,
        icon: <Boxes className="h-4 w-4 text-brand-primary" />,
        title: "Data Products & In-Progress Builds",
        subtitle:
          "Closer to the metal — designing schemas, writing SQL/Python, and building outputs operators can actually use.",
        cols: "md:grid-cols-2",
      },
      {
        key: "Academic & ML" as const,
        icon: <GraduationCap className="h-4 w-4 text-brand-primary" />,
        title: "Academic & ML Projects",
        subtitle:
          "Work where the output is a working model or pipeline — built with an eye toward real-world constraints.",
        cols: "md:grid-cols-2",
      },
    ],
    []
  );

  const [active, setActive] = useState<DeployItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <PageHeader
        kicker="Deployments & Product Work"
        title="Tools, models, and systems I’ve helped ship."
        subtitle="From internal hubs in consulting to data products and ML pipelines — work that moved beyond slides into artifacts people can actually use."
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

              <div className={`grid gap-6 ${s.cols}`}>
                {sectionItems.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    className="experience-card experience-card-centered"
                    onClick={() => setActive(it)}
                  >
                    <div className="experience-logo-plain">
                      <div className="experience-fallback-icon" aria-hidden>
                        {it.icon}
                      </div>
                    </div>

                    <div className="experience-stack">
                      <div className="card-kicker">{it.kicker}</div>
                      <div className="experience-company">{it.title}</div>
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
                  <span className="text-[18px]" aria-hidden>
                    {active.icon}
                  </span>
                </div>

                <div>
                  <div className="card-kicker mb-2">{active.kicker}</div>
                  <div className="text-xl font-semibold text-text-primary">
                    {active.title}
                  </div>
                  <p className="text-sm text-text-secondary mt-3">{active.short}</p>
                </div>
              </div>

              <button className="icon-btn" onClick={() => setActive(null)} aria-label="Close modal">
                <X size={16} />
              </button>
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold text-text-primary mb-2">
                What it is / what I did
              </div>
              <ul className="text-sm text-text-secondary space-y-1 list-disc list-inside">
                {active.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {active.table && (
              <div className="mt-5 overflow-hidden rounded-xl border border-divider">
                <table className="w-full text-sm">
                  <thead className="bg-background text-text-tertiary">
                    <tr>
                      {active.table.headers.map((h) => (
                        <th key={h} className="text-left font-medium px-3 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    {active.table.rows.map((row, idx) => (
                      <tr key={idx} className="border-t border-divider">
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
