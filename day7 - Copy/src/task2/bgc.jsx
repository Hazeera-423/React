
import React, { useState } from 'react';

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: "2rem" }}>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
    </div>
  );
};

export default ColorChanger;
