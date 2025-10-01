import React from "react";
import { useInput } from "./useInput.js";

const InputExample = () => {
  const name = useInput("");
  return (
    <div>
      <input {...name} placeholder="Enter name" />
      <p>Your name: {name.value}</p>
    </div>
  );
};

export default InputExample;
