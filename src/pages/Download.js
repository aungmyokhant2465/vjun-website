import "../styles/download.css";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import img1 from "../static/images/phone.png";
import img2 from "../static/images/mark.png";
// import img3 from "../static/images/phone.png";
// import img4 from "../static/images/image14.png";
// import img5 from "../static/images/image2.jpg";
// import img6 from "../static/images/image1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import AOS from "aos";

const Download = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 300,
    });
  }, []);

  const homeSlide = () => {
    swiperRef.slideTo(0, 1000);
  };

  const profileSlide = () => {
    swiperRef.slideTo(1, 1000);
  };

  const shopSlide = () => {
    swiperRef.slideTo(2, 1000);
  };

  const customizeSlide = () => {
    swiperRef.slideTo(3, 1000);
  };

  return (
    <main id="download">
      <section className="download-third-section">
        <div>
          <h3>Avaiable on IOS and Android</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et.
          </p>
          <div className="download-btn-container">
            <a href="/#"> </a>
            <a href="/#"> </a>
          </div>
        </div>
        <div></div>
      </section>
      <div className="download-content">
        <section className="download-second-section content">
          <h2>Showcase</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <article id="screenshot-slideshow">
            <Swiper
              onSwiper={setSwiperRef}
              className="screenshot-swiper"
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              // pagination={{
              //     clickable: true
              // }}
              modules={[Autoplay]}
            >
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src={img1} alt="" />
              </SwiperSlide>
            </Swiper>
          </article>
          <div className="btn-container">
            <button id="home-slide" onClick={() => homeSlide()}>
              home
            </button>
            <button id="profile-slide" onClick={() => profileSlide()}>
              profile
            </button>
            <button id="shop-slide" onClick={() => shopSlide()}>
              shop
            </button>
            <button id="customize-slide" onClick={() => customizeSlide()}>
              customize
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </section>
      </div>
      <section className="download-first-section content">
        <h2>Awesome Features</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h3>
        <div className="grid-container">
          <div>
            <div className="circle"></div>
            <h3>Clean Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <h3>Bright Colors</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div>
            <div className="circle"></div>
            <h3>Customization</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="properties-container">
        <Swiper
          className="properties-swiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            500: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          slidesPerView={3}
          spaceBetween={1}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Simple layout
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Attractive Layout
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Simple layout
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Attractive Layout
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Simple layout
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" className="mark-img" /> Attractive Layout
          </SwiperSlide>
        </Swiper>
      </section>
      {/* <section className="download-fourth-section">
        <h2>App Screens</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <article id="screens-slideshow">
          <Swiper
            className="screens-swiper"
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
          </Swiper>
        </article>
      </section> */}
    </main>
  );
};

export default Download;
