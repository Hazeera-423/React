
import { useContext } from "react"
import { MsgContext } from "./PComponent"

const Ccomponent=()=>{
    const value = useContext(MsgContext);
    return(
        <div>
          <h1> {value}</h1>
        </div>
    )
}
export default Ccomponent




