import React, { useState } from "react";
import { useDebounce } from "./useDebounce.js";

const DebounceExample = () => {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 500);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Debounced value: {debounced}</p>
    </div>
  );
};

export default DebounceExample;
