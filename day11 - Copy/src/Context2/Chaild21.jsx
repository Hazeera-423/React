import { InfoContext } from "./Parent21"


const Chaild21=()=>{
    return(
        <div>
   <InfoContext.Consumer>
   {value => <div>{value}</div>} 
   </InfoContext.Consumer>
        </div>
    )
}
export default Chaild21