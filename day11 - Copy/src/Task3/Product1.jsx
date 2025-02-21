import { createContext,useState } from "react";
import ProductList from "./Product2";

export const Cart1Context = createContext();

const CartProvider = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Cart1Context.Provider value={{ cart, addToCart }}>
   <ProductList/>
    </Cart1Context.Provider>
  );
};

export default CartProvider;


