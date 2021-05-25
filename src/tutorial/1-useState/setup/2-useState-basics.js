import React, { useState } from 'react';

const UseStateBasics = () => {
  // return <h2>useState basic example</h2>;



  const [text, setText] = useState('Hello World!');
  const handleClick = () => {
    if(text==='Hello World!') setText('Hey There');
    else setText('Hello World!');
  };
  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick = {handleClick}>Change Title</button>
    </React.Fragment>
  );
  
};

export default UseStateBasics;
