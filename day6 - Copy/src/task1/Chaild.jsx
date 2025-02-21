
import './chaild.css'
const Chaild=({arr})=>{
 return(
    <div>
    
          {arr.map((arr,index)=>(
        <li key={index} className="li">{arr}</li>
          )

          )}

    </div>
 )
}
export default Chaild