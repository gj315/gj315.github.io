import React, { useState,useEffect } from "react";
import "./Portfolio.css";
import Aos from 'aos';
import Data from "./data";
const Portfolio = () => {

  useEffect(() => {
    Aos.init({
      
    });
  
    
  }, [])
  
  const [items, setItems] = useState(Data);

  const filterItems = (categoryItem) => {
    const updatedItems = Data.filter((current) => {
      return current.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="heading" data-aos="zoom-in">My Awesome Projects</h1>
      <div className="menu-tab-container" data-aos="zoom-in">
        <div className="menu-tab" >
          <button className="button" onClick={() => setItems(Data)}>
            All
          </button>
          <button className="button" onClick={() => filterItems('Web')}>Web</button>
          <button className="button" onClick={() => filterItems('Mobile')}>Mobile</button>
          <button className="button" onClick={() => filterItems('BlockChain')}>BlockChain</button>
          <button className="button" onClick={() => filterItems('Latest')}>Latest</button>
        </div>
      </div>
      <div className="menu-items" data-aos="zoom-in">
        {/* my main item section    */}
        {items.map((element) => {
          return (
            <div className="menu-item" key={element.id} data-aos="zoom-in" data-aos-duration="1500">
              <div className="card-image-wrapper">
              <div className="image">
                <img src={element.image} alt="" />
              </div>
              <div className="content">
                <h2>{element.name}</h2>
                <p>{element.description}</p>
              </div>
              </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};
export default Portfolio;
