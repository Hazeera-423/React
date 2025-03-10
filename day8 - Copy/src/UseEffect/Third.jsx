import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); 
    };
  }, []); 

  return <h1>Seconds elapsed: {seconds}</h1>;
}

export default Timer;
