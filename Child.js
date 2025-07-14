// Child.js
import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h2>This is the Child</h2>
      <p>Message from Parent: {props.greeting}</p>
    </div>
  );
};

export default Child;
