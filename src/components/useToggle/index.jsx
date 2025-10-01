import React from "react";
import { useToggle } from "./useToggle.js";

const ToggleExample = () => {
  const [isOpen, toggle] = useToggle(false);
  return (
    <div>
      <h2>{isOpen ? "Open" : "Closed"}</h2>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleExample;
