import { useState,useEffect } from "react"

const Input=()=>{
const[count,setCount]=useState(0)

useEffect(()=>{
   console.log('hello') 
},[count])
    return(
       
       <div>
        <p> Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase+</button>
         <button onClick={()=>setCount(count-1)}>Decrease-</button>
       </div>
       
     
    )
}
export default Input