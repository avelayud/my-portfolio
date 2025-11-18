"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 250;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className="
        fixed
        bottom-24 right-6
        md:bottom-20 md:right-10
        z-40
        rounded-full border border-border/40 bg-background/90
        shadow-skeuo-soft backdrop-blur
        p-3 md:p-3.5
        text-text-primary hover:text-brand-primary
        hover:bg-brand-secondary/10 transition
      "
    >
      <span className="block text-lg leading-none">↑</span>
    </button>
  );
};

export default BackToTopButton;
