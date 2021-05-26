import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    setTimeout(() => {
    setValue((prevState)=>{
      return ++prevState
    })
    }, 2000)
  }
  const decrease = () => {
    setTimeout(()=>{
      setValue((prevState)=>{
        return --prevState
      })
    }, 2000)  }
  const reset = () => {
    setValue(0);
  }
  return <>
    <h2>Counter</h2>
    <h1>{value}</h1>
    <button class = "btn" onClick={increase}>Increase</button>
    <button class = "btn" onClick={reset}>Reset</button>
    <button class = "btn" onClick={decrease}>Decrease</button>
  </>
};

export default UseStateCounter;
