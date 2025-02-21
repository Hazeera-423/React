import Book3 from "./Book3"


function Book2({book}){
    return(
        <div>
           <h2>Title:{book.title}</h2>
           <p>Author:{book.author}</p>
           <Book3 year={book.year}/>
        </div>
    )
}
export default Book2