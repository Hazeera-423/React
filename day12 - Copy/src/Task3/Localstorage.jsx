import React, { useState, useEffect } from "react";
 
function LocalStorageExample() {
  const [name, setName] = useState("");
 
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);
 
  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    }
  }, [name]);
 
  return (
<div>
<h1>Welcome, {name || "Guest"}</h1>
<input type="text" value={name} onChange={(e) => setName(e.target.value)}placeholder="Enter your name"/>
</div>
  );
}
 
export default LocalStorageExample;