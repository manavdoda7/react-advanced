import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0)
  const increment = () => {
    setValue(value+1)
  }
  useEffect(()=>{
    if (value>0) document.title = `New Messages (${value})`
  }, [value])
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' type="button" onClick={increment}>
        Click Me!
      </button>
    </div>
  )
};

export default UseEffectBasics;
