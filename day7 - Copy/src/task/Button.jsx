import React, { useState } from 'react';
import './button.css'
const Button = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='bb'>
      <button onClick={() => setIsOn(!isOn)} >
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      <h1 className='cc'>The switch is {isOn ? "ON" : "OFF"}</h1>
    </div>
  );
};

export default Button;
