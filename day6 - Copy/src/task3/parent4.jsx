import Parent2 from '../task2/Parent2';
import './parent4.css'

const Parent4 = () => {
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
                <Parent2 />
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
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
         <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
     </form>
 </section>
  </main>
     <footer className="footer">
         <p>© 2025 Frontend Developer Portfolio. All rights reserved.</p>
     </footer>
    </div>
    );
};

export default Parent4;
