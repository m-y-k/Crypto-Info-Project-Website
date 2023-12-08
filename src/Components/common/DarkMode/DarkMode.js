import React, { useContext } from "react";
import * as ReactDOM from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import DarkThemeContext from "../../../context/darkThemeContext";

const DarkMode = () => {
  const root = document.documentElement;
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);

  const toggleDarkMode = () => {
    if (!darkMode) {
      root.style.setProperty("--black", "#111");
      root.style.setProperty("--white", "#fff");
      root.style.setProperty("--darkgrey", "#1b1b1b");
      root.style.setProperty("--grey", "#808080");
      root.style.setProperty("--linkColor", "#808080");
      root.style.setProperty("--wrapperColor", "#1b1b1b");
    } else {
      root.style.setProperty("--black", "#fff");
      root.style.setProperty("--white", "#111");
      root.style.setProperty("--grey", "#1b1b1b");
      root.style.setProperty("--darkgrey", "#808080");
      root.style.setProperty("--linkColor", "#A9A8A8");
      root.style.setProperty("--wrapperColor", "#E5E6E2");
    }
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "0rem" }}
      checked={darkMode}
      onChange={toggleDarkMode}
      size={50}
      moonColor="var(--blue)"
    />
  );
};
export default DarkMode;
