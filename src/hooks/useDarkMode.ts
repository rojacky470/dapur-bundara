import { useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored) {
        return stored;
      }
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  const [mounted, setMounted] = useState(false);

  // Apply theme to document
  useEffect(() => {
    setMounted(true);
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      // Only update if user hasn't set a preference
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const setDark = useCallback(() => setTheme("dark"), []);
  const setLight = useCallback(() => setTheme("light"), []);

  return {
    theme,
    toggleTheme,
    setDark,
    setLight,
    isDark: theme === "dark",
    mounted,
  };
}
