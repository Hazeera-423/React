import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time === 0)
         return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time remaining: {time} seconds</p>
    </div>
  );
};

export default CountdownTimer;
