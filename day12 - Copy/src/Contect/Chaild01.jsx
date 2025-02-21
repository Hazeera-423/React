import { TextContext } from "./Parent01"


const Chaild01=()=>{
    return(
        <div>
        <TextContext.Consumer>
        {value=><h1>{value}</h1>}
        </TextContext.Consumer>
        </div>
    )
}
export default Chaild01
