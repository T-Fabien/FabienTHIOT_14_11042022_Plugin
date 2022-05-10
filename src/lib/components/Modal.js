import React from 'react';
import './Modal.css';

export const Modal = ({ show, setShow, title, text, image, btn}) => {
  return (
    show && (
      <div className="modal">
        {image && <img src={image} alt="" />}
        <h2>{title}</h2>
        <p>{text}</p>
        <button onClick={() => setShow(false)}>{btn}</button>
      </div>
    )
  );
};
