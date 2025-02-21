import React, { useState, useEffect } from "react";
import './online.css'
const UserList = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); 

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  
  return (
    <div style={{ padding: "20px" }} className="one">
      <h2>User List</h2>
      <input
        type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
