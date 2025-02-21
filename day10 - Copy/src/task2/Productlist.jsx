
import Chaildlist90 from "./Chaild90";

const Productlist2 = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
      
        <Chaildlist90 key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Productlist2;
