
import { createContext} from "react"
import Chaild02 from "./Chaild02"
 export const Text1Context=createContext()

const Parent02=()=>{
    return(
        <div>
         <Text1Context.Provider value={"Welcome Back"}>
            <Chaild02/>
         </Text1Context.Provider>
        </div>
    )
}
export default Parent02