import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  const [isError, setIsError] = useState('false')

  return (
    <div>
      <h1>Value1: {firstValue}</h1>
      <h1>Value2: {secondValue}</h1>
      <button className="btn" onClick={() => setText("Hello There!")}>setText</button>
      <button className='btn' onClick={()=> setIsError(!isError)}>Toggle Error</button>
      <h2>{isError&&'It\'s an error'}</h2>
    </div>
  )
};

export default ShortCircuit;
