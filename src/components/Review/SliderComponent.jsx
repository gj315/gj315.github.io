import React,{useState} from 'react'
import Slider from 'react-slick';
import "./SliderComponent.css";

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ClientData from '../Testimonial/ClientData';

const SliderComponent = () => {
 


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
              <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
              <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0);


    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange:(current,next) =>setImageIndex(next)
    };


    return (
        <div className='slider'>
            <Slider {...settings}>
                <img src="assets/about-8.jpeg" alt="" />
                <img src="assets/student-g60ace7644_640.jpg" alt="" />
                <img src="assets/student-g60ace7644_640.jpg" alt="" />
                <img src="assets/student-g60ace7644_640.jpg" alt="" />
            </Slider>   
        </div>
    )
};

export default SliderComponent;