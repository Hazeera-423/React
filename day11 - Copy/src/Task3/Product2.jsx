
import { useContext } from "react";
import { Cart1Context } from "./Product1";
import "./Product.css";
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 }
];

const ProductList = () => {
  const { addToCart } = useContext(Cart1Context);
  return (
    <div className="product-container">
      <h2>🛍️ Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name} - ${product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
