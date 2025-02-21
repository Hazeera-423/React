
import Bookc from "./Bookc"


function Bookb({book}){
    return(
        <div>
           <h2>Title:{book.title}</h2>
           <p>Author:{book.author}</p>
          
           <Bookc  year={book.year}/>
        </div>
    )
}
export default Bookb