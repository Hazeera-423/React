import Chaild from "./Chaild"

 function Parent(){
    const Info={
        name:'Sam',
        id:123,
        adress:'123 street Banglore'
    }
    return(
        <div>
         <Chaild  data={Info}/>
        </div>
    )
 }
 export default Parent