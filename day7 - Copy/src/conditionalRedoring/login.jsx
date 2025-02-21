import React, { useState } from "react";
import './login.css'
function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="aa">
      {isLoggedIn ? (<h1>Welcome back, User!</h1>) : (<h1>Please log in.</h1>)}
      
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Greeting;
