import image1 from "./images/car1.jpg";
import image2 from "./images/car2.jpg";
import image3 from "./images/car3.jpg";
import image4 from "./images/car4.jpg";
import image5 from "./images/car5.jpg";
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

export const Swiper1 = () => {
  return (
    <>
      {" "}
      <div className="box">
      <div className="container mt-5  ">
        <div className="row">
          <div className="col">
<span className="fw-bolder fs-4">Browse by make</span>
        
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
                    <h5 className="card-title text-center ">Mercedes</h5>
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
                    <h5 className="card-title text-center ">Toyota</h5>
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
                    <h5 className="card-title text-center ">Nissan</h5>
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
                    <h5 className="card-title text-center ">Lamborghini</h5>
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
                    <h5 className="card-title text-center ">Ford</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image6}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Jeep</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image7}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Tesla</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image8}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Subaru</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image9}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center ">Porche</h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-card card" style={{ width: "" }}>
                  <img
                    className="card-img-top"
                    src={image10}
                    alt="Card image cap"
                    />
                  <div className="card-body">
                    <h5 className="card-title text-center ">BMW</h5>
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
