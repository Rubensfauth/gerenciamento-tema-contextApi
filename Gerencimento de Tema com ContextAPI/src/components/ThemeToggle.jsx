import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeClass = (baseClass, darkClass = `${baseClass}Dark`) =>
    `${styles[baseClass]} ${theme === "dark" ? styles[darkClass] : ""}`;

  return (
    <div className={styles.toggleContainer}>
      <button
        onClick={toggleTheme}
        className={getThemeClass("toggleButton")}
        aria-label={`Mudar para tema ${theme === "light" ? "escuro" : "claro"}`}
      >
        <span className={getThemeClass("toggleIcon")}>
          {theme === "light" ? "🌙" : "☀️"}
        </span>
        <span className={getThemeClass("toggleText")}>
          Mudar para tema {theme === "light" ? "escuro" : "claro"}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
