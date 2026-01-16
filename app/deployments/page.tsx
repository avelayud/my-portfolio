// app/deployments/page.tsx

export default function DeploymentsPage() {
  return (
    <>
      {/* Header */}
      <section className="section-container pt-20 pb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
          Deployments &amp; Product Work
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          Tools, models, and systems I&apos;ve helped ship.
        </h1>
        <p className="section-subtitle max-w-3xl">
          From internal hubs in consulting to ML capstones and data products,
          these are the things that moved beyond slides into working artifacts.
        </p>
      </section>

      {/* Internal / Deal Tools */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2">Deal &amp; Internal Tools</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Decision-support tools built inside consulting and deal environments,
          where speed and explainability matter as much as accuracy.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Deal Scenario Analysis Hub */}
          <article className="card-skeuo">
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
              <li>• Aggregated and normalized financial and operational inputs.</li>
              <li>• Framed outputs around questions partners actually ask in deal rooms.</li>
              <li>• Iterated based on feedback from teams using it across engagements.</li>
            </ul>
          </article>

          {/* Business Reporting / Metrics Tool */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              INTERNAL TOOL · METRICS HUB
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Business Reporting &amp; Sector Metrics Tool
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Metrics hub combining internal project data and market benchmarks
              to make it easier for teams to compare companies, sectors, and
              deal theses without rebuilding the same views from scratch.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Defined a common schema for sector- and deal-level metrics.</li>
              <li>• Built views that could be reused across pitches and diligence work.</li>
              <li>• Focused on reducing time from question to “good enough” answer.</li>
            </ul>
          </article>

          {/* Benchmarking Tool */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              ANALYTICS · BENCHMARKING
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Benchmarking &amp; Performance Comparison Tool
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Framework and templates to benchmark companies against peers across
              margin, capital intensity, and operational metrics, supporting both
              diligence and portfolio work.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Standardized metric definitions to reduce debate about the numbers.</li>
              <li>• Built reusable views aligned to how investors talk about businesses.</li>
              <li>• Enabled faster, more consistent comparisons across targets.</li>
            </ul>
          </article>

          {/* A&amp;M Trucking */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              OPERATIONS · NETWORK MODEL
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              A&amp;M Trucking Network &amp; Cost Model
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Operational and financial model for a trucking / logistics network,
              tying route patterns, utilization, and cost structure to concrete
              levers for performance improvement.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Mapped routes, lanes, and asset utilization into a single structure.</li>
              <li>• Linked operational changes directly to unit economics.</li>
              <li>• Helped teams see which levers had real impact on cost per mile.</li>
            </ul>
          </article>
        </div>
      </section>
      {/* Data Products & In-Progress Builds */}
      <section className="section-container pb-12">
        <h2 className="section-title mb-2">Data Products &amp; In-Progress Builds</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Experiments where I&apos;m closer to the metal — designing schemas,
          writing SQL/Python, and thinking about how operators would actually use the output.
        </p>

      
        <div className="grid gap-6 md:grid-cols-2">
          {/* MyTab */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              DATA PRODUCT · IN PROGRESS
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              MyTab — Restaurant Tip &amp; Performance Analytics
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Prototype data product to quantify server performance and design a fair,
              incentive-aligned tip pool — giving operators a clearer picture of who
              drives revenue and why.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Synthetic PoS schema in PostgreSQL for tickets, tips, and shifts.</li>
              <li>• Python-based analysis for revenue, tip distribution, and fairness metrics.</li>
              <li>• Designed around metrics that feel explainable and fair to staff.</li>
            </ul>
          </article>

          {/* FDS / Defense project (high level) */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              ANALYTICS · DEFENSE / INDUSTRIALS
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              FDS Project — Defense &amp; Industrial Analytics
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Analytical work exploring defense and industrial spend, focused on building
              a structured view of segments, players, and where value is likely to accrue.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Organized messy data into a usable, queryable structure.</li>
              <li>• Framed outputs around investor- and operator-relevant questions.</li>
              <li>• Served as a sandbox for further ML / forecasting ideas.</li>
            </ul>
          </article>  

          {/* AML Network Analysis (Peregrine take-home) */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              DATA ANALYSIS · AML / NETWORKS
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Money Laundering Detection — Transaction Graph & Suspect Prioritization
            </h3>

            <p className="text-sm text-text-secondary mb-3">
              Investigated a large wire-transfer dataset to surface likely laundering behavior.
              Built a hypothesis-driven pipeline that flags coordinated pickup timing, repeated
              sender→payee channels, and concentration at endpoints — then validated patterns
              with an interpretable network graph.
            </p>

            <ul className="text-xs text-text-secondary space-y-1 mb-4">
              <li>• Lag analysis to isolate “coordination” (fast pickups) vs. long-tail noise.</li>
              <li>• Frequency + repeated dyads to separate infrastructure routes from burst behavior.</li>
              <li>• Network visualization where size/width/color encode involvement, repetition, and speed.</li>
            </ul>

            {/* Mini “always-a-table” evidence summary */}
            <div className="overflow-hidden rounded-xl border border-border-subtle">
              <table className="w-full text-xs">
                <thead className="bg-surface-2 text-text-tertiary">
                  <tr>
                    <th className="text-left font-medium px-3 py-2">Signal</th>
                    <th className="text-left font-medium px-3 py-2">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-t border-border-subtle">
                    <td className="px-3 py-2">Fast pickup (lag)</td>
                    <td className="px-3 py-2">Timing coordination indicator; clusters by actor/channel.</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="px-3 py-2">Repeated dyads</td>
                    <td className="px-3 py-2">Controlled “channels” are stronger laundering signal than volume alone.</td>
                  </tr>
                  <tr className="border-t border-border-subtle">
                    <td className="px-3 py-2">Endpoint concentration</td>
                    <td className="px-3 py-2">Highlights likely aggregation / cash-out nodes for investigation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      {/* Academic & ML Projects */}
      <section className="section-container pb-24">
        <h2 className="section-title mb-2">Academic &amp; ML Projects</h2>
        <p className="section-subtitle max-w-3xl mb-6">
          Work from MIT and Northeastern where the output was a working model or pipeline,
          not just a paper — with an eye toward how these ideas could live in the real world.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Engineering Capstone */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              CAPSTONE · COMPUTER VISION
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Facial Expression-Based Pain Assessment (Engineering Capstone)
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Spearheaded a remote pain assessment capstone using machine learning to
              adapt to COVID-19&apos;s constraints on in-person care. The team captured
              facial expression data remotely via Zoom and used OpenFace 2.0 to extract
              facial action units (AUs), training an SVM model to estimate pain levels.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Defined project scope and methodology in collaboration with advisors.</li>
              <li>• Used OpenFace 2.0 to convert video into structured AU features.</li>
              <li>• Trained an SVM model whose performance improves with new data over time.</li>
            </ul>
          </article>

          {/* Malaria Capstone */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              MIT BOOTCAMP · CNN
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Malaria Detection Capstone (MIT Python for AI &amp; Data)
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              End-to-end computer vision pipeline to detect malaria from blood smear images
              using convolutional neural networks, with attention to data quality,
              model performance, and potential deployment constraints in low-resource settings.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Built data loaders, augmentations, and training loops in Python.</li>
              <li>• Tuned CNN architectures and evaluated against baselines.</li>
              <li>• Considered how such a system might integrate with real clinical workflows.</li>
            </ul>
          </article>

          {/* SVHN Digit Recognition */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              ML PROJECT · VISION
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Street View House Number Digit Recognition
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Recognized street view house number digits using artificial and convolutional
              neural networks on the SVHN dataset, exploring the tradeoffs between
              simpler models and deeper CNNs.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Implemented and compared basic ANNs and CNNs.</li>
              <li>• Experimented with hyperparameters, regularization, and augmentation.</li>
              <li>• Focused on interpretability and where the models failed.</li>
            </ul>
          </article>

          {/* FoodHub / other analytics project */}
          <article className="card-skeuo">
            <p className="text-[11px] font-semibold text-brand-primary mb-1">
              ANALYTICS · PYTHON / STATS
            </p>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              FoodHub Order Analysis
            </h3>
            <p className="text-sm text-text-secondary mb-3">
              Analytical project for a food aggregator, using Python to understand order
              patterns, customer behavior, and platform dynamics through EDA and statistics.
            </p>
            <ul className="text-xs text-text-secondary space-y-1">
              <li>• Performed extensive EDA on order and customer-level data.</li>
              <li>• Used statistical tests to validate hypotheses about demand patterns.</li>
              <li>• Translated findings into simple, decision-ready recommendations.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
