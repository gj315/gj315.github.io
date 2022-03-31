import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "/node_modules/swiper/swiper.min.css";
import "/node_modules/swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "/node_modules/swiper/modules/pagination/pagination.min.css";
import "/node_modules/swiper/modules/navigation/navigation.min.css";
import "/node_modules/swiper/modules/zoom/zoom.min.css";
import "./Testimonial.css";

import ClientData from "./ClientData";

import SwiperCore, {
  EffectCoverflow,
  Keyboard,
  Pagination,
  Navigation,
  Autoplay,
  Zoom,
} from "swiper/core";

SwiperCore.use([
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Autoplay,
  Zoom,
]);

const Testimonial = () => {
  return (
    <section id="testimonial" className="main-testimonials-wrapper">
      
      <h2 className="sec-title">Awesome Quote from my Client's</h2>
      <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
        zoom={true}
        navigation={true}
        slidesPerView={window.innerWidth < 1080 ? 1 :'auto'}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
          
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
          modifier: 6,
          slideShadows: true,
          
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
