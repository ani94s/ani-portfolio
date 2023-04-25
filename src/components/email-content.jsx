import React from "react";
import Button from "./atoms/button";

const EmailContent = () => {
  const sendEmail = (data) => {
    data.preventDefault();
    console.log(data);
  };
  return (
    <section id="sendEmail" className="bg-slate-100 text-primary p-4">
      <h1 className='text-xl font-medium text-primary'>Why not send me an email to know more..!</h1>
      <form className="flex flex-col gap-2 p-4" onSubmit={sendEmail}>
        <input name="name" placeholder="Name" className="p-1"/>
        <input name="emailid" placeholder="Email ID" className="p-1"/>
        <input name="subject" placeholder="Subject" className="p-1"/>
        <textarea name="message" placeholder="Message" className="p-1 h-32"/>
        <Button type="submit">Send Email</Button>
      </form>
    </section>
  );
};

export default EmailContent;
