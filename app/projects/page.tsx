const projects = [
  { name: "BKR Deal Hub", desc: "Scenario analysis tool built for PwC's Deals practice." },
  { name: "Tipper", desc: "Restaurant tip transparency startup concept and PoC built with SQL/Python." },
  { name: "MIT Capstone", desc: "AI-based malaria detection using CNNs." }
];

export default function Projects() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.name}>
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}