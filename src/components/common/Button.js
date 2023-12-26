import React from "react";
import "./Button.css";

 const Button = ({
  className,
  onClick,
  children,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
