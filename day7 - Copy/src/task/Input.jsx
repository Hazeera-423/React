import React, { useState } from 'react';

const Input = () => {
  const [text, setText] = useState("");
  return (
    <div>
     <h2>Enter Your Text Below</h2>
     <input type="text"  value={text} onChange={(e)=> setText(e.target.value)}/>

     <h2>Your Text:{text}</h2>
    </div>
  );
};

export default Input
