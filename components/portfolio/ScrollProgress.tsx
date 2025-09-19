"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
      setIsVisible(scrollPx > 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-3 bg-gray-200 dark:bg-muted/30 z-50 transition-opacity duration-300 shadow-sm ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-primary dark:via-primary/90 dark:to-primary/80 transition-all duration-150 ease-out shadow-md"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
