import React, { useEffect } from 'react';

const Modal = ({value, func}) => {
  useEffect(() => {
    setTimeout(() => {
      func();
    }, 3000);
  });
  return <div className='modal'><p>{value}</p></div>;
};

export default Modal;
