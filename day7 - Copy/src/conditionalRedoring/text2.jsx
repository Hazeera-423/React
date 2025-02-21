import React, { useState } from "react";

import './text.css';
import Text from "./text";

function App1() {
    const [highlight, setHighlight] = useState(false);

    return (
        <div>
            <button onClick={() => setHighlight(!highlight)}>
                Toggle Highlight
            </button>
          
            <Text isHighlighted={highlight}/>
        </div>
    );
}

export default App1;