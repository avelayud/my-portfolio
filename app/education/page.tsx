export default function EducationPage() {
  return (
    <main className="min-h-screen bg-background flex">
      {/* LEFT SIDEBAR NAV */}
      <aside className="sidebar-shell">
        <div>
          {/* Logo / Initials */}
          <div className="mb-8">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-text-primary"
            >
              AV
            </a>
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
        {/* HERO: simple + 4 anchor pills */}
        <section id="top" className="section-container pt-20 pb-10">
          <div className="relative">
            {/* Faint blue accent bar */}
            <div className="hidden md:block absolute -left-8 top-0 h-full w-1 rounded-full bg-brand-secondary/25" />

            <div className="relative space-y-6">
              {/* Tagline */}
              <p className="text-xs uppercase tracking-[0.25em] text-brand-secondary">
                Education
              </p>

              {/* Heading + short line */}
              <div>
                <h1 className="text-4xl md:text-[2.75rem] font-bold text-text-primary mb-2 leading-tight">
                  Global, applied, and still ongoing.
                </h1>
                <p className="text-sm md:text-base text-text-secondary max-w-xl">
                  A path through Boston, Lyon, New York, San Francisco, and Mexico
                  — mixing engineering, data, and real work with operators.
                </p>
              </div>

              {/* 4 “pill” cards that jump down the page */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <a href="#mit" className="hero-pill group">
                  <div className="snapshot-icon">🤖</div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      MIT Bootcamp
                    </div>
                    <div className="text-xs text-text-secondary">
                      Python for AI &amp; Data · Remote / Global
                    </div>
                  </div>
                </a>

                <a href="#neu" className="hero-pill group">
                  <div className="snapshot-icon">🎓</div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      Northeastern University
                    </div>
                    <div className="text-xs text-text-secondary">
                      B.S. Industrial Engineering · Boston, MA
                    </div>
                  </div>
                </a>

                <a href="#lyon" className="hero-pill group">
                  <div className="snapshot-icon">🌍</div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      Lyon Catholic University
                    </div>
                    <div className="text-xs text-text-secondary">
                      Study Abroad · Lyon, France
                    </div>
                  </div>
                </a>

                <a href="#eahs" className="hero-pill group">
                  <div className="snapshot-icon">📣</div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      East Aurora High School
                    </div>
                    <div className="text-xs text-text-secondary">
                      Leadership &amp; AP Foundation · East Aurora, NY
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DETAIL SECTIONS (expand on hover) */}
        <section className="section-container pb-24 space-y-10">
          {/* MIT */}
          <div id="mit" className="edu-expand">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                  MIT Bootcamp — Python for AI &amp; Data
                </h2>
                <p className="text-xs text-text-secondary">
                  Remote / Global · 16-week continuing education program
                </p>
              </div>
              <span className="text-[11px] text-text-muted uppercase tracking-wide">
                Continuing Education
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              Focused on using Python to build AI-powered and data-driven
              applications, from exploratory analysis to full machine learning
              workflows.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Built end-to-end ML and analytics pipelines.</li>
              <li>• Applied CNNs and classical models to real datasets.</li>
              <li>• Strengthened comfort with Python in production-like contexts.</li>
            </ul>
          </div>

          {/* Northeastern */}
          <div id="neu" className="edu-expand">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                  Northeastern University — B.S. Industrial Engineering
                </h2>
                <p className="text-xs text-text-secondary">
                  Boston, MA · Minors in Economics &amp; Mathematics · 5-year co-op program
                </p>
              </div>
              <span className="text-[11px] text-text-muted uppercase tracking-wide">
                Undergraduate
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              A five-year program combining engineering fundamentals with three
              six-month full-time co-op roles across New York, San Francisco, and
              Mexico.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• 3 × 6-month co-ops in NYC, SF, and Mexico.</li>
              <li>• Robotics Club, Kappa Sigma, French Club.</li>
              <li>
                • Chemistry lab researcher on catalysts converting methane into
                methanol to reduce greenhouse gas emissions.
              </li>
              <li>• Fenway Academic Mentor &amp; Engineering Capstone.</li>
            </ul>
          </div>

          {/* Lyon */}
          <div id="lyon" className="edu-expand">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                  Lyon Catholic University (Université Catholique de Lyon)
                </h2>
                <p className="text-xs text-text-secondary">
                  Lyon, France · Study abroad through Northeastern
                </p>
              </div>
              <span className="text-[11px] text-text-muted uppercase tracking-wide">
                Study Abroad
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              Combined coursework with day-to-day immersion in French language,
              culture, and operating in a new context.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Courses spanning engineering, business, and culture.</li>
              <li>• Built comfort working and living in another language.</li>
            </ul>
          </div>

          {/* East Aurora HS */}
          <div id="eahs" className="edu-expand">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                  East Aurora High School
                </h2>
                <p className="text-xs text-text-secondary">
                  East Aurora, NY · Leadership, academics, and music foundation
                </p>
              </div>
              <span className="text-[11px] text-text-muted uppercase tracking-wide">
                Foundation
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-3">
              Early mix of leadership, academics, sports, and music that shaped
              how I show up on teams and handle responsibility.
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
        </section>
      </div>
    </main>
  );
}
