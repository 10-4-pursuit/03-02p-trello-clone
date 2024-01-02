import React from "react";
import './Modal.css'
import Button from "./common/Button";



const Modal = ({ children, onClose, show }) => {
    if (!show){
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    )
    
}

export default Modal