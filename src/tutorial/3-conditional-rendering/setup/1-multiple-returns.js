import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [value, setValue] = useState(1);
  const changeMessage = () => {
    setValue(0);
  }
  useEffect(() => {
    window.addEventListener('resize', changeMessage)
    return () => {
      window.removeEventListener('resize', changeMessage)
    }
  }, []);
  if(value) return (
    <div>
      <h1>You haven't resized the width yet.</h1>
    </div>
  )
  else return (
    <div>
      <h1>You have resized the width.</h1>
    </div>
  )
};

export default MultipleReturns;
