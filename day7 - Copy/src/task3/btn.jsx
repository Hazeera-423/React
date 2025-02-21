import React, { useState } from 'react';
import './btn.css'
function Button() {
  const [status, setStatus] = useState('idle');

  return (
    <div className='cc'> 
      <button onClick={() => setStatus('idle')}>Idle</button>
      <button onClick={() => setStatus('loading')}>Loading</button>
      <button onClick={() => setStatus('success')}>Success</button>
      <button onClick={() => setStatus('error')}>Error</button>

      {status === 'idle' && <p>Click a button to change status</p>}
      {status === 'loading' && <p>Loading...</p>}
      {status === 'success' && <p>Operation successful!</p>}
      {status === 'error' && <p>Error occurred. Please try again.</p>}
    </div>
  );
}

export default Button;
