

// function Name2(contact){
//     return(
//         <div>

// {contact.map((contact, index) => (
//           <div key={index} className="grid-item">
//             <h2>{contact.name}</h2>
//             <p>Phone: {contact.phone}</p>
//             <p>Email: {contact.email}</p>
//           </div>
//         ))}

        
       
//         </div>
//     )
// }
// export default Name2




const Chaild = ({ contacts }) => {
    return (
      <div>

        {contacts.map((contact, index) => (
          <div key={index}>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
        ))}
        
      </div>
    );
  };
  
  export default Chaild