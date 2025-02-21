


import GrandChildComponent from "./GrandChaildComponent";
import './chaild.css'

const ChildComponent = ({ user }) => {
  return (
    <div className="aa">
      <h2>Child Component</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
       
        
      <GrandChildComponent address={user.address} />
    </div>
  );
};
export default ChildComponent;