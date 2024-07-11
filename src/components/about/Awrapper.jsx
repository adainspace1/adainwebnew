import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Footer from "../common/footer/Footer";
import Contact from "../contact/Contact";


const Awrapper = () => {
  

  return (
    <>
      <div className="container">
        <h1 className="heading">AdaIn</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={'./images/13.jpeg'} alt="slide_image"  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/11.jpeg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/12.jpeg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/10.jpeg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/14.jpeg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/15.jpeg'} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={'./images/bg.webp'} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

   
      <Contact/>
      <Footer />
    </>
  );
}
    
    

export default Awrapper;
