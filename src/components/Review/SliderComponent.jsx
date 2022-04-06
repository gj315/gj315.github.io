import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import ClientData from "./ClientData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Review.css";
const SliderComponent = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    arrow: true,
    navigation:true,
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          fade: true,
          
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
    beforeChange: (Current, next) => setSlideIndex(next),
  };

    return (
        <div className="slidercomponent" id="testimonials" >
        <h2 className="sec-title">Awesome Quote from my Client's</h2>
    <div className="slider">
      <Slider {...settings}>
        {ClientData.map((block, index) => {
            return (
                <Fragment>
                
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
                >
             
              <div className="Review" >
                <div className="image">
                  <img src={block.image} alt="freelancer" />
                  <h2 className="name">{block.name}</h2>
                  <h3 className="post-company">
                    {block.post}
                    <span> at </span>
                    {block.company_name}
                  </h3>
                </div>
                <div className="line"></div>
                <div className="content">
                  <h2 className="Quote">{block.client_quote}</h2>
                </div>
              </div>
             </div>
            </Fragment>
          );
        })}
      </Slider>
            </div>
            </div>
    
  );
};

export default SliderComponent;
