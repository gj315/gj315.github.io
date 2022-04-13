import React, { useState } from "react";
import "./About.css";
import "aos/dist/aos.css";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="About" id="about">
      <div className="about-container">
        <div className="section-title" >
          
          <h2><span>Details </span> About Me</h2>
          <p>
          Hi I know you come here for that guy who are expert in <br></br>
          <span>new web technologies</span> then congras! you come on right
          place.
        </p>
        </div>
        
        <div
          className="about-info"
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <div
            className="about-image"
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <img src="assets/about-8.jpeg" alt="an freelancer" />
          </div>

          <div className="about-me-dashborad">
            <div className="tabs">
              <div className="tablist">
                <div
                  className={`tabhead ${index === 0 ? "active" : "null"}`}
                  onClick={() => setIndex(0)}
                >
                  Skills
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
                  Experience
                </div>
                <div
                  className={`tabhead ${index === 4 ? "active" : "null"}`}
                  onClick={() => setIndex(4)}
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
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="react">React</h2>
                      <h2 className="value">98%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-5"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="angular">AngularJs</h2>
                      <h2 className="value">90%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-6"></div>
                    </div>
                  </div>

                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="vue">Vue</h2>
                      <h2 className="value">93%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-7"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="Next">NextJs</h2>
                      <h2 className="value">92%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-8"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="gatsby">Gatsby</h2>
                      <h2 className="value">90%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-9"></div>
                    </div>
                  </div>
                </div>
                <div className="tabcontent" hidden={index !== 2}>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="node">NodeJs</h2>
                      <h2 className="value">97%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-10"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="express">ExpressJs</h2>
                      <h2 className="value">94%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-11"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="mongo">MongoDb</h2>
                      <h2 className="value">95%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-12"></div>
                    </div>
                  </div>
                  <div className="skill-container">
                    <div className="heading">
                      <h2 className="postgress">PostgreSql</h2>
                      <h2 className="value">90%</h2>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-13"></div>
                    </div>
                  </div>
                </div>
                <div className="tabcontent" hidden={index !== 3}>
                  <div className="experience">
                    <div className="a">
                      <h3>Freelance NodeJs Developer - Upwork</h3>
                      <h4>2019- Current</h4>
                    </div>
                    <div className="a">
                      <h3>
                        Freelance ReactNative Mobile App Developer - upwork
                      </h3>
                      <h4>2019 - Current</h4>
                    </div>
                    <div className="a">
                      <h3>Freelance MERN stack Developer - Upwork</h3>
                      <h4>2019 - Current</h4>
                    </div>
                    <div className="a">
                      <h3> Freelance BlockChain Developer - upwork</h3>
                      <h4>2019 - Current</h4>
                    </div>
                    <div className="a">
                      <h3> Sr. NodeJs Developer - Aloha Pvt.limited</h3>
                      <h4>2018-2019</h4>
                    </div>
                  </div>
                </div>
                <div className="tabcontent" hidden={index !== 4}>
                  <div className="edu-info">
                    <div className="b">
                      <h3>
                        <span className="cse">BTech in CSE</span> - Lovely
                        professional University, Punjab ,India
                      </h3>
                      <h4>Aprail 2017</h4>
                    </div>
                    <div className="b">
                      <h3>
                        Complete Node.js Developer Course By Andrew Mead - Udemy
                      </h3>
                      <h4>September 2017</h4>
                    </div>
                    <div className="b">
                      <h3>Modern React with Redux - Udemy</h3>
                      <h4>2018</h4>
                    </div>
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
