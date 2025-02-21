import { createContext, useContext } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartItem = { product: "Laptop", price: 9999 }; 

  return (
    <CartContext.Provider value={cartItem}>
      {children}
    </CartContext.Provider>
  );
};


const CartItem = () => {
  const { product, price } = useContext(CartContext); 
  return (
    <div>
      <h3>🛒 {product}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

const CartList = () => <CartItem />;
const ShoppingCart = () => <CartList />;

const Shopping2 = () => {
  return (
    <CartProvider>
      <h2>Shopping Cart</h2>
      <ShoppingCart />
    </CartProvider>
  );
};

export default Shopping2
