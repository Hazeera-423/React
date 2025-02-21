

import React,{useState} from 'react'
function Text(){
    const [text,setText]=useState("")
    return(
        <div>
         <h1>text here:</h1>
         <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
         <h1>your text:{text}</h1>
        </div>
    )
}
export default Text