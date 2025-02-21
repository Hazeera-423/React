import React from "react";

const Chaildlist90 = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.Price}</p>
      <p>Rating: {product.rating} ★</p>
    </div>
  );
};

export default Chaildlist90;
