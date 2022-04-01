import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "/node_modules/swiper/swiper.min.css";
import "/node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "/node_modules/swiper/modules/pagination/pagination.min.css";
import "/node_modules/swiper/modules/navigation/navigation.min.css";

import "./Testimonial.css";

import ClientData from "./ClientData";

import SwiperCore, {
  EffectCoverflow,
  Keyboard,
  Pagination,
  Navigation,
  Autoplay,
  
} from "swiper/core";

SwiperCore.use([
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Autoplay,
  
]);

const Testimonial = () => {
  return (
    <section id="testimonial" className="main-testimonials-wrapper">
      
      <h2 className="sec-title">Awesome Quote from my Client's</h2>
      <Swiper
        navigation={true}
        spaceBetween={30}
        slidesPerView={window.innerWidth >768 ? '6' :(  window.innerWidth > 480 ? "5" :(window.innerWidth <480 && '4'))}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          
        }
        }
        effect={"coverflow"}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          // slideShadows: true,
          
        }}
      
      >
        {ClientData.map((item,index) => (
          <SwiperSlide>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.client_quote}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
