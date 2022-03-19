import React from 'react';
import "./About.css";
import aboutImage from "../assets/about-8.jpeg";
const About = () => {
    return (
        <div className="About" id="about">
            <div className="about-container">
                <div className=" about-image">
                    <img src={aboutImage} alt="an freelancer" />
                </div>
                <div className="about-info">
                    <div className="about-inner">
                        <div className="section-title">
                            <span>Details </span>
                            <h2>About Me</h2>
                            </div>
                        <p>Hi I know you come here for that guy who are expert in <span>new web technologies</span>  then congras! you come on right place.</p>
                        <div className="about-me-dashborad">
                                <div className="tabs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;