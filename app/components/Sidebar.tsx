"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { key: "overview", label: "Overview", href: "/" },
  { key: "experience", label: "Experience", href: "/#experience" },
  { key: "featured-work", label: "Deployments & Product", href: "/#featured-work" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "education", label: "Education", href: "/education" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

function isActive(key: string, href: string, pathname: string) {
  const baseHref = href.split("#")[0];

  if (key === "overview") return pathname === "/";
  if (key === "projects") return pathname.startsWith("/projects");
  if (key === "education") return pathname.startsWith("/education");
  if (key === "about") return pathname.startsWith("/about");
  if (key === "contact") return pathname.startsWith("/contact");

  if (baseHref === "/" && pathname === "/") return false;

  return false;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="sidebar-shell hidden md:flex">
        <div>
          {/* Logo / Initials */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-text-primary"
            >
              AV
            </Link>
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">
              Strategy · Product · Data
            </p>
          </div>

          {/* Nav Links */}
          <nav className="space-y-4">
            {navItems.map((item) => {
              const active = isActive(item.key, item.href, pathname);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-8 text-[11px] text-text-muted">
          Available for strategy &amp; deployment roles.
        </div>
      </aside>

      {/* MOBILE TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-background/95 border-b border-divider px-4 py-3 md:hidden">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-text-primary"
        >
          AV
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center h-8 w-8 rounded-av-md border border-divider"
          aria-label="Toggle navigation"
        >
          {/* simple hamburger icon */}
          <div className="space-y-1.5">
            <span className="block h-[2px] w-4 bg-text-primary" />
            <span className="block h-[2px] w-4 bg-text-primary" />
            <span className="block h-[2px] w-4 bg-text-primary" />
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY + DRAWER */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Slide-out panel */}
          <div className="fixed top-0 left-0 bottom-0 z-50 w-64 bg-background shadow-skeuo-soft px-6 py-6 flex flex-col justify-between md:hidden">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <Link
                  href="/"
                  className="text-xl font-bold tracking-tight text-text-primary"
                  onClick={handleNavClick}
                >
                  AV
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center h-8 w-8 rounded-av-md border border-divider"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted mb-4">
                Strategy · Product · Data
              </p>

              <nav className="space-y-4">
                {navItems.map((item) => {
                  const active = isActive(item.key, item.href, pathname);
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={`nav-link ${active ? "nav-link-active" : ""}`}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-8 text-[11px] text-text-muted">
              Available for strategy &amp; deployment roles.
            </div>
          </div>
        </>
      )}
    </>
  );
}
