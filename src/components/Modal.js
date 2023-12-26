import React from "react";
import "./Modal.css";
import Button from "./common/Button";
import './common/Button.css';

 const Modal = ({ onClose, children, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button className="close-button" onClick={onClose}>
          Close
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
