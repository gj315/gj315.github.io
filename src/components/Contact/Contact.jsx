import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>Let's Get in Touch And Make Miracle Together</p>
      </div>
      <div className="contact-form">
        <form action="#" className="form">
          <div className="box-container">
            <div className="box">
              <label htmlFor="fname">First Name</label>
              <input type="text" name="fname" id="fname" />
            </div>
            <div className="box">
              <label htmlFor="email">Your Email</label>
              <input type="text" name="email" id="email" />
            </div>
          </div>
          <div className="message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
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
