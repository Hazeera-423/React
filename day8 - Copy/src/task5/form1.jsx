import React, { useState } from "react";
import "./App.css";
 
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
  
    setEmailError("");
    setPasswordError("");
 
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Invalid email format");
      return; 
    }
 
   
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return; 
    }
 
    
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
 
  return (
<div className="form-container">
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email"id="email"value={email} onChange={(e) => setEmail(e.target.value)} required/>
          {emailError && <div className="error-message">{emailError}</div>}
</div>
 
        <div className="form-group">
<label htmlFor="password">Password:</label>
<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    {passwordError && (<div className="error-message">{passwordError}</div> )}
</div>
 
        <button type="submit">Submit</button>
</form>
</div>
  );
};
 
export default App;