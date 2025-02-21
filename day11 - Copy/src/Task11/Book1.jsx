import React from "react";
import Book2 from "./Book2";
import './Book.css'
export const BookContext=React.createContext()
const Book1 = () => {
    const books = [
      { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1960 },
      { title: "The Road", author: "George Orwell", year: 1949 },
      { title: "Moby Dick", author: "Herman Melville", year: 1851 }
    ];
  
    return (
      <div className="book-container">
        <h4>Parent Component</h4>
        <h2>Book List</h2>
        <BookContext.Provider value={books}>
          <Book2/>
        </BookContext.Provider>
      </div>
    );
  };

  export default Book1