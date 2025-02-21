


import { useContext } from "react";
import { BookContext } from "./Book20";

const Book21 = () => {
  const books = useContext(BookContext);

  return (
    <div>
      <h2>Child Component</h2>
      {books.map((book, index) => (
        <div key={index} className="book-card" >
            <div className="book-list">
            <h1>📖 {book.title}</h1>
          <h2>✍️ Author: {book.author}</h2>
          <h3>📅 Year: {book.year}</h3>
        

            </div>
         
        </div>
      ))}
    </div>
  );
};

export default Book21;
