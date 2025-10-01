import { useState } from "react";

export const useTheme = (initial = "light") => {
  const [theme, setTheme] = useState(initial);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return { theme, toggleTheme };
};
