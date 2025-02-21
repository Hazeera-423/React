


import Child2 from './chaild1';

const Parent2 = () => {
  const message = "Hello, this is a message from the Parent Component!";
  const age = 22;
 
  return (
    <div>
        <h1>Happy New Year</h1>
      <h2>Parent Component</h2>
      
     <Child2 text={message} number={age} />
    </div>
  );
};

export default Parent2;