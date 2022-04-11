import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [name, setName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const messageHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredEmail("");
    setName("");
    setEnteredMessage("");
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Let's Get in Touch And Make Miracle Together</p>
      </div>
      <div className="contact-form">
        <form action="#" className="form" onSubmit={submitHandler}>
          <div className="box-container">
            <div className="box">
              <label htmlFor="fname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fname"
                value={name}
                onChange={nameHandler}
                required
              />
            </div>
            <div className="box">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={enteredEmail}
                onChange={emailHandler}
                required
              />
            </div>
          </div>
          <div className="message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              value={enteredMessage}
              onChange={messageHandler}
              required
            ></textarea>
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
