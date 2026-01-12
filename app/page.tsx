// app/page.tsx
import PageHeader from "@/app/components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        kicker="Overview"
        title="Arjuna Velayudam"
        subtitle="Builder-minded strategist focused on improving decisions, workflows, and internal tools inside complex environments."
      />

      {/* Intro + Snapshot */}
      <section className="section-container pb-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1.2fr] items-start">
          {/* Left */}
          <div className="space-y-4">
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              I like turning ambiguity into structured systems — working between data,
              product, and operators to get things shipped.
            </p>

            <div className="rounded-2xl border border-border-subtle bg-background/60 px-6 py-5 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.18em] text-text-tertiary mb-2">
                What I optimize for
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Operator empathy + deployment mindset</li>
                <li>• Clear metrics and decision-ready outputs</li>
                <li>• Simple systems that scale across teams</li>
              </ul>
            </div>
          </div>

          {/* Right: Snapshot */}
          <div className="rounded-2xl border border-border-subtle bg-background/70 px-6 py-6 shadow-skeuo-soft/40">
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-tertiary mb-4">
              Snapshot
            </p>

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
                    className="text-brand-primary underline underline-offset-2 hover:opacity-90"
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
      </section>

      {/* Preview: Experience */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2">Where I&apos;ve Built &amp; Executed</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          A mix of high-intensity deal work, operational problem solving, and internal product building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Goldman */}
          <div className="group perspective h-56">
            <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
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
              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">What I did</div>
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

          {/* A&M */}
          <div className="group perspective h-56">
            <div className="flip-card-inner rounded-av-lg shadow-skeuo-soft bg-surface">
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
              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">What I did</div>
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
              <div className="flip-card-face flip-card-back rounded-av-lg bg-surface px-5 py-5 text-xs text-text-secondary">
                <div className="font-semibold text-text-primary mb-2">What I did</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Led design and rollout of a Deal Scenario Analysis Hub.</li>
                  <li>Helped build a sector metrics hub combining internal + market data.</li>
                  <li>Worked directly with partners and clients to shape features.</li>
                </ul>
                <div className="mt-3 text-[11px] text-text-muted">
                  Where strategy, product thinking, and data really converged.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview: Featured deployments */}
      <section className="section-container pb-24">
        <h2 className="section-title mb-2">Featured Deployments &amp; Product Work</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          A deeper look at the tooling and decision systems I&apos;ve helped design and deploy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              INTERNAL TOOL · DEPLOYED
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Deal Scenario Analysis Hub
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Internal web-based tool to quickly simulate deal scenarios across engagements.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Defined must-have scenarios with partners &amp; teams.</li>
              <li>• Aggregated and normalized financial &amp; operational inputs.</li>
              <li>• Designed workflows non-technical users could navigate.</li>
              <li>• Iterated based on feedback to improve speed and clarity.</li>
            </ul>
          </div>

          <div className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              DATA PRODUCT · IN PROGRESS
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Restaurant Tip &amp; Performance Analytics
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Prototype to quantify server performance and design a fair, incentive-aligned tip pool.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Synthetic PoS schema in PostgreSQL.</li>
              <li>• Python analysis for revenue &amp; tip distributions.</li>
              <li>• Metrics designed to be explainable to staff.</li>
              <li>• Grounded in real conversations with restaurant workers.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
