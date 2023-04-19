import React from "react";

const TextField = (className, label, placeholder, type) => {
  return (
    <div className={className}>
      <label>
        {" "}
        {label}
        <input type={type} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default TextField;
