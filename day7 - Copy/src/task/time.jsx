import React, { useState } from 'react';

const DelayedCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increase after 1 second</button>
    </div>
  );
};

export default DelayedCounter;
