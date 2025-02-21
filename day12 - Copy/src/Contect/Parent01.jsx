
import React, { createContext } from "react"
import Chaild01 from "./Chaild01"

export const TextContext=createContext() 

const Parent01=()=>{

    return(
        <div>
       <TextContext.Provider value={'Hello Coder'}>
        <Chaild01/>
       </TextContext.Provider>
        </div>
    )
}
export default Parent01