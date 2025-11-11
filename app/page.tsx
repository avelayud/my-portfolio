export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind v4 is working 🚀</h1>
      <p className="mt-4 text-gray-700">If this is styled, you’re good.</p>
      <h1 className="text-4xl font-bold">Arjuna Velayudam</h1>
      <p className="mt-4 text-lg text-gray-600">
        Strategy, product, and data-driven problem solver. Currently a Senior Associate at PwC, exploring deployment strategy, product ops, and tech-driven growth.
      </p>
      <a href="/projects" className="text-blue-600 underline mt-6 inline-block">
        View My Projects →
      </a>
    </main>
  );
}

