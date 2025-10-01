import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  const setAndStore = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  return [value, setAndStore];
};
