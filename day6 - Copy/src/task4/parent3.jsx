import Chaild3 from "./chaild3"


const  Parent3=()=>{
    const info=[ 
        { imageUrl:'/a12.jpg',name:'Lakshmi', id:101,Place:'Bangalore' },
        { imageUrl:'/a4.jpg',name:'Latha', id:103,Place:'Mumbai' },
        { imageUrl:'/a3.jpg',name:'Leela', id:104,Place:'AP' }
    ]
   
    return(
  <div className="one">
    <h1>User Card</h1>
    <Chaild3 user={info}/>
  </div>
    )
}
export default Parent3