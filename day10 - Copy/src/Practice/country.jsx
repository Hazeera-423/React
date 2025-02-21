import React, { useState, useEffect } from "react";


const Books = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [searchTerm]);

  return (
    <div className="books-container">
      <h2>Books on "{searchTerm}"</h2>
      {loading && <p>Loading books...</p>}
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />
            {book.title} by {book.author_name?.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
