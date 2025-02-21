
import './text.css'
function Text({ isHighlighted }) {
   
    return (
        
              <p className={isHighlighted ? "highlighted" : "normal"}>
        This text will change style.
      </p>
       
    );
  }
  export default Text








  