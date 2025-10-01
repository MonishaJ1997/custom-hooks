import React from "react";
import { useHover } from "./useHover.js";

const HoverExample = () => {
  const [isHovered, ref] = useHover();

  return (
    <div ref={ref} style={{ padding: "20px", border: "1px solid black" }}>
      {isHovered ? "Hovered!" : "Not hovered"}
    </div>
  );
};

export default HoverExample;
