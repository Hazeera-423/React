
import './grandC.css'
const GrandChildComponent = ({ address }) => {
    return (
      <div className="bb">
        <h3>Grandchild Component</h3>
        <p>Address: {address}</p>
      </div>
    );
  };
  
  export default GrandChildComponent;