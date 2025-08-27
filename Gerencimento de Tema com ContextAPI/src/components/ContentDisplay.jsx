import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import styles from "./ContentDisplay.module.css";

const ContentDisplay = () => {
  const { theme } = useTheme();

  const getThemeClass = (baseClass, darkClass = `${baseClass}Dark`) =>
    `${styles[baseClass]} ${theme === "dark" ? styles[darkClass] : ""}`;

  return (
    <div className={getThemeClass("container")}>
      <div className={getThemeClass("cardsGrid")}>
        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>🎨</div>
          <h3 className={getThemeClass("cardTitle")}>Design</h3>
          <p className={getThemeClass("cardText")}>
            Interface moderna e responsiva com transições suaves entre temas
          </p>
        </div>

        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>⚛️</div>
          <h3 className={getThemeClass("cardTitle")}>React Context</h3>
          <p className={getThemeClass("cardText")}>
            Gerenciamento de estado global usando Context API de forma eficiente
          </p>
        </div>

        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>🌙</div>
          <h3 className={getThemeClass("cardTitle")}>Tema Persistente</h3>
          <p className={getThemeClass("cardText")}>
            Sua preferência de tema é salva e restaurada automaticamente
          </p>
        </div>

        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>📱</div>
          <h3 className={getThemeClass("cardTitle")}>Responsivo</h3>
          <p className={getThemeClass("cardText")}>
            Layout adaptável para desktop, tablet e dispositivos móveis
          </p>
        </div>

        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>🎯</div>
          <h3 className={getThemeClass("cardTitle")}>Performance</h3>
          <p className={getThemeClass("cardText")}>
            Otimizado com CSS Modules e transições eficientes
          </p>
        </div>

        <div className={getThemeClass("card")}>
          <div className={getThemeClass("cardIcon")}>🚀</div>
          <h3 className={getThemeClass("cardTitle")}>Moderno</h3>
          <p className={getThemeClass("cardText")}>
            Desenvolvido com as melhores práticas do React moderno
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay;
