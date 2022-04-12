import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import "./Services.css";
import { CgWebsite } from "react-icons/cg";
import { BiMobile } from "react-icons/bi";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FcDeployment } from 'react-icons/fc';
const Services = () => {

  useEffect(() => {
    Aos.init({
    });
  }, []);
  return (
    <div className="services" id="services">
      <div className="service-section-header" data-aos="zoom-out" data-aos-offset="200">
        <div className="section-title">My Fantastic Service</div>
        <p>
          Below I mention all my fantastic software services which I can provide
          you
        </p>
      </div>
      <div className="services-blocks" >
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <CgWebsite
              style={{ fontSize: "45px", fontWeight: "400", color: "#fd4766" }}
            />
          </div>
          <div className="content">
            <h2>Website Development</h2>
            <p>
              I create Awesome website for my client with the use of new web
              tech like React, Angular, Vue, NuxtJs, NextJs, Gatsby , NodeJs,
              ExpressJs, MongoDB and postgreSQL.
            </p>
          </div>
        </div>
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <BiMobile
              style={{ fontSize: "45px", fontWeight: "400", color: "blue" }}
            />
          </div>
          <div className="content">
            <h2>Mobile App Development</h2>
            <p>
              I make Amazing Mobile App for my client with the use of new web
              tech like ReactNative, NodeJs, ExpressJs, MongoDB and postgreSQL.
            </p>
          </div>
        </div>
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <AiOutlineDesktop
              style={{ fontSize: "45px", fontWeight: "400", color: "green" }}
            />
          </div>
          <div className="content">
            <h2>Desktop App Development</h2>
            <p>
              I develope fantastic Desktop Application for my client with the use of new web
              tech framwork ElectronJs.
            </p>
            
          </div>
        </div>
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <FaEthereum
              style={{ fontSize: "45px", fontWeight: "400", color: "#606e97" }}
            />
          </div>
          <div className="content">
            <h2>BlockChain Development</h2>
            <p>
              I Build Ethereum BlockChain, Smart Contracts, NFT ,DApp with the use
              of Solidity, React, NodeJs, ExpressJs.{" "}
            </p>
          </div>
        </div>
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <FaGamepad
              style={{
                fontSize: "45px",
                fontWeight: "400",
                color: "#ffff",
              }}
            />
          </div>
          <div className="content">
            <h2>Game Development</h2>
            <p>
              I create Awesome Games for my client with the HTML5, Phaser3,
              Canvas, React, NodeJs, ExpressJs, MongoDB and postgreSQL.
            </p>
          </div>
        </div>
        <div className="block" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
          <div className="icon">
            <FcDeployment
              style={{ fontSize: "45px", fontWeight: "400"}}
            />
          </div>
          <div className="content">
            <h2> Deployment</h2>
            <p>
              I deploye software application for my client on AWS, Microsoft AZure, DigitilOcean and Netlify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
