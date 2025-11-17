export default function Home() {
  return (
    <main className="min-h-screen bg-background flex">
      {/* LEFT SIDEBAR NAV */}
      <aside className="sidebar-shell">
        <div>
          {/* Logo / Initials */}
          <div className="mb-8">
            <div className="text-2xl font-bold tracking-tight text-text-primary">
              AV
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">
              Strategy · Product · Data
            </p>
          </div>

          {/* Nav Links */}
          <nav className="space-y-4">
            <a href="#top" className="nav-link">
              Overview
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#featured-work" className="nav-link">
              Deployments &amp; Product
            </a>
            <a href="/projects" className="nav-link">
              Projects
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-8 text-[11px] text-text-muted">
          Available for strategy &amp; deployment roles.
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="ml-64 flex-1">
        {/* HERO + SNAPSHOT */}
        <section id="top" className="section-container pt-16 pb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-text-muted mb-4">
            Deployment Strategy · Product · Data
          </p>

          <h1 className="text-5xl font-bold text-text-primary mb-3">
            Arjuna Velayudam
          </h1>

          <div className="mt-4 grid md:grid-cols-[1.7fr_auto_1.3fr] gap-8 items-start">
            {/* Left: Bio / current role */}
            <div className="space-y-4">
              <p className="text-lg text-text-secondary">
                I help teams turn ambiguous, high-stakes problems into shipped
                systems. My sweet spot is where strategy, product thinking, and
                data meet real-world constraints.
              </p>

              <p className="text-sm text-text-secondary/90">
                Trained as an industrial engineer and sharpened in M&amp;A deal
                environments, I like working in the messy middle: talking to
                operators, understanding constraints, and then shaping tools and
                workflows that actually get used.
              </p>

              <p className="text-sm text-text-secondary/90">
                Right now I&apos;m a Senior Associate in PwC&apos;s Deals
                Transformation practice, working across standalone, synergy, and
                carve-out work while building internal tools that make that work
                faster and more repeatable.
              </p>
            </div>

            {/* Middle: Divider (only on desktop) */}
            <div className="hidden md:flex justify-center">
              <div className="w-px h-full bg-text-secondary/30" />
            </div>

            {/* Right: Contact / details */}
            <div className="space-y-4 text-sm">
              <div>
                <div className="snapshot-label mb-1">Location</div>
                <div className="text-text-secondary">
                  New York City · from Buffalo, NY
                </div>
              </div>

              <div>
                <div className="snapshot-label mb-1">Current role</div>
                <div className="text-text-secondary">
                  Senior Associate · M&amp;A (Deals Transformation), PwC
                </div>
              </div>

              <div>
                <div className="snapshot-label mb-1">Contact</div>
                <div className="text-text-secondary">
                  avelayudam@gmail.com
                </div>
              </div>

              <div>
                <div className="snapshot-label mb-1">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/arjunavelayudam"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-secondary underline underline-offset-2 hover:text-brand-primary"
                >
                  /in/arjunavelayudam
                </a>
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
