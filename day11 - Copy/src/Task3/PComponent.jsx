
import { createContext } from "react"
import Ccomponent from "./Ccomponent"
export const MsgContext=createContext()

const Pcom=()=>{
    return(
        <div>
        <MsgContext.Provider value={'Hello world!!!!!!!!!!'}>
            <Ccomponent/>
        </MsgContext.Provider>
        </div>
    )
}
export default Pcom