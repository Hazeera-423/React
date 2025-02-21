
import './chaild.css'
const Child = ({ books }) => {
  return (
    <div className="one">
      <h2>Child Component</h2>
      <h3>Book Details</h3>

      {books.map((book, index) => (
        <div key={index} className="one">
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
        
        </div> 
      ))}
    </div>
  );
};

export default Child;
