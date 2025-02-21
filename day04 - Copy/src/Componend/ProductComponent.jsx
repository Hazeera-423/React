import './ProductComponent.css'


const ProductComponent = ({ name, price, description }) => {
    return (
      <div className="pc">
        <h2>{name}</h2>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    );
  };
  
  export default ProductComponent;
  