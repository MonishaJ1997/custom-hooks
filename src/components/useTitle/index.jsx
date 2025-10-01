import React, { useState } from "react";
import { useTitle } from "./useTitle.js";

const TitleExample = () => {
  const [count, setCount] = useState(0);
  useTitle(`Count: ${count}`);

  return <button onClick={() => setCount(count + 1)}>Increase {count}</button>;
};

export default TitleExample;
