import React from "react";
import "./Portfolio.css";
const Portfolio = (props) =>{

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-section-header">
        <div className="title">My Awesome Proects</div>
      </div>
      <div className="portfolio-projects">
        <div className="fillter-list">
          <ul>
            <li>All</li>
            <li>Web</li>
            <li>Mobile</li>
            <li>BlockChain</li>
          </ul>
        </div>
        <div className="projects-container">
          
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
