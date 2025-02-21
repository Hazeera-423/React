import GrandChild from "./GrandChaild";


import './chaild.css'

const Child = ({ book }) => {
    return (
      <div className="one">
        <h2>Chaild Component</h2>
        <h3>Book Details</h3>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <GrandChild year={book.year}/>

       
      </div>
    );
  };
  
  export default Child;