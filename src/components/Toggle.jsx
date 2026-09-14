import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../contexts/ThemeContext";

export const Toggle = () => {
  const { darkMode, setDarkMode } = useTheme();

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
