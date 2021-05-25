import React, {useState} from 'react';
let title = "Hello There!"

const ErrorExample = () => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type= "button" onClick={changeTitle}>Change Title</button>

    </React.Fragment>
  )
};
const changeTitle = () =>{
  title = "Hello World!"
  console.log(title)
}
export default ErrorExample;
