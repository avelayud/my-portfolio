// app/projects/page.tsx

const projects = [
  { name: "BKR Deal Hub", desc: "Scenario analysis tool built for PwC's Deals practice." },
  { name: "Tipper", desc: "Restaurant tip transparency startup concept and PoC built with SQL/Python." },
  { name: "MIT Capstone", desc: "AI-based malaria detection using CNNs." },
];

export default function Projects() {
  return (
    <section className="section-container pt-20 pb-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
        Projects
      </h1>
      <p className="section-subtitle mb-8 max-w-2xl">
        A few representative things I&apos;ve built or helped shape across deals, data, and product.
      </p>

      <ul className="space-y-6">
        {projects.map((p) => (
          <li
            key={p.name}
            className="rounded-av-xl border border-border/30 bg-surface/80 px-5 py-4 shadow-skeuo-soft"
          >
            <h2 className="text-lg font-semibold text-text-primary mb-1">
              {p.name}
            </h2>
            <p className="text-sm text-text-secondary">
              {p.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
