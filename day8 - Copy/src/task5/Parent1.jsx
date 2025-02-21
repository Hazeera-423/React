import Chaild12 from "./Chaild1";



const  Parent21=()=>{
    const info= { imageUrl:'/p12.jpg',name:'Preethi', id:101,Place:'Bangalore' };
   
    return(
  <div className="one">
    <h1>User Card</h1>

<Chaild12 user={info}/>
  </div>
    )
}
export default Parent21