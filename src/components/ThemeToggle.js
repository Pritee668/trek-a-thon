import React from "react";

function ThemeToggle({ toggleDarkMode, darkMode }) {
  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      Toggle {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}

export default ThemeToggle;
