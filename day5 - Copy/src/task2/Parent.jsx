

import Chaild from "./Chaild";
const Parent = () => {
    const books = [
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1960 },
      { title: "The Road", author: "George Orwell", year: 1949 },
      { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ];
  
    return (
      <div>
        <h1>Parent Component</h1>
        <h2>Book List</h2>
        {books.map((book, index) => (
         <Chaild key={index} book={book}/>
        ))}
      </div>
    );
  };

  export default Parent