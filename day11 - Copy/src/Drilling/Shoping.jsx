const CartItem = ({ product, price }) => {
    return (
      <div>
        <h3>🛒 {product}</h3>
        <p>Price: ${price}</p>
      </div>
    );
  };
  

  const CartList = ({ product, price }) => {
    return <CartItem product={product} price={price} />;
  };
  
 
  const ShoppingCart = ({ product, price }) => {
    return <CartList product={product} price={price} />;
  };
  
  const Shopping = () => {
    return (
      <div>
        <h2>Shopping Cart</h2>
    
        <ShoppingCart product="Laptop" price={999} />
      </div>
    );
  };
  
  export default Shopping
  