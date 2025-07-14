// Parent.js
import React from 'react';
import Child from './Child';

const Parent = () => {
  const message = "Hello from Parent Component!";
  
  return (
    <div>
      <h1>This is the Parent</h1>
      <Child greeting={message} />
    </div>
  );
};

export default Parent;
