import React, { useEffect } from "react";

import img1 from '../static/images/image5.png'
import img2 from '../static/images/image6.png'
import img3 from '../static/images/image7.png'
import img4 from '../static/images/image8.png'
import img5 from '../static/images/image9.png'
import img6 from '../static/images/image3.png'
import img7 from '../static/images/image16.png'
import img8 from '../static/images/image4.png'
import AOS from "aos";
import Slideshow from '../components/Slideshow';

const Home = () => {

    useEffect(() => {
        AOS.init({
            offset: 300
        })
    }, [])

    return (
        <main>
        <Slideshow />
        <article id="how-it-work" className="content-container">
            <div data-aos="slide-up">
                <section>
                    <h2>How it work</h2>
                    <p>
                        A point reward system is the customer loyalty system that allows you to reward customers with points for various actions they take on your website such as making purchases, writing product reviews, referring friends, etc. These reward points c an be used to exchange for special deals or discounts on the next purchases.
                    </p>
                    <ul>
                        <li>You earn 10 points for every 10000ks you spend on v.june</li>
                        <li>Use your points to redeem exciting deals and promotions.</li>
                    </ul>
                </section>
            </div>
            <div data-aos="zoom-in-up">
                <img src={img8} alt="" />
            </div>
        </article>
        <article id="vip-card" className="content-container">
            <div data-aos="slide-up">
                <section>
                    <h2>What is v.jun vip card ?</h2>
                    <p>
                        Wireless charging is not something of the future, it’s everywhere, so your experience should be hassle-free. Our iPhone cases are built to withstand Qi, supporting the new standard of wireless charging. Charge away without having to remove your iPhone cases, so you never have to compromise style for functionality.
                    </p>
                    <a href="/#" className="btn read-more-secondary" >LEARN MORE</a>
                </section>
            </div>
            <div data-aos="zoom-in">
                <img src={img7} alt="" />
            </div>
        </article>
        <section id="articles">
            <div className="articles-content">
                <h1>Recent Article</h1>
                <p>Convert your everyday device into a fashion accessory. BURGAphone cases are ultra-thi</p>
            </div>
            <div className="article-container">
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img1} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img2} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img3} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img4} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img5} alt="" />
                </div>
                <div className="img-container" data-aos="flip-left" data-aos-duration="2000">
                    <img src={img6} alt="" />
                </div>
            </div>
        </section>
        <article id="as-seen-in">
            <section className="cart">
                <h3>AS SEEN IN</h3>
                <p>
                    * Comes in all sorts of colors and styles that you can customize for yourself. And suprise, it's compostable *
                </p>
                <a href="/#" className="btn view-our-work" >VIEW OUR WORK</a>
            </section>
        </article>
    </main>
    )
}

export default Home