import C1 from "./C1"



const P1=()=>{
    const  Details={name:'Rufi', id:'101' ,adress:'123 street'}
    return(
        <div>
            <h1>Parent Component P1</h1>
            <C1 Details={Details}/>
        </div>
    )
}
export default P1


