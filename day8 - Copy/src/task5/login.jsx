
import React,{useState} from 'react'
function Greet(){
    const[isLogin,setIsLogin]=useState(false)
    return(
    <div>
      {isLogin ?(<h1>welcome</h1>):(<h1>please login</h1>)}

      <button onClick={()=>setIsLogin(!isLogin)}>
        {isLogin ?'logout':'login'}
      </button>


    </div>
    )
}
export default Greet