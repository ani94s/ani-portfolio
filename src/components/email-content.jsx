import React from "react";
import Button from "./atoms/button";

const EmailContent = () => {
  return (
    <div id="sendEmail" className="bg-slate-100 w-96 text-primary p-4 shadow-lg shadow-deepMattGray">
      <h1 className='text-xl font-medium text-primary'>Let's chat about anything awesome..!</h1>
      <form className="flex flex-col gap-2 p-4" action="https://formspree.io/f/xdovbkqn" method="POST">
        <div className="flex flex-col leading-normal">
          <label htmlFor="name">Name(required)</label>
          <input name="name" placeholder="Enter Full Name" className="p-1 border" required/>
        </div>
        <div className="flex flex-col leading-normal">
          <label htmlFor="emailid">Email ID(required)</label>
          <input name="emailid" placeholder="name@mail.com" className="p-1 border" required/>
        </div>
        <div className="flex flex-col leading-normal">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="More about the product" className="p-1 h-32 border"/>
        </div>
        <Button type="submit" className="p-4 hover:bg-tertiary">Send Email</Button>
      </form>
    </div>
  );
};

export default EmailContent;
