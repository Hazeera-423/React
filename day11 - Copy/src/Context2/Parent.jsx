import ChaildC from "./ComponentC";

import React from "react";

export const UserContext = React.createContext();

const Parent90=()=>{
    return(
    <div>
        <UserContext.Provider   value={"Hello world"}>

        <ChaildC/>
        
        </UserContext.Provider>
      
    </div>
    )
}
export default Parent90