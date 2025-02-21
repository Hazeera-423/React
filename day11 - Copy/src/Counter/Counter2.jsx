

import { useContext } from "react";
import { CountContext } from "./Counter1";

const Counter30 = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="aa">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter30;
