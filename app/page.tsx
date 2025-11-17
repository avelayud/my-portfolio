export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* LEFT SIDEBAR NAV */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r shadow-sm flex flex-col justify-between">
        <div className="px-6 py-6">
          {/* Logo / Initials */}
          <div className="mb-8">
            <div className="text-2xl font-bold tracking-tight">AV</div>
            <p className="text-xs text-gray-500 mt-1">
              Strategy · Product · Data
            </p>
          </div>

          {/* Nav Links */}
          <nav className="space-y-3 text-sm">
            <a href="#top" className="block text-gray-700 hover:text-black">
              Overview
            </a>
            <a href="#highlights" className="block text-gray-700 hover:text-black">
              Highlights
            </a>
            <a href="#featured-work" className="block text-gray-700 hover:text-black">
              Featured Work
            </a>
            <a href="/projects" className="block text-gray-700 hover:text-black">
              Projects
            </a>
            <a href="/about" className="block text-gray-700 hover:text-black">
              About
            </a>
            <a href="/contact" className="block text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="px-6 py-4 border-t text-xs text-gray-500">
          Available for strategy / deployment roles.
        </div>
      </aside>

      {/* MAIN CONTENT (SHIFTED RIGHT) */}
      <div className="ml-64 flex-1">
        {/* HERO SECTION */}
        <section
          id="top"
          className="flex flex-col items-start justify-center px-10 pt-16 pb-10 max-w-5xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
            Deployment Strategy · Product · Data
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Arjuna Velayudam
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mb-4">
            I help teams turn ambiguous problems into shipped products.
            Blending engineering, deal execution, and data to design,
            validate, and operationalize high-leverage systems.
          </p>

          <p className="text-sm text-gray-500 max-w-xl">
            Currently a Senior Associate in M&amp;A at PwC, pivoting toward
            product/deployment roles at tech and dual-use companies.
          </p>
        </section>

        {/* HIGHLIGHT TILES */}
        <section
          id="highlights"
          className="max-w-5xl mx-auto px-10 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {/* EDUCATION */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">🎓 Education</h3>
            <p className="text-gray-700 text-sm">
              Northeastern University — B.S. Industrial Engineering
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Minors in Mathematics &amp; Economics
            </p>
          </div>

          {/* BACKGROUND */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">📍 Background</h3>
            <p className="text-gray-700 text-sm">
              Buffalo, NY → New York City.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Experience across PE-backed M&amp;A, A&amp;D, tech, and
              industrials.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">📬 Contact</h3>
            <p className="text-gray-700 text-sm">
              avelayudam@gmail.com
            </p>
            <p className="text-gray-700 text-sm">
              LinkedIn: /in/arjunavelayudam
            </p>
          </div>
        </section>

        {/* PLACEHOLDER: FEATURED WORK / DEPLOYMENT SECTION */}
        <section
          id="featured-work"
          className="max-w-5xl mx-auto px-10 pb-24"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Featured Deployment & Product Work
          </h2>
          <p className="text-gray-700 text-sm mb-6 max-w-2xl">
            A sample of problems I&apos;ve helped structure and solve — from
            building internal tools in consulting environments to designing
            data workflows and decision systems. Case studies coming soon.
          </p>

          {/* Placeholder Case Study Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <p className="text-xs font-semibold text-indigo-600 mb-1">
                DEPLOYMENT CASE STUDY · COMING SOON
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Deal Scenario Analysis Hub
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Internal tool to simulate M&amp;A scenarios and surface insights
                for partners and clients across multiple workstreams.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Defined requirements with partners & engagement teams</li>
                <li>• Aggregated & normalized deal + operational data</li>
                <li>• Designed workflows for non-technical users</li>
                <li>• Drove adoption via training and iteration loops</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <p className="text-xs font-semibold text-indigo-600 mb-1">
                DATA PRODUCT · IN PROGRESS
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Restaurant Tip & Performance Analytics
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Prototype data product to quantify front-of-house performance and
                design fair, incentive-aligned tip pools.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Synthetic PoS data model in SQL</li>
                <li>• Python-based analytics & scenario testing</li>
                <li>• Focus on explainability for operators</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
