import React, { useState } from 'react';

function Box() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: isActive ? 'green' : 'red',
        }}
      ></div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default Box;
