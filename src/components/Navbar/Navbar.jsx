import React, { useState } from "react";
import "./Navbar.css";
import { RiLinkedinFill, RiTwitterLine, RiFacebookLine } from "react-icons/ri";
import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineClose,
} from "react-icons/ai";
const Navbar = () => {
  // fixed navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activate", window.scrollY > 0);
  });

  // Toggle menu

  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          G<span>uri</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#home"> Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-right">
      <div className="social-share-inner">
        <ul>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <RiFacebookLine />
          </li>
          <li>
            <RiLinkedinFill />
          </li>
          <li>
            <RiTwitterLine />
          </li>
        </ul>
        </div>
        <div className="call-btn">
          <button>Call Now</button>
       
      </div>
        
        <div className="hamburger-menu" onClick={handleClick}>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className={nav ? "mobile-menu show" : "mobile-menu"}>
          <ul className="mobile-nav">
            <li>
              <a href="#home" onClick={handleClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={handleClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-nav-right">
            <div className="social-handles">
              <ul>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <RiFacebookLine />
                </li>
                <li>
                  <RiLinkedinFill />
                </li>
                <li>
                  <RiTwitterLine />
                </li>
              </ul>
            </div>
            <div className="toggle-btn">
              <button>Toggle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
