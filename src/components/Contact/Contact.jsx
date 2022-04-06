import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="section-title">Contact us</h2>
      <form action="">
        <label htmlFor="Fname">First Name</label>
        <input type="text" name="Fname" id="Fname" autoFocus />
        <br />
        <label htmlFor="Lname">Last Name</label>
        <input type="text" name="Lname" id="Lname" />
        <br />
        <label htmlFor="email">Enter your Email</label>
        <input type="email" name="email" id="email" />
              <br />
        <label htmlFor="message">Enter your message</label>
        <input type="textarea" name="message" id="message" ></input>
              
      </form>
    </div>
  );
};
export default Contact;
