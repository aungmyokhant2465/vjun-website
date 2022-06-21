import '../styles/download.css'
import 'swiper/css';
import 'swiper/css/pagination';
import React, { useEffect, useState } from "react"
import img1 from '../static/images/phone.png'
import img2 from '../static/images/mark.png'
import img3 from '../static/images/phone.png'
import img4 from '../static/images/image14.png'
import img5 from '../static/images/image2.jpg'
import img6 from '../static/images/image1.jpg'
import img7 from '../static/images/image5.png'
import img8 from '../static/images/image3.png'
import img9 from '../static/images/image6.png'
import img10 from '../static/images/image7.png'
import img11 from '../static/images/image8.png'
import img12 from '../static/images/image9.png'
import Slideshow from "../components/Slideshow"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay} from 'swiper'
import AOS from "aos";

const Download = () => {

    const [ swiperRef, setSwiperRef ] = useState(null)

    useEffect(() => {
        AOS.init({
            offset: 300
        })
    }, [])

    const homeSlide = () => {
        swiperRef.slideTo(0, 1000)
    }

    const profileSlide = () => {
        swiperRef.slideTo(1, 1000)
    }

    const shopSlide = () => {
        swiperRef.slideTo(2, 1000)
    }

    const customizeSlide = () => {
        swiperRef.slideTo(3, 1000)
    }

    return (
    <main>
        <Slideshow />
        <section className="download-first-section">
            <h2>Awesome Features</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h3>
            <div className="grid-container">
                <div>
                    <div className="circle"></div>
                    <h3>Clean Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                </div>
                <div>
                    <div className="circle"></div>
                    <h3>Bright Colors</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                </div>
                <div>
                    <div className="circle"></div>
                    <h3>Customization</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                </div>
            </div>
        </section>
        <section className="download-second-section">
            <h2>Showcase</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <article id="screenshot-slideshow">
                <Swiper
                    onSwiper={setSwiperRef}
                    className='screenshot-swiper'
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true
                    // }}
                    modules={[ Autoplay ]}
                >
                    <SwiperSlide className='swiper-slide'>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                </Swiper>
            </article>
            <div className="btn-container">
                <button id="home-slide" onClick={() => homeSlide()}>home</button>
                <button id="profile-slide" onClick={() => profileSlide()}>profile</button>
                <button id="shop-slide" onClick={() => shopSlide()}>shop</button>
                <button id="customize-slide" onClick={() => customizeSlide()}>customize</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </section>
        <section className="properties-container">
            <Swiper
                className='properties-swiper'
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    500: {
                        slidesPerView: 4,
                        spaceBetween: 5
                    }
                }}
                slidesPerView={3}
                spaceBetween={1}
                modules={[ Autoplay ]}
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
        <section className="download-third-section">
            <div>
                <h2>Avaiable on IOS and Android</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etc</p>
                <div className="download-btn-container">
                    <a href="/#"> </a>
                    <a href="/#"> </a>
                </div>
            </div>
            <div></div>
        </section>
        <section className="download-fourth-section">
            <h2>App Screens</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
            <article id="screens-slideshow">
                <Swiper className='screens-swiper'
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[ Pagination, Autoplay ]}
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
        </section>
        <section className="articles">
            <div className="articles-content">
                <h1>V.Jun News</h1>
                <p>Convert your everyday device into a fashion accessory. BURGAphone cases are ultra-thi</p>
            </div>
            <div className="article-container">
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img7} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img8} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img9} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img10} alt="" /> 
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img11} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img12} alt="" />
                </div>
            </div>
        </section>
    </main>
    )
}

export default Download