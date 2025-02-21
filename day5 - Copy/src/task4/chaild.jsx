



const Child = ({ books }) => {
    return (
      <div className="one">
        <h2>Chaild Component</h2>
        <h3>Book Details</h3>
        {/* <p>Title: {books.title}</p>
        <p>Author: {book.author}</p> */}
       
       {books.map((book, index) => (
        <div key={index}>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
       
      </div>
        ))}
       
      </div>
    );
  };
  
  export default Child;