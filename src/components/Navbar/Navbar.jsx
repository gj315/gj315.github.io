import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { RiLinkedinFill, RiTwitterLine, RiFacebookLine } from "react-icons/ri";
import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineClose,
} from "react-icons/ai";
import { BsEmojiSunglassesFill, BsMoonStars } from "react-icons/bs";
import Aos from "aos";
const Navbar = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

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

  //dark and white mode button
  const [icon, setIcon] = useState(<BsEmojiSunglassesFill />);

  const themeChangeHandler = () => {
    document.body.classList.toggle("white-theme");
    if (document.body.classList.contains("white-theme")) {
      setIcon(<BsMoonStars />);
      setStyle({ "color":"#333"})
      setNav(!nav);
    } else {
      setIcon(<BsEmojiSunglassesFill />);
      setStyle({ "color":"yellow"})
      setNav(!nav);
    }
  };

  const [style, setStyle] = useState({ "color":"yellow"})

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
              <a href="#testimonials">Testimonial</a>
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
        <div style={style} className="day" onClick={themeChangeHandler}>
        {icon}
        </div>

        <div className="hamburger-menu" onClick={handleClick}>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <div className={nav ? "mobile-menu show" : "mobile-menu"}>
        <div className="mobile-day" onClick={themeChangeHandler} >
        {icon}
   </div>
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
              <a href="#testimonials" onClick={handleClick}>
                Testimonial
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
