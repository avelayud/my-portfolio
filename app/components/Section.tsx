import { type ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

const Section = ({ className = "", ...props }: SectionProps) => {
  const classes = ["section-container py-8", className].filter(Boolean).join(" ");

  return <section className={classes} {...props} />;
};

export default Section;
