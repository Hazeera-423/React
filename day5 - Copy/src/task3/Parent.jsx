import Child from "./Chaild";

const Parent = () => {
    const contacts = [
      { name: "Ram", phone: "1234567891", email: "ram@example.com" },
      { name: "Bob", phone: "2342345611", email: "bob@example.com" },
      { name: "Sam", phone: "3459090090", email: "saml@example.com" }
     
    ];
  
    return (
      <div>
        <h1>Contact List</h1>
      
        <Child contacts={contacts}/>
      </div>
    );
  };
  
  export default Parent
  