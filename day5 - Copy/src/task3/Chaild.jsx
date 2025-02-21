
import './Chaild.css'
const Child = ({ contacts }) => {
    return (
      <div className="grid-container">

        {contacts.map((contact, index) => (
          <div key={index} className="grid-item">
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
        ))}
        
      </div>
    );
  };
  
  export default Child