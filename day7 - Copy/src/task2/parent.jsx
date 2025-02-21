
import React, { useState } from 'react';
import './parent.css'
const Parent4 = () => {
    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
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
              <h3>Lakshmi</h3>
              <img src="M.jpg" alt="" />
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
    <form>
         <div className="form-group">
            <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required  value={text} onChange={(e)=> setText(e.target.value)}/>
         
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
         <input type="email" id="email" name="email" placeholder="Enter your email" required  value={text1} onChange={(e)=> setText1(e.target.value)}  />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here" required  ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
     </form>
     <h3>Your Name:{text}</h3>
     <h4>Your Email:{text1}</h4>

 </section>
  </main>
     <footer className="footer">
         <p>© 2025 Frontend Developer Portfolio. All rights reserved.</p>
     </footer>
    </div>
    );
};

export default Parent4;