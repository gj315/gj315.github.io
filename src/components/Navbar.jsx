import React from "react";
import "./Navbar.css";
import { RiLinkedinFill, RiTwitterLine,RiFacebookLine } from 'react-icons/ri';
import { AiOutlineMenu,AiOutlineInstagram } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="logo">
          G<span>uri</span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className="nav-right">
        <div className="social-share-inner">
          <ul>
            <li>
           <AiOutlineInstagram  />
            </li>
            <li>
             <RiFacebookLine  /> 
            </li>
            <li>
            <RiLinkedinFill  />
            </li>
            <li>
            <RiTwitterLine />
            </li>
          </ul>
        </div>
        <div className="call-btn">
          <button>Call Now</button>
        </div>
        <div className="hamburger-menu">
          <AiOutlineMenu  />
         
        </div>
        
        <div className="mobile-menu">
          <ul className="mobile-nav">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contant</li>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="social-icons">
              <RiLinkedinFill />
              <RiTwitterLine />
              <RiFacebookLine /> 
              <AiOutlineInstagram />
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default Navbar;
