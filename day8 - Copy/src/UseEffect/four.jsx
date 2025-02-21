import React, { useState, useEffect } from 'react';

function Four() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={()=>setCount(count-1)}>Decress Count</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default Four
