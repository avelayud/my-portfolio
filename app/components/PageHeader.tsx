// app/components/PageHeader.tsx
type PageHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ kicker, title, subtitle }: PageHeaderProps) {
  return (
    <section className="section-container pt-14 pb-6 md:pt-16 md:pb-6">
      <p className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary mb-2">
        {kicker}
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
        {title}
      </h1>

      {subtitle ? (
        <p className="text-sm md:text-base text-text-secondary max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </section>
  );
}
