import React, { useState } from "react";
import './light.css'

const Light = () => {

  const [theme, setTheme] = useState("light");  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`app ${theme}`}>
      <header className="header" >
        <h1>Theme Toggle Color</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>
      
    </div>
  );
};

export default Light;
