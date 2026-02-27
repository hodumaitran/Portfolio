import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const Toggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.body;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className="switch-container">
      <button
        onClick={toggleTheme}
        className="switch !p-0 !bg-transparent"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        role="switch"
        aria-checked={darkMode}
      >
        <span className="toggle flex items-center justify-center">
          <FontAwesomeIcon
            icon={darkMode ? faMoon : faSun}
            className="text-xs text-[#667eea]"
          />
        </span>
      </button>
    </div>
  );
};
