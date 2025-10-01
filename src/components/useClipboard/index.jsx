import React, { useState } from "react";
import { useClipboard } from "./useClipboard.js";

const ClipboardExample = () => {
  const [text, setText] = useState("Copy me!");
  const { copied, copy } = useClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>Copy</button>
      {copied && <span>Copied!</span>}
    </div>
  );
};

export default ClipboardExample;
