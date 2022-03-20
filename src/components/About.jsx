import React, { useState } from "react";
import "./About.css";
import aboutImage from "../assets/about-8.jpeg";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="About" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="an freelancer" />
        </div>
        <div className="about-info">
          <div className="about-inner">
            <div className="section-title">
              <span>Details </span>
              <h2>About Me</h2>
            </div>
            <p>
              Hi I know you come here for that guy who are expert in{" "}
              <span>new web technologies</span> then congras! you come on right
              place.
            </p>
            <div className="about-me-dashborad">
              <div className="tabs">
                <div className="tablist">
                  <div
                    className={`tabhead ${index === 0 ? "active" : "null"}`}
                    onClick={() => setIndex(0)}
                  >
                    Main skills
                  </div>
                  <div
                    className={`tabhead ${index === 1 ? "active" : "null"}`}
                    onClick={() => setIndex(1)}
                  >
                    FrontEnd
                  </div>
                  <div
                    className={`tabhead ${index === 2 ? "active" : "null"}`}
                    onClick={() => setIndex(2)}
                  >
                    BackEnd
                  </div>
                  <div
                    className={`tabhead ${index === 3 ? "active" : "null"}`}
                    onClick={() => setIndex(3)}
                  >
                    Education
                  </div>
                </div>
                <div className="tabcontentlist">
                  <div className="tabcontent" hidden={index !== 0}>
                    <div className="skill-container">
                      <div className="heading">
                        <h2 className="web">Web Development</h2>
                        <h2 className="value">98%</h2>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar-1"></div>
                      </div>
                    </div>

                    <div className="skill-container">
                      <div className="heading">
                        <h2 className="mobile">Mobile App Development</h2>
                        <h2 className="value">90%</h2>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar-2"></div>
                      </div>
                    </div>
                    <div className="skill-container">
                      <div className="heading">
                        <h2 className="game">Game Development</h2>
                        <h2 className="value">85%</h2>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar-3"></div>
                      </div>
                    </div>
                    <div className="skill-container">
                      <div className="heading">
                        <h2 className="blockchain">BlockChain Development</h2>
                        <h2 className="value">93%</h2>
                      </div>
                      <div className="progress-bar-container">
                        <div className="progress-bar-4"></div>
                      </div>
                    </div>
                  </div>

                  <div className="tabcontent" hidden={index !== 1}>
                    this is second tab content
                  </div>
                  <div className="tabcontent" hidden={index !== 2}>
                    this is third tab content
                  </div>
                  <div className="tabcontent" hidden={index !== 3}>
                    this is fourth tab content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
