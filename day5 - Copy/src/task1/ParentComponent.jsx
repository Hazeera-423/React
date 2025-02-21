
import ChildComponent from "./ChaildComponent";
import './parent.css'
const ParentComponent = () => {
  const userInfo = {
    name: "Lakshmi",
    age: 30,
    address: "123 Main St, KPHB, Hyderabad"
  };

  return (
    <div className="cc">
      <h1>Parent Component</h1>
    
      <ChildComponent user={userInfo}/>
    </div>
  );
};

export default ParentComponent;