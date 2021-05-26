import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Manav', age: 19, message: 'Age 19 munde di' });
  const changeMessage = () => {
    if (person.message === "Age 19 munde di") setPerson({ ...person, message: "Hello World" })
    else setPerson({ ...person, message: "Age 19 munde di" })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" type='button' onClick={changeMessage}>Change message</button>
    </>
  )
};


export default UseStateObject;
