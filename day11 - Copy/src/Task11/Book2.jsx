import { BookContext } from "./Book1";
import React from "react";

const Book2 = () => {
    return (
        
        <BookContext.Consumer>
           
            {(books) => (
                <div className="book-list">
                    {books.map((book, index) => (
                        <div key={index} className="book-card">
                            <h1>Title: {book.title}</h1>
                            <h2>Author: {book.author}</h2>
                            <h3>Year: {book.year}</h3>
                        </div>
                    ))}
                </div>
            )}
        </BookContext.Consumer>
    );
};

export default Book2;
