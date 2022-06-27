import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import img7 from "../static/images/image16.png";
import img8 from "../static/images/image4.png";

const VipCardSlide = () => {
  return (
    <article id="vip-card" className="content">
      <Swiper
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-right">
            <section>
              <h2>What is v.jun vip card ?</h2>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
              <a href="/#" className="btn read-more-secondary">
                LEARN MORE
              </a>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in">
            <img src={img7} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-right">
            <section>
              <h2>What is v.jun vip card ?</h2>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
              <a href="/#" className="btn read-more-secondary">
                LEARN MORE
              </a>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in">
            <img src={img8} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-right">
            <section>
              <h2>What is v.jun vip card ?</h2>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
              <a href="/#" className="btn read-more-secondary">
                LEARN MORE
              </a>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in">
            <img src={img7} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default VipCardSlide;
