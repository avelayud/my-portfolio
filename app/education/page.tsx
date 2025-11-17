export default function EducationPage() {
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
            <a href="/" className="nav-link">
              Overview
            </a>
            <a href="/#experience" className="nav-link">
              Experience
            </a>
            <a href="/#featured-work" className="nav-link">
              Deployments &amp; Product
            </a>
            <a href="/projects" className="nav-link">
              Projects
            </a>
            <a href="/education" className="nav-link nav-link-active">
              Education
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
        <section id="top" className="section-container pt-20 pb-12">
          <div className="relative">
            {/* Faint blue accent bar (desktop only) */}
            <div className="hidden md:block absolute -left-8 top-0 h-full w-1 rounded-full bg-brand-secondary/25" />

            {/* Content block */}
            <div className="relative">
              {/* Top tagline */}
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary mb-4">
                Education · Global Experience · Continuous Learning
              </p>

              {/* Title + accent line */}
              <div className="mb-10">
                <h1 className="text-4xl md:text-[2.75rem] font-bold text-text-primary mb-3 leading-tight">
                  Education &amp; Learning
                </h1>
                <div className="h-1 w-24 bg-brand-accent rounded-full" />
              </div>

              {/* Main grid */}
              <div className="grid md:grid-cols-[1.6fr_auto_1.4fr] gap-12 items-start">
                {/* LEFT — summary */}
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    Built across Boston, Lyon, New York, San Francisco, and
                    Mexico, my education has always been tied to real work:
                    applying engineering, data, and experimentation in live
                    environments.
                  </p>

                  <p className="text-sm md:text-base text-text-secondary/90 leading-relaxed">
                    From a five-year co-op model at Northeastern to a
                    sixteen-week MIT Bootcamp in Python and AI, the throughline
                    is the same: learn the theory, then pressure-test it with
                    operators, data, and real constraints.
                  </p>
                </div>

                {/* Middle divider */}
                <div className="hidden md:flex justify-center">
                  <div className="w-px h-full bg-divider" />
                </div>

                {/* RIGHT — education snapshot */}
                <div className="space-y-5">
                  <div className="snapshot-row">
                    <div className="snapshot-icon">🎓</div>
                    <div>
                      <div className="snapshot-label mb-1">Core Degrees</div>
                      <div className="text-text-secondary">
                        B.S. Industrial Engineering · Economics &amp; Mathematics minors
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">🌍</div>
                    <div>
                      <div className="snapshot-label mb-1">Global Footprint</div>
                      <div className="text-text-secondary">
                        Boston · Lyon · New York · San Francisco · Mexico
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">🤖</div>
                    <div>
                      <div className="snapshot-label mb-1">Current Focus</div>
                      <div className="text-text-secondary">
                        Python, AI/ML, and data workflows for real-world deployment
                      </div>
                    </div>
                  </div>

                  <div className="snapshot-row">
                    <div className="snapshot-icon">📚</div>
                    <div>
                      <div className="snapshot-label mb-1">Themes</div>
                      <div className="text-text-secondary">
                        Applied learning, experimentation, and operator-facing systems
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMAL EDUCATION */}
        <section id="education" className="section-container pb-20">
          <h2 className="section-title">Formal Education</h2>
          <p className="section-subtitle">
            Programs that shaped how I think about systems, data, and people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MIT Bootcamp */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                CONTINUING EDUCATION · 16 WEEKS
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                MIT Bootcamp — Python for AI &amp; Data
              </h3>
              <p className="text-xs text-text-muted mb-2">
                Remote / Global
              </p>
              <p className="text-sm text-text-secondary mb-3">
                16-week intensive focused on using Python to build AI-powered and
                data-driven applications, from exploratory analysis to full
                machine learning workflows.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Built end-to-end pipelines for ML and analytics projects.</li>
                <li>• Applied CNNs and classical ML to real datasets.</li>
                <li>• Deepened comfort with Python for production-like workflows.</li>
              </ul>
            </div>

            {/* Northeastern */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                UNDERGRAD · 5-YEAR CO-OP PROGRAM
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                Northeastern University — B.S. Industrial Engineering
              </h3>
              <p className="text-xs text-text-muted mb-2">
                Boston, MA · Minors in Economics &amp; Mathematics
              </p>
              <p className="text-sm text-text-secondary mb-3">
                A five-year program combining engineering fundamentals with
                three six-month full-time co-op roles across New York,
                San Francisco, and Mexico.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• 3× 6-month co-ops in NYC, SF, and Mexico.</li>
                <li>• Robotics Club, Kappa Sigma, French Club.</li>
                <li>
                  • Chemistry lab researcher building catalysts to convert
                  methane into methanol and reduce greenhouse gas emissions.
                </li>
                <li>• Fenway Academic Mentor &amp; Engineering Capstone.</li>
              </ul>
            </div>

            {/* Lyon Catholic University */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                STUDY ABROAD
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                Lyon Catholic University (Université Catholique de Lyon)
              </h3>
              <p className="text-xs text-text-muted mb-2">
                Lyon, France
              </p>
              <p className="text-sm text-text-secondary mb-3">
                Study abroad term through Northeastern, combining coursework with
                day-to-day immersion in French language and culture.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Coursework spanning engineering, business, and culture.</li>
                <li>• Built comfort operating in a new language and context.</li>
              </ul>
            </div>

            {/* East Aurora High School */}
            <div className="card-skeuo">
              <p className="text-[11px] font-semibold text-brand-primary mb-1">
                FOUNDATION
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                East Aurora High School
              </h3>
              <p className="text-xs text-text-muted mb-2">
                East Aurora, NY
              </p>
              <p className="text-sm text-text-secondary mb-3">
                Early mix of leadership, academics, sports, and music that
                shaped how I show up on teams and handle responsibility.
              </p>
              <ul className="text-xs text-text-secondary space-y-1">
                <li>• Student Council President &amp; Key Club President.</li>
                <li>• Varsity Soccer, Varsity Track, Drummers Unlimited.</li>
                <li>
                  • 10 AP classes: Statistics, Chemistry, Economics, Government,
                  Calculus A &amp; B, World History, American History, Spanish,
                  Language &amp; Composition.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
