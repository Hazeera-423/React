import React, {useState} from 'react'
const UserInfo = () => {
    const [user, setUser] = useState({ name: "Rani", age: 30 , Place:'Hyderabad'});
  
    const updateinfo = () => {
    setUser({  name: "Lakshime", age:23 ,Place:'Bangalore'})
    };
  
    return (
      <div>
        <h3>Name: {user.name}</h3>
        <h4>Age: {user.age}</h4>
        <h4>Place:{user.Place}</h4>
        <button onClick={updateinfo}>Change Name</button>
      </div>
    );
  };
export default  UserInfo 