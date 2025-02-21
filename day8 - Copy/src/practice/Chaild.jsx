import Grandchaild from "./Grandchaild"


function Chaild({data}){
    return(
        <div>
         <h1>name:{data.name}</h1>
         <h3>Id:{data.id}</h3>
         <Grandchaild adress={data.adress}/>
        </div>
    )
}
export default Chaild