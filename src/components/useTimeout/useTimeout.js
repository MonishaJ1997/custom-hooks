import { useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const saved = useRef();

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;
    const id = setTimeout(() => saved.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};
