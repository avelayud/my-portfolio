import Sidebar from "@/app/components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex">
      
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 ml-0 pt-14 md:pt-0">
        {/* HERO + SNAPSHOT */}
        <section id="top" className="section-container pt-20 pb-12">
          <div className="relative">

            {/* Faint blue accent bar (desktop only) */}
            <div className="hidden md:block absolute -left-8 top-0 h-full w-1 rounded-full bg-brand-secondary/25" />

            {/* Content block */}
            <div className="relative">
              {/* Top tagline */}
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary mb-4">
                Strategy · Product · Deployment
              </p>

              {/* Name + accent line */}
              <div className="mb-10">
                <h1 className="text-5xl md:text-[3.25rem] font-bold text-text-primary mb-3 leading-tight">
                  Arjuna Velayudam
                </h1>
                <div className="h-1 w-24 bg-brand-accent rounded-full" />
              </div>

              {/* Main grid */}
              <div className="grid md:grid-cols-[1.6fr_auto_1.2fr] gap-12 items-start">
                {/* LEFT — concise bio */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    Builder-minded strategist focused on improving decisions,
                    workflows, and internal tools inside complex environments.
                  </p>

                  <p className="text-sm md:text-base text-text-secondary/90 leading-relaxed">
                    I like turning ambiguity into structured systems — working
                    between data, product, and operators to get things shipped.
                  </p>
                </div>

                {/* Middle divider */}
                <div className="hidden md:flex justify-center">
                  <div className="w-px h-full bg-divider" />
                </div>

                {/* RIGHT — snapshot with icons */}
                <div className="space-y-5">

                  <div className="snapshot-row">
                    <div className="snapshot-icon">💼</div>
                    <div>
                      <div className="snapshot-label mb-1">Current</div>
                      <div className="text-text-secondary">
                        Senior Associate · PwC Deals Transformation
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">🎯</div>
                    <div>
                      <div className="snapshot-label mb-1">Focus Areas</div>
                      <div className="text-text-secondary">
                        Deployment strategy, internal tools, data-informed workflows
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">📍</div>
                    <div>
                      <div className="snapshot-label mb-1">Location</div>
                      <div className="text-text-secondary">
                        New York City · originally from Buffalo, NY
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">✉️</div>
                    <div>
                      <div className="snapshot-label mb-1">Contact</div>
                      <div className="text-text-secondary">
                        velayudamarjuna@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">in</div>
                    <div>
                      <div className="snapshot-label mb-1">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/arjuna-velayudam"
                        className="text-brand-secondary underline underline-offset-2 hover:text-brand-primary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        /in/arjunavelayudam
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE: COMPANY FLIP TILES */}
        <section id="experience" className="section-container pb-16">
          <h2 className="section-title">Where I&apos;ve Built &amp; Executed</h2>
          <p className="section-subtitle">
            A mix of high-intensity deal work, operational problem solving,
            and internal product building across finance and consulting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Goldman Sachs */}
            <div className="group perspective h-56">
              <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
                {/* Front */}
                <div className="flip-card-face rounded-av-lg flex flex-col items-center justify-center px-6">
                  <div className="text-xs tracking-[0.25em] text-text-muted mb-2">
                    FINANCE
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    Goldman Sachs
                  </div>
                  <div className="text-xs text-text-secondary">
                    Operations / Markets · Internship
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                  <div className="font-semibold text-text-primary mb-2">
                    What I did
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Automated recurring ops reports under tight SLAs.</li>
                    <li>Analyzed trade flow patterns to flag anomalies.</li>
                    <li>Worked across teams to de-bug data breaks quickly.</li>
                  </ul>
                  <div className="mt-3 text-[11px] text-text-muted">
                    Early exposure to high-volume systems and failure modes.
                  </div>
                </div>
              </div>
            </div>

            {/* Alvarez & Marsal */}
            <div className="group perspective h-56">
              <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
                {/* Front */}
                <div className="flip-card-face rounded-av-lg flex flex-col items-center justify-center px-6">
                  <div className="text-xs tracking-[0.25em] text-text-muted mb-2">
                    TURNAROUND
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    Alvarez &amp; Marsal
                  </div>
                  <div className="text-xs text-text-secondary">
                    Performance Improvement
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                  <div className="font-semibold text-text-primary mb-2">
                    What I did
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Built cost and cash-flow models for distressed assets.</li>
                    <li>Mapped operational KPIs to real levers on the ground.</li>
                    <li>Helped teams prioritize actions in constrained timelines.</li>
                  </ul>
                  <div className="mt-3 text-[11px] text-text-muted">
                    Got comfortable making decisions with imperfect data.
                  </div>
                </div>
              </div>
            </div>

            {/* PwC */}
            <div className="group perspective h-56">
              <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
                {/* Front */}
                <div className="flip-card-face rounded-av-lg flex flex-col items-center justify-center px-6">
                  <div className="text-xs tracking-[0.25em] text-text-muted mb-2">
                    DEALS · PRODUCT
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    PwC
                  </div>
                  <div className="text-xs text-text-secondary">
                    Senior Associate · Deals Transformation
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                  <div className="font-semibold text-text-primary mb-2">
                    What I did
                  </div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>
                      Led design and rollout of a Deal Scenario Analysis Hub used
                      across engagements.
                    </li>
                    <li>
                      Helped build a sector metrics hub combining internal and
                      market data.
                    </li>
                    <li>
                      Worked directly with partners and clients to shape features
                      and drive adoption.
                    </li>
                  </ul>
                  <div className="mt-3 text-[11px] text-text-muted">
                    Where strategy, product thinking, and data really converged.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED DEPLOYMENTS & PRODUCT WORK */}
        <section id="featured-work" className="section-container pb-24">
          <h2 className="section-title">Featured Deployments &amp; Product Work</h2>
          <p className="section-subtitle">
            A deeper look at the tooling and decision systems I&apos;ve helped
            design and deploy — from internal hubs in consulting to
            operator-facing analytics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deal Scenario Analysis Hub */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                INTERNAL TOOL · DEPLOYED
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Deal Scenario Analysis Hub
              </h3>
              <p className="text-sm text-text-secondary mb-3">
                Internal web-based tool to quickly simulate standalone, synergy,
                and carve-out scenarios across deals, giving partners and teams a
                single place to reason about outcomes.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Defined must-have scenarios with partners &amp; teams.</li>
                <li>• Aggregated and normalized financial &amp; operational inputs.</li>
                <li>• Designed workflows non-technical users could navigate.</li>
                <li>• Iterated based on feedback to improve speed and clarity.</li>
              </ul>
            </div>

            {/* Restaurant Tip & Performance Analytics */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                DATA PRODUCT · IN PROGRESS
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Restaurant Tip &amp; Performance Analytics
              </h3>
              <p className="text-sm text-text-secondary mb-3">
                Prototype data product to quantify server performance and design
                a fair, incentive-aligned tip pool — giving operators a clearer
                picture of who drives revenue and why.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Synthetic PoS schema in PostgreSQL.</li>
                <li>• Python-based analysis for revenue &amp; tip distributions.</li>
                <li>• Focus on metrics that feel fair and explainable to staff.</li>
                <li>• Grounded in real conversations with restaurant workers.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
