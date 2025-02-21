import Book2 from "./Book2"



function Book1(){
    const books=[  
        { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1960 },
        { title: "The Road", author: "George Orwell", year: 1949 },
        { title: "Moby Dick", author: "Herman Melville", year: 1851 }]
    return(
        <div>
            <h1>Parent Field</h1>
          {books.map((books,index)=>(
            <Book2 key={index} book={books}/>
          ))}
         

        </div>
    )
}
export default Book1
