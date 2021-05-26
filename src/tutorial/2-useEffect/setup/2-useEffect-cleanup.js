import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize',() => {setSize(window.innerWidth)});
    return () => {
      window.removeEventListener('resize', () => {setSize(window.innerWidth)});
    }
  }, [])

  return (
    <>
      <h2>Windows Size: </h2>
      <h3>{size}</h3>
    </>
  )
};

export default UseEffectCleanup;
