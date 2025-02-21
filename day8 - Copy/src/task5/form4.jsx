import React, { useState} from "react";
import './Form.css';

const Form4 = () => {
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
     alert('Your form submited')
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
    
    
      
  );
};

export default Form4;
