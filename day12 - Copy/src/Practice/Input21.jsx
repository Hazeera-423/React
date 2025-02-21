

import { useState } from "react"

const Input21=()=>{
    const[text,setText]=useState('')
    return(
        <div>
            <h3>Enter your textBelow</h3>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>Text:{text}</p>
        </div>
    )
}
export default Input21