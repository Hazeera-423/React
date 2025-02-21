import React, { useState } from 'react';
import './parent.css'
const Counter = () => {
 
  const [count, setCount] = useState(0);

  return (
    <div className='aa'>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
