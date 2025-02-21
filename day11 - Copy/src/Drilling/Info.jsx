const UserProfile = ({ name, age }) => {
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
    );
  };
  const UserDetails = ({ name, age }) => {
    return <UserProfile name={name} age={age} />;
  };
  
 
  const UserContainer = ({ name, age }) => {
    return <UserDetails name={name} age={age} />;
  };
  
  const Info = () => {
    return (
      <div>
        <h2>User Info</h2>
       
        <UserContainer name="Lakshmi" age={30} />
      </div>
    );
  };
  
  export default Info
  