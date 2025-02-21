


import { useContext } from "react"
import { InfoContext } from "./P12"

const C12=()=>{
    const value=useContext(InfoContext)
  return(
        <div>
        <h1>{value}</h1>
        </div>
    )
}
export default C12




