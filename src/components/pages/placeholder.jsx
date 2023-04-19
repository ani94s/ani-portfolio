import React from "react";
import { placeholder } from "../../assets";

const Placeholder = () => (
  <div className="w-full h-max">
    <div className="flex flex-col justify-center items-center mb-8 lg:mx-40 ss:mx-32 mx-12">
      <img src={placeholder} alt='placeholder' className="md:w-1/3 ss:w-1/2 w-full" />
      <h1 className="text-2xl font-bold">Construction Site.!!</h1>
      <br />
      <p>
        The page is under construction and your entry is restricted. Follow me
        on social platforms to stay updated.
      </p>
    </div>
  </div>
);

export default Placeholder;
