import Tabel2 from "./Tabel2"


const Tabel1=()=> {
    const data=[{name:'Sam',id:'101',email:'sam@gmail.com'},
        {name:'Ram',id:'102',email:'Ram@gmail.com'},
        {name:'cam',id:'103',email:'Cam@gmail.com'}

    ]
    return(
        <div>
        <Tabel2  data={data}/>


        </div>
    )
}
export default Tabel1