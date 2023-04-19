import React from "react";

const EmailContent = () => {
  const sendEmail = (data) => {
    console.log(data);
  };
  return (
    <section id="sendEmail">
      <form className="'flex flex-col" onSubmit={sendEmail}>
        <input id="header" placeholder="" />
        <input id="desc" />
        <button type="submit">Send Email</button>
      </form>
    </section>
  );
};

export default EmailContent;
