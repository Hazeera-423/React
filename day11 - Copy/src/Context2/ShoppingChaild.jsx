import { Cart1Context } from "./Shopping3"
import React from "react";

const ShoppingChaild=()=>{
    return(
        <div>
           <Cart1Context.Consumer>
          
            {/* {({ product, price }) => (
                    <>
                        <h3>Product: {product}</h3>
                        <h3>Price: {price}</h3>
                    </>
                )} */}
                {(value) => (
                    <>
                        <h3>Product 🛒 : {value.product}</h3>
                        <h3>Price: {value.price}</h3>
                    </>
                )}
           
           </Cart1Context.Consumer>
        </div>
    )
}
export default ShoppingChaild