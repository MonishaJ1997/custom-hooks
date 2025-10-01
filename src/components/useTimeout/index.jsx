import React from "react";
import { useTimeout } from "./useTimeout.js";

const TimeoutExample = () => {
  useTimeout(() => alert("Hello after 3s!"), 3000);
  return <p>Wait for 3 seconds alert...</p>;
};

export default TimeoutExample;
