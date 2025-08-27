import React from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle";
import ContentDisplay from "./components/ContentDisplay";
import styles from "./App.module.css";

const AppContent = () => {
  const { theme } = useTheme();

  // Função helper para aplicar classes CSS baseadas no tema
  const getThemeClass = (baseClass, darkClass = `${baseClass}Dark`) =>
    `${styles[baseClass]} ${theme === "dark" ? styles[darkClass] : ""}`;

  return (
    <div className={getThemeClass("appBg")}>
      <header className={getThemeClass("header")}>
        <h1 className={getThemeClass("title")}>
          Exemplo de Tema com ContextAPI
        </h1>
        <div className={getThemeClass("subtitle")}>
          Alternando entre tema claro e escuro com React Context
        </div>
      </header>

      <main>
        <ThemeToggle />
        <ContentDisplay />
      </main>

      <footer className={getThemeClass("footer")}>
        Feito com React, ContextAPI e CSS Modules
      </footer>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
