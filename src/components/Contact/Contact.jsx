import React, { useState } from "react";
import "./Contact.css";
import { BiMap } from "react-icons/bi";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const secondNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    return setMessage(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact" id="contact" onSubmit={onSubmitHandler}>
      <div className="contact-section-header">
        <h2>Contact us</h2>
      </div>
       
        <div className="contact-content">
          <div className="box">
            <div className="icon">
              <BiMap />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Anupgarh,Rajasthan,India</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiOutlineMail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>gurpreet@guri.gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <AiFillPhone />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+919549626880</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div>
              <label htmlFor="Fname">First Name</label>
              <input
                type="text"
                name="Fname"
                id="Fname"
                value={firstName}
                onChange={firstNameHandler}
              />
            </div>
            <div>
              <label htmlFor="Lname">Last Name</label>
              <input
                type="text"
                name="Lname"
                id="Lname"
                value={lastName}
                onChange={secondNameHandler}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Enter your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={emailChangeHandler}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Enter your message</label> <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={message}
                onChange={messageChangeHandler}
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button type="submit" value="send">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    



  );
};
export default Contact;
