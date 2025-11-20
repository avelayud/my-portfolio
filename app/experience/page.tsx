// app/experience/page.tsx
import { Briefcase, Rocket, HeartHandshake, FlaskConical } from "lucide-react";

export default function ExperiencePage() {
  return (
    <>
      {/* Header */}
      <section className="section-container pt-20 pb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
          Experience
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          Where I&apos;ve built, shipped, and showed up.
        </h1>
        <p className="section-subtitle max-w-2xl">
          A mix of deal work, operating roles, and hands-on initiatives
          across finance, consulting, community, and the field.
        </p>
      </section>

      {/* Professional */}
      <section className="section-container pb-12 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="h-4 w-4 text-brand-primary" />
          <h2 className="section-title mb-0">Professional</h2>
        </div>
        <p className="section-subtitle max-w-3xl mb-4">
          Roles where I worked inside high-intensity environments, supporting real
          decisions with data, modeling, and operator context.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Goldman Sachs */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Finance · Internship
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                Goldman Sachs — Operations / Markets
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                New York, NY
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Automated recurring ops reports under tight SLAs.</li>
              <li>• Analyzed trade-flow patterns to flag anomalies early.</li>
              <li>• Worked across teams to debug and resolve data breaks.</li>
            </ul>
            <p className="mt-3 text-[11px] text-text-muted">
              Early exposure to high-volume systems and failure modes.
            </p>
          </article>

          {/* Alvarez & Marsal */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Turnaround · Consulting
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                Alvarez &amp; Marsal — Performance Improvement
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                Various clients
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Built cost and cash-flow models for distressed assets.</li>
              <li>• Tied operational KPIs to levers teams could actually pull.</li>
              <li>• Helped prioritize actions under tight time and liquidity constraints.</li>
            </ul>
            <p className="mt-3 text-[11px] text-text-muted">
              Learned to make decisions with imperfect, noisy data.
            </p>
          </article>

          {/* PwC Deals */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Deals · Product
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                PwC — Senior Associate, Deals Transformation
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                New York, NY
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Modeled standalone, synergy, and carve-out scenarios for PE deals.</li>
              <li>• Co-designed internal tools like a Deal Scenario Analysis Hub.</li>
              <li>• Sat between partners, operators, and data teams to shape requirements.</li>
            </ul>
            <p className="mt-3 text-[11px] text-text-muted">
              Where strategy, product thinking, and deployment really converged.
            </p>
          </article>
        </div>
      </section>

      {/* Entrepreneurial */}
      <section className="section-container pb-12 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Rocket className="h-4 w-4 text-brand-primary" />
          <h2 className="section-title mb-0">Entrepreneurial</h2>
        </div>
        <p className="section-subtitle max-w-3xl mb-4">
          Things I started or helped build from scratch — setting direction,
          doing the unglamorous work, and iterating with real people.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Manhattan Orators */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Public Speaking · Community
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                Manhattan Orators — Co-Founder, VP of Finance, Speaker
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                New York, NY · Oct 2023 – Present
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Co-founded a monthly, membership-based public speaking club for professionals.</li>
              <li>• Designed pricing and membership structure and managed finances.</li>
              <li>• Facilitated sessions and spoke regularly to keep standards high.</li>
            </ul>
          </article>

          {/* El Comedor */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Disaster Relief · Operations
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                El Comedor — Founder &amp; Manager
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                Playa del Carmen, MX · Apr 2020 – Aug 2021
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Tackled food insecurity after tourism collapsed during COVID-19.</li>
              <li>• Built a small operating team: hired 2 chefs and 2 distribution staff.</li>
              <li>• Ran the operation at a deficit using fundraising and donations.</li>
              <li>• Distributed over <span className="font-semibold">7,500+ meals</span> to families in need.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Volunteer */}
      <section className="section-container pb-12 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <HeartHandshake className="h-4 w-4 text-brand-primary" />
          <h2 className="section-title mb-0">Volunteer</h2>
        </div>
        <p className="section-subtitle max-w-3xl mb-4">
          Work where the main output wasn&apos;t a slide or model, but
          showing up consistently for people and communities.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* WWOOF */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Sustainability · Field Work
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                WWOOF Italia — Farm Hand &amp; Chef
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                Padua, Italy · Jun 2017 – Aug 2017
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Worked at Biofattoria Coltivimoci, an organic farm.</li>
              <li>• Helped build a greenhouse and manage an apiary.</li>
              <li>• Planted, harvested, and cooked with a variety of fruits and vegetables.</li>
            </ul>
          </article>

          {/* FAM */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Education · Mentoring
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                Fenway Academic Mentoring (FAM) — Mentor
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                Boston, MA
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Mentored students from an under-resourced high school after class.</li>
              <li>• Helped with homework and study habits across multiple subjects.</li>
              <li>• Served as a consistent role model and sounding board.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Educational / Research */}
      <section className="section-container pb-24 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="h-4 w-4 text-brand-primary" />
          <h2 className="section-title mb-0">Educational · Research</h2>
        </div>
        <p className="section-subtitle max-w-3xl mb-4">
          Work that sat closer to the academic side but still plugged into
          real systems and constraints.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Chemistry Lab */}
          <article className="card-skeuo h-full flex flex-col justify-between">
            <header className="mb-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                Research · Sustainability
              </p>
              <h3 className="text-base font-semibold text-text-primary">
                Chemistry Lab Research — Methane to Methanol Catalysis
              </h3>
              <p className="text-[11px] text-text-tertiary mt-1">
                Northeastern University
              </p>
            </header>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Assisted in developing catalysts to convert methane into methanol.</li>
              <li>• Worked hands-on in a lab environment with careful process discipline.</li>
              <li>• Connected chemistry and engineering work to greenhouse gas reduction goals.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
