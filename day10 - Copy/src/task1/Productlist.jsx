

import Chaildlist from "./Chaildlist"


const  Productlist=()=>{
    const info=[ 
        { imageUrl:'/laptop.jpg',name:'Laptop', id:101,Price:40000 },
        { imageUrl:'/mobile.jpg',name:'Mobile', id:103,Price:20000 },
        { imageUrl:'/coat.jpg',name:'Coat', id:104,Price:3000 },
        { imageUrl:'/watch.jpg',name:'Watch', id:104,Price:1500 }
    ]
   
    return(
  <div className="one">
    <h1>User Card</h1>
  
    <Chaildlist user={info}/>
  </div>
    )
}
export default Productlist