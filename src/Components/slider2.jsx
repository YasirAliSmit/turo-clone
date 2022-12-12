import image1 from "./images/atlanta.png";
import image2 from "./images/prosi.png";
import image3 from "./images/salt.png";
import image4 from "./images/los.png";
import image5 from "./images/london.png";
import image6 from "./images/car6.jpg";
import image7 from "./images/car7.jpg";
import image8 from "./images/car8.jpg";
import image9 from "./images/car9.jpg";
import image10 from "./images/car10.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Swipper2 = () => {
  return (
    <>
      {" "}
      <div className="box">

      <div className="container mt-5  ">
        <div className="row">
          <div className="col">
          <span className="fw-bolder fs-4">Browse by destination</span>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                280: {
                  //   width: 640,
                  slidesPerView: 1,
                },
                567: {
                  //   width: 640,
                  slidesPerView: 3,
                },
                768: {
                  //   width: 768,
                  slidesPerView: 5,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              >
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image1}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">Atlanta</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image2}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">Denvo</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image3}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">Miami</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image4}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">Los Angeles</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image5}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center fw-bolder">London</h5>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
       
                    
                              </div>
                            </div>
                          </div>
                    </div>
      
    </>
  );
};
