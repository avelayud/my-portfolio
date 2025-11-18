import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border/60 pt-6 pb-8 text-xs md:text-sm text-text-secondary">
      <div className="section-container flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-0">
        {/* Left: copyright */}
        <div className="space-y-1">
          <p className="text-text-primary font-medium">
            © {year} Arjuna Velayudam
          </p>
          <p className="max-w-md">
            Built with Next.js & Tailwind. All opinions and projects are my own.
          </p>
        </div>

        {/* Right: quick links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm">
          <Link href="/" className="hover:text-brand-primary transition">
            Overview
          </Link>
          <Link href="/#experience" className="hover:text-brand-primary transition">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-brand-primary transition">
            Projects
          </Link>
          <Link href="/education" className="hover:text-brand-primary transition">
            Education
          </Link>
          <Link href="/contact" className="hover:text-brand-primary transition">
            Contact
          </Link>
          <a
            href="mailto:velayudamarjuna@gmail.com"
            className="hover:text-brand-primary transition"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/arjuna-velayudam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-primary transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
