import React, { useState } from 'react';
import './text.css'
function Text() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className='bb'>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This text is visibel!</p>}
    </div>
  );
}

export default Text;
