import React, { useState } from "react";
import { usePrevious } from "./usePrevious.js";

const PreviousExample = () => {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prev}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousExample;
