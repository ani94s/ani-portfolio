import React from "react";

const Button = ({type,children}) => {
  return <button type={type} className="p-4  bg-tertiary">{children}</button>;
};

export default Button;
