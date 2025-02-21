
import { useEffect, useState } from "react"


function Statement(){
    const [text,setText]=useState('')
    useEffect(()=>{
        console.log('hello')

    },[text])
     return (
       <div>
        <p>your text:{text}</p>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
       </div>
        
     )
    
}
export default Statement