import 'swiper/css';
import 'swiper/css/pagination';
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from 'swiper'

import swipwerImg1 from  "../static/images/image14.png"
import swipwerImg2 from  "../static/images/image1.jpg"
import swipwerImg3 from  "../static/images/image2.jpg"

const Slideshow = () => {
    return (
        <article id="slideshow">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true
                }}
                modules={[ Pagination, Autoplay ]}
            >
                <SwiperSlide className="swiper mySwiper">
                    <img src={swipwerImg1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper mySwiper">
                    <img src={swipwerImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiper mySwiper">
                    <img src={swipwerImg3} alt="" />
                </SwiperSlide>
            </Swiper>
        </article>
    )
}

export default Slideshow