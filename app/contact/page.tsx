// app/contact/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
      <path
        d="M5 7.5 12 12l7-4.5"
        className="fill-none stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
      <path
        d="M7.2 10.2V16.8"
        className="fill-none stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="7.2" cy="7.2" r="1.1" className="fill-current" />
      <path
        d="M11 16.8V11.7c0-1.2.8-2 2.1-2 1.3 0 1.9.8 1.9 2v5.1"
        className="fill-none stroke-current"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 3.8a5 5 0 0 0-5 5c0 3.6 4.1 8.4 4.6 9a.6.6 0 0 0 .8 0c.5-.6 4.6-5.4 4.6-9a5 5 0 0 0-5-5Z"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="8.8"
        r="1.7"
        className="fill-none stroke-current"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-64 w-full min-h-screen bg-background px-10 py-16">
        <div className="section-container">
          {/* Header */}
          <header className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
              Contact
            </p>
            <h1 className="section-title mb-3">Let’s get in touch.</h1>
            <p className="section-subtitle max-w-2xl">
              Whether you want to talk deployment strategy, M&amp;A, data projects, or a new
              idea, the fastest ways to reach me are email and LinkedIn.
            </p>
          </header>

          {/* Layout */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
            {/* Left: Quick contacts */}
            <section className="space-y-6">
              <div className="rounded-2xl border border-border-subtle bg-background/60 px-6 py-5 backdrop-blur-sm">
                <h2 className="text-sm font-semibold tracking-tight text-text-primary mb-4">
                  Direct contact
                </h2>

                <ul className="space-y-4 text-sm text-text-secondary">
                  {/* Email */}
                  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                        <IconMail className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-text-primary">
                          Email
                        </p>
                        <p className="text-[11px] text-text-tertiary mt-0.5">
                          Best for longer notes, intros, and collaboration ideas.
                        </p>
                      </div>
                    </div>
                    <a
                      href="mailto:velayudamarjuna@gmail.com"
                      className="inline-flex w-full sm:w-40 items-center justify-center rounded-full border border-border-subtle bg-background px-3 py-1.5 text-[11px] font-medium text-text-primary hover:border-brand-primary hover:text-brand-primary transition whitespace-nowrap"
                    >
                      Email me
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                        <IconLinkedIn className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-text-primary">
                          LinkedIn
                        </p>
                        <p className="text-[11px] text-text-tertiary mt-0.5">
                          Great for professional updates, networking, and opportunities.
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.linkedin.com/in/arjuna-velayudam"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full sm:w-40 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/5 px-3 py-1.5 text-[11px] font-medium text-brand-primary hover:bg-brand-primary/10 transition whitespace-nowrap"
                    >
                      Message on LinkedIn
                    </a>
                  </li>

                  {/* Resume placeholder */}
                  <li className="flex items-center justify-between gap-4 opacity-60 pointer-events-none">
                    <div className="flex items-start gap-3">
                      <span className="mt-[2px] inline-flex h-7 w-7 items-center justify-center rounded-full bg-border-subtle/40 text-text-tertiary text-[11px]">
                        📄
                      </span>
                      <div>
                        <p className="text-[13px] font-medium text-text-primary">
                          Resume
                        </p>
                        <p className="text-[11px] text-text-tertiary mt-0.5">
                          Coming soon.
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-border-subtle bg-background px-3 py-1.5 text-[11px] font-medium text-text-tertiary">
                      —
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-border-subtle/60 bg-background/40 px-6 py-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-2">
                  Response cadence
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  I try to respond to most messages within a few days. If it’s time-sensitive,
                  email is usually the safest bet.
                </p>
              </div>
            </section>

            {/* Right: Form + visual */}
            <section className="rounded-2xl border border-border-subtle bg-background/70 px-6 py-6 md:px-8 md:py-7 shadow-skeuo-soft/40 space-y-6">
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-text-primary mb-2">
                  Share a bit about what’s on your mind
                </h2>
                <p className="text-[12px] text-text-secondary mb-4">
                  Not required to get in touch, but helpful context if you’re reaching out about a
                  specific project, opportunity, or idea.
                </p>

                <form
                  className="space-y-4 text-sm"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-medium text-text-secondary">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm text-text-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/60"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-medium text-text-secondary">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm text-text-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/60"
                        placeholder="you@domain.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-text-secondary">
                      What would you like to talk about?
                    </label>
                    <select
                      className="w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm text-text-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/60"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="deployment">
                        Deployment strategy / technical PM roles
                      </option>
                      <option value="ma">M&amp;A / deals &amp; modeling</option>
                      <option value="data">Data / analytics / ML projects</option>
                      <option value="startup">Startups / ideas / investing</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-medium text-text-secondary">
                      Message
                    </label>
                    <textarea
                      className="min-h-[150px] w-full rounded-lg border border-border-subtle bg-background px-3 py-2 text-sm text-text-primary outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/60"
                      placeholder="A couple of paragraphs is plenty."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-[11px] font-semibold text-white shadow-skeuo-soft hover:bg-brand-primary/90 transition"
                    >
                      Send (soon)
                    </button>
                    <p className="text-[11px] text-text-tertiary">
                      Or reach out directly via email / LinkedIn.
                    </p>
                  </div>
                </form>
              </div>

              {/* Map / visual */}
              <div className="mt-4 rounded-2xl border border-border-subtle/70 bg-background/80 px-4 py-4">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <IconLocation className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-text-primary">
                        Based in New York City
                      </p>
                      <p className="text-[11px] text-text-tertiary">
                        Open to remote-friendly and hybrid work.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[11px] text-text-tertiary">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span>Currently accepting intros</span>
                  </div>
                </div>

                {/* Stylized “map” visual */}
                <div className="relative h-32 overflow-hidden rounded-xl border border-border-subtle/70 bg-gradient-to-br from-brand-primary/5 via-background to-emerald-500/5">
                  <svg
                    viewBox="0 0 200 120"
                    className="absolute inset-0 h-full w-full text-border-subtle/60"
                  >
                    {/* Grid */}
                    <defs>
                      <pattern
                        id="grid"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.4"
                        />
                      </pattern>
                    </defs>
                    <rect width="200" height="120" fill="url(#grid)" />
                    {/* “Manhattan” shape */}
                    <path
                      d="M110 15 L135 20 L145 55 L140 105 L120 110 L105 60 Z"
                      fill="currentColor"
                      fillOpacity="0.18"
                      stroke="currentColor"
                      strokeWidth="0.6"
                    />
                    {/* Hudson / East river-ish lines */}
                    <path
                      d="M95 5 Q90 50 95 115"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 3"
                      opacity="0.75"
                    />
                    <path
                      d="M155 10 Q160 55 155 115"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 3"
                      opacity="0.75"
                    />
                    {/* Marker */}
                    <circle cx="128" cy="55" r="4.5" fill="currentColor" />
                    <circle cx="128" cy="55" r="2" fill="#10b981" />
                  </svg>

                  <div className="absolute bottom-2 left-2 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium text-text-secondary backdrop-blur-sm">
                    NYC · Eastern Time (ET)
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
