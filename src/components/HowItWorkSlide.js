import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import img7 from "../static/images/image16.png";
import img8 from "../static/images/image4.png";

const HowItWorkSlide = () => {
  return (
    <article id="how-it-work" className="content">
      <Swiper
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-up">
            <section>
              <h2>How it work</h2>
              <p>
                A point reward system is the customer loyalty system that allows
                you to reward customers with points for various actions they
                take on your website such as making purchases, writing product
                reviews, referring friends, etc. These reward points c an be
                used to exchange for special deals or discounts on the next
                purchases.
              </p>
              <ul>
                <li>
                  You earn 10 points for every 10000ks you spend on v.june
                </li>
                <li>
                  Use your points to redeem exciting deals and promotions.
                </li>
              </ul>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in-up">
            <img src={img8} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-up">
            <section>
              <h2>How it work</h2>
              <p>
                A point reward system is the customer loyalty system that allows
                you to reward customers with points for various actions they
                take on your website such as making purchases, writing product
                reviews, referring friends, etc. These reward points c an be
                used to exchange for special deals or discounts on the next
                purchases.
              </p>
              <ul>
                <li>
                  You earn 10 points for every 10000ks you spend on v.june
                </li>
                <li>
                  Use your points to redeem exciting deals and promotions.
                </li>
              </ul>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in-up">
            <img src={img7} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper content-container">
          <div className="home-slide-content" data-aos="slide-up">
            <section>
              <h2>How it work</h2>
              <p>
                A point reward system is the customer loyalty system that allows
                you to reward customers with points for various actions they
                take on your website such as making purchases, writing product
                reviews, referring friends, etc. These reward points c an be
                used to exchange for special deals or discounts on the next
                purchases.
              </p>
              <ul>
                <li>
                  You earn 10 points for every 10000ks you spend on v.june
                </li>
                <li>
                  Use your points to redeem exciting deals and promotions.
                </li>
              </ul>
            </section>
          </div>
          <div className="home-slide-image" data-aos="zoom-in-up">
            <img src={img8} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

export default HowItWorkSlide;
