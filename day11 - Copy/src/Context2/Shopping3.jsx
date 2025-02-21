import React from "react";

import ShoppingChaild from "./ShoppingChaild";

export const Cart1Context=React.createContext();

const ShoppingA=()=>{
    return(
        <div>
          <h2>Parent Component</h2>
            <Cart1Context.Provider value={{ product: "Laptop", price: 9292 }}>
                <ShoppingChaild/>
            </Cart1Context.Provider>
        </div>
    )
}
export default ShoppingA




