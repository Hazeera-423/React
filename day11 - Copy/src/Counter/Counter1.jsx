


import { useState, createContext } from "react";

import "./Counter.css"; 
import Counter30 from "./Counter2";

 export const CountContext = createContext()

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
     <Counter30/>
      </CountContext.Provider>
    </div>
  );
};

export default Counter2;
