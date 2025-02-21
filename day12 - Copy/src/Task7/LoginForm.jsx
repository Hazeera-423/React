import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
