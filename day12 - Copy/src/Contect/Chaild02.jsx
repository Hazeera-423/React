
import {useContext } from "react"
import { Text1Context } from "./Parent02"
const Chaild02=()=>{
    const value=useContext(Text1Context)
    return(
        <div>
         {value}
        </div>
    )
}
export default Chaild02