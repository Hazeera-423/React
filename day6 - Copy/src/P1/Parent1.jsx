import Chaild1 from "./Chaild1"



const Parent1=()=>{
    const arr=[
       {name:'seetha',age:'23',place:'Bangalore'},
       {name:'geetha',age:'23',place:'Hyderabad'},
       {name:'neetha',age:'23',place:'Andhra Pradesh'}
    ]
    return(
        <div>
         {arr.map((arr,index)=>(
            <Chaild1 key={index} arr={arr}/>
         ))}
        </div>
    )
}
export default Parent1