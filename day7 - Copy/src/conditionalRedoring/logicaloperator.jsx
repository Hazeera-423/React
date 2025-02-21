// function Notification({ isVisible }) {
//     return (
//       <div>
//         <h1>Main Content</h1>
//         {isVisible && <p>This is a notification message!</p>}
//       </div>
//     );
//   }
  
//   export default Notification;
  
import React, { useState } from "react";

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
     
      {isLoggedIn && <h1>Welcome back, User!</h1>}

  
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Welcome;
