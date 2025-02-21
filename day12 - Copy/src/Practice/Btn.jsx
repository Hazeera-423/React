import { useState } from "react"


const Btn21=()=>{
    const [count,setCount]=useState(0)
    return(
        <div>
          <p>Count:{count}</p>
          <button  onClick={()=>setCount(count+1)}>Increase</button>
          <button onClick={()=>setCount(count-1)}>Decrease</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Btn21