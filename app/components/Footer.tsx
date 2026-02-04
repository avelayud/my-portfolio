import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 pb-8 text-xs md:text-sm text-text-secondary">
      <div className="px-4">
        {/* Outer centering wrapper */}
        <div className="mx-auto max-w-4xl">
          {/* Small, subtle divider */}
          <div className="mx-auto max-w-3xl border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Left: name + copyright */}
              <div className="flex-1">
                <p className="text-text-primary font-medium">
                  © {year} Arjuna Velayudam
                </p>
              </div>

              {/* Middle: Contact button */}
              <div className="flex-1 flex justify-center">
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center gap-2
                    rounded-av-md border border-border/40
                    bg-background/80 px-4 py-2
                    text-xs md:text-sm text-text-primary
                    hover:border-brand-primary/60 hover:bg-brand-secondary/10
                    hover:text-brand-primary transition
                  "
                >
                  <span>Contact</span>
                  <span aria-hidden>↗</span>
                </Link>
              </div>

              {/* Right: Social links */}
              <div className="flex-1 flex justify-start md:justify-end">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href="https://www.linkedin.com/in/arjuna-velayudam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/arjuna.velay/?igsh=dGY3ZTM2cnp6cW9v&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.strava.com/athletes/136319241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition"
                  >
                    Strava
                  </a>
                  <a
                    href="https://github.com/avelayud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
