

import React from "react"

import Chaild21 from "./Chaild21"

export const InfoContext=React.createContext()
const Parent210=()=>{
   return(
    <div>
  <InfoContext.Provider value={'Hello world'}>
   <Chaild21/>
  </InfoContext.Provider>
    </div>
   )
}
export default Parent210