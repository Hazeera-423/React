import React,{useState} from 'react'
function Count(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>count:{count}</h1>
     <button onClick={()=>setCount(count+1)}>increase</button>
     <button onClick={() => setCount(count - 1)}>Decrease</button>
     <button onClick={()=>setCount(0)}>Reset</button>
     
        </div>
    )
}
export default Count