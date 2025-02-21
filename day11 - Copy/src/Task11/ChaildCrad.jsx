import { CrardContext } from "./Card"


const ChaildCard=()=>{
    return(
        <div>
         <CrardContext.Consumer >
         {(info) => (
                <div className="aa">
                    {info.map((person, index) => (
                        <div key={index} className="card">
                            <img src={person.imageUrl} alt={person.name} />
                            <h2>{person.name}</h2>
                            <h3>ID: {person.id}</h3>
                            <h3>Place: {person.Place}</h3>
                        </div>
                    ))}
                </div>
            )}
         </CrardContext.Consumer>
        </div>
    )
}
export default ChaildCard