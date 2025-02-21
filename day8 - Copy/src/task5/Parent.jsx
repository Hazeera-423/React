
import './parent.css'
import React, { useState } from "react";
import Parent21 from './Parent1';

const Parent11 = () => {

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [username, setUsername] = useState("");
      const [age, setAge] = useState("");
      const [phone, setPhone] = useState("");
      const [message, setMessage] = useState("");
    
      const [emailError, setEmailError] = useState("");
      const [passwordError, setPasswordError] = useState("");
      const [usernameError, setUsernameError] = useState("");
      const [ageError, setAgeError] = useState("");
      const [phoneError, setPhoneError] = useState("");
    
      const validateEmail = (email) => {
        return email.includes("@") && email.includes(".");
      };
    
      const validatePhone = (phone) => {
        const digits = [...phone].filter((char) => char >= '0' && char <= '9');
        return digits.length === 10;
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
    
       
        if (username.trim() === "") {
          setUsernameError("Username cannot be empty");
          isFormValid = false;
        } else {
          setUsernameError("");
        }
    
       
        if (isNaN(age) || age <= 0) {
          setAgeError("Age must be a positive number");
          isFormValid = false;
        } else {
          setAgeError("");
        }
    
     
        if (!validatePhone(phone)) {
          setPhoneError("Phone number must be 10 digits long and contain only numbers");
          isFormValid = false;
        } else {
          setPhoneError("");
        }
    
        if (isFormValid) {
          console.log("Email:", email);
          console.log("Password:", password);
          console.log("Username:", username);
          console.log("Age:", age);
          console.log("Phone:", phone);
          console.log("Message:", message);
    
         
          setEmail("");
          setPassword("");
          setUsername("");
          setAge("");
          setPhone("");
          setMessage("");
        }
      };
    
    return (
        <div className="container">
            <nav className="navbar">
                <a href="Home">Home</a>
                <a href="about">About</a>
                <a href="Contact">Contact</a>
                <a href="UserCard">User Card</a>
            </nav>

            <aside className="sidebar">
                <h2>Manager</h2>
              
                <Parent21/>
            </aside>
            
    <main className="main-content">
       <p>
         <h3>About Me</h3>
            I am a Frontend developer. A frontend developer is a programmer who specializes in creating the 
             user-facing portion of websites and web applications. They focus on ensuring that users can 
             interact seamlessly and effectively with the interface, making it functional, visually appealing, and responsive.
        </p>
  <section className="contact-form">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
       <p className="error">{emailError}</p>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <p className="error">{passwordError}</p>
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p className="error">{usernameError}</p>
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <p className="error">{ageError}</p>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <p className="error">{phoneError}</p>
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
 </section>
  </main>
     <footer className="footer">
         <p>© 2025 Frontend Developer Portfolio. All rights reserved.</p>
     </footer>
    </div>
    );
};

export default Parent11;