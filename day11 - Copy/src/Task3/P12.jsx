
import {createContext} from "react"
import C12 from "./C12"
export const InfoContext=createContext()

const P12=()=>{
    return(
        <div>
           <InfoContext.Provider value={'Hzeera'}>
            <C12/>
           </InfoContext.Provider>
        </div>
    )
}
export default P12




