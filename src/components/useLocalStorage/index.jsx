import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";

const LocalStorageExample = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <div>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default LocalStorageExample;
