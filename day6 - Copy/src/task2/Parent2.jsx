import Chaild2 from "./chaild2"


const  Parent2=()=>{
    const info= { imageUrl:'/a12.jpg',name:'Lakshmi', id:101,Place:'Bangalore' };
   
    return(
  <div className="one">
    <h1>User Card</h1>
<Chaild2  user={info}/>
  </div>
    )
}
export default Parent2