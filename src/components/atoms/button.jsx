import React from "react";

const Button = ({type,children, className, onClick}) => {
  return <button type={type} onClick={onClick} className={`${className} border border-tertiary hover:bg-tertiary`}>{children}</button>;
};

export default Button;
