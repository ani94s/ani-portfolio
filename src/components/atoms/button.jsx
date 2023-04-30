import React from "react";

const Button = ({type,children, className}) => {
  return <button type={type} className={`${className} border border-tertiary hover:bg-tertiary`}>{children}</button>;
};

export default Button;
