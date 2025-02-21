import { useEffect, useState } from "react"

function Count(){

    const[count,setCount]=useState(0)
    
    useEffect(()=>{
           console.log("count is:",{count})
    },[count])


  return(
    <div>
        <p>Count:{count}</p>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  )
}
export default Count