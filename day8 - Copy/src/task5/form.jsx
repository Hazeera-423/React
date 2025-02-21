
import React, { useState } from "react";
import './Form.css'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;
   
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isFormValid = false;
    } else {
      setEmailError("");
    }

   
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isFormValid = false;
    } else {
      setPasswordError("");
    }

  
    if (isFormValid) {
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label> 
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
           {/* {emailError && <p>{emailError}</p>} */}
           <p>{emailError}</p>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        {/* {passwordError &&<p>{passwordError}</p>} */}
        <p>{passwordError}</p>
      </div>
      <button type="submit">Submit</button>
     
    </form>
  );
};

export default Form;




