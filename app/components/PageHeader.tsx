// app/components/PageHeader.tsx
type PageHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ kicker, title, subtitle }: PageHeaderProps) {
  return (
    <section className="section-container pt-20 pb-10">
      <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
        {kicker}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        {title}
      </h1>
      {subtitle ? (
        <p className="section-subtitle max-w-3xl">{subtitle}</p>
      ) : null}
    </section>
  );
}
