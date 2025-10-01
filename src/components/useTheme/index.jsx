import React from "react";
import { useTheme } from "./useTheme.js";

const ThemeExample = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ background: theme === "light" ? "#eee" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "10px" }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeExample;
