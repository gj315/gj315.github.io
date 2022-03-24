import React, { useState } from "react";
import "./Portfolio.css";
const Portfolio = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-section-header">
        <div className="title">My Awesome Proects</div>
      </div>
      <div className="porjects-gallery">
        <div className="gallery-fillter">
          <div className="tabs-section">
            <div className="tab-list">
              <div className={`tab-head ${(index === 0) ? "active" : "null"}`} onClick={() => setIndex(0)}>
                All
              </div>
              <div className={`tab-head ${(index === 1) ? "active" : "null"}`} onClick={() => setIndex(1)}>
                Web 
              </div>
              <div className={`tab-head ${(index === 2) ? "active" : "null"}`} onClick={() => setIndex(2)}>
                Mobile 
              </div>
              <div className={`tab-head ${(index === 3) ? "active" : "null"}`} onClick={() => setIndex(3)}>
                Blockchain 
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="tabcontentlist">
                      <div className="tabcontent" hidden={index !==0}>
                          Hello this is harry 
                          Hello this is marry 
                          Hello this is max 
                          Hello this is spiderman 
                      </div>
                      <div className="tabcontent" hidden={index !==1}>
                       Hello this is marry
                      </div>
                      <div className="tabcontent" hidden={index !==2}>
                       Hello this is Max
                      </div>
                      <div className="tabcontent" hidden={index !==3} >
                        Hello this is Spiderman
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
