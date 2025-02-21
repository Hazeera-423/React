import { createContext, useContext } from "react";

// Step 1: Create Context
const UserContext = createContext();

// Step 2: Create Provider Component
const UserProvider = ({ children }) => {
  const user = { name: "John Doe", age: 30 }; // Centralized state

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Use Context in the necessary component
const UserProfile = () => {
  const { name, age } = useContext(UserContext); // Access context directly
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

// Intermediate components (No need to pass props manually anymore!)
const UserDetails = () => <UserProfile />;
const UserContainer = () => <UserDetails />;

const Info2= () => {
  return (
    <UserProvider>
      <h2>User Info</h2>
      <UserContainer />
    </UserProvider>
  );
};

export default Info2
