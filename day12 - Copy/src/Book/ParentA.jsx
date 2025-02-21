import ChaildB from "./ChaildB"


const ParentA=()=>{
    const Arr=[{name:'Lavnya',id:'101',place:'Banglore'},
        {name:'Likitha',id:'102',place:'AP'}
    ]
    return(
        <div>
           <h5>Hello</h5>
      <ChaildB Arr={Arr}/>
        </div>
    )
}
export default  ParentA