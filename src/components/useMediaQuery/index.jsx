import React from "react";
import { useMediaQuery } from "./useMediaQuery.js";

const MediaQueryExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return <p>{isMobile ? "Mobile view" : "Desktop view"}</p>;
};

export default MediaQueryExample;
