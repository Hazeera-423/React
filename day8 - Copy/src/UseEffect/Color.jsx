import React, { useState, useEffect } from "react";

function Color() {
  const [isBlack, setIsBlack] = useState(true);

  
  useEffect(() => {
    document.body.style.backgroundColor = isBlack ? "black" : "gray";
  }, [isBlack]); 

  return (
    <div>
      <button onClick={() => setIsBlack((prev) => !prev)}>
        Change to {isBlack ? "gray" : "black"}
      </button>
    
    </div>
  );
}

export default Color

