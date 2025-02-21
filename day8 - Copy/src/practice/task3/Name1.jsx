// import Name2 from "./Name2"



// function Name1(){
//    const contact=[
//     { name: "Ram", phone: "1234567891", email: "ram@example.com" },
//       { name: "Bob", phone: "2342345611", email: "bob@example.com" },
//       { name: "Sam", phone: "3459090090", email: "saml@example.com" }
     
//    ]
     
//     return(
//         <div>
//             <Name2  contact={contact}/>

//         </div>
//     )
// }
// export default Name1




import Chaild from "./Name2";


const Parent = () => {
    const contacts = [
      { name: "Ram", phone: "1234567891", email: "ram@example.com" },
      { name: "Bob", phone: "2342345611", email: "bob@example.com" },
      { name: "Sam", phone: "3459090090", email: "saml@example.com" }
     
    ];
  
    return (
      <div>
        <h1>Contact List</h1>
      
      <Chaild contacts={contacts}/>
        
      </div>
    );
  };
  
  export default Parent