


import React from "react";

import { UserContext } from "./Parent";

const ChaildC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {value => <div>{value}</div>} 
      </UserContext.Consumer>
    </div>
  );
};

export default ChaildC;
