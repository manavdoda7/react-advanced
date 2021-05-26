import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [state, setState] = useState(1)
  return (
    <>
      <button className="btn" onClick={()=>setState(!state)}>show/hide</button>
      {state&&<Item/>}
    </>
  );
};

const Item=() => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log('abc')
    window.addEventListener('resize', ()=>setWidth(window.innerWidth))
    
    return () => {
      window.removeEventListener('resize', ()=>setWidth(window.innerWidth))
    }
  })

  return (
    <div>
      <h1>Windows</h1>
      <h2>Width: {width} px</h2>
    </div>
  )
}

export default ShowHide;
