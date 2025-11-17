export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAVIGATION BAR */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">AV</h2>
          <div className="space-x-6 text-gray-700">
            <a href="/projects" className="hover:text-black transition">Projects</a>
            <a href="/about" className="hover:text-black transition">About</a>
            <a href="/contact" className="hover:text-black transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-32 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-3">Arjuna Velayudam</h1>

        <p className="text-lg text-gray-700 max-w-xl">
          Builder-minded strategist focused on product, deployment strategy, and tech-driven operational excellence.
          Blending engineering foundations with deal execution and data-driven problem solving.
        </p>
      </section>

      {/* HOVER TILE GRID */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* EDUCATION */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
          <p className="text-gray-600 text-sm">
            Northeastern University — Industrial Engineering (Math & Econ)
          </p>
        </div>

        {/* BACKGROUND */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">📍 Background</h3>
          <p className="text-gray-600 text-sm">
            Born & raised in Buffalo, NY. Currently based in New York City.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition transform cursor-pointer">
          <h3 className="text-xl font-semibold mb-2">📬 Contact</h3>
          <p className="text-gray-600 text-sm">avelayudam@gmail.com</p>
          <p className="text-gray-600 text-sm">LinkedIn: /arjunavelayudam</p>
        </div>
      </section>
    </main>
  );
}
