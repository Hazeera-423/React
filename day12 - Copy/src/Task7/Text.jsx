

import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`You typed: ${text}`);
  }, [text]);

  return (
    <div>
      <h2>Typing Effect</h2>
      <input type="text" placeholder="Type something..." value={text} onChange={(e) => setText(e.target.value)}/>
      <p>{message}</p>
   
    </div>
  );
};

export default TypingEffect;
