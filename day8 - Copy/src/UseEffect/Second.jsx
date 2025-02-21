import React, { useState, useEffect } from 'react';

function Second() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Second
