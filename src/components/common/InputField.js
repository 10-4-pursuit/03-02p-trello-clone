import React from "react";
import './InputField.css';

const InputField = ({ type = "text", placeholder, value, onChange, name, ...props }) => {
    return (
        <input
            className="input-field"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            {...props}
        />
    );
};

export default InputField;
