import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import img1 from "../static/images/image5.png";
// import img2 from "../static/images/image6.png";
// import img3 from "../static/images/image7.png";
// import img4 from "../static/images/image8.png";
// import img5 from "../static/images/image9.png";
// import img6 from "../static/images/image3.png";
// import img7 from "../static/images/image16.png";
// import img8 from "../static/images/image4.png";
import img9 from "../static/images/phone.png";
import AOS from "aos";
import Slideshow from "../components/Slideshow";
import HowItWorkSlide from "../components/HowItWorkSlide";

import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../query";
import VipCardSlide from "../components/VipCardSlide";

const Home = () => {
  const result = useQuery(PRODUCTS);

  useEffect(() => {
    AOS.init({
      offset: 300,
    });
  }, []);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const products = result.data.products;
  console.log(products);

  return (
    <main>
      <Slideshow />
      {/* <article id="how-it-work" className="content-container content">
        <div data-aos="slide-up">
          <section>
            <h2>How it work</h2>
            <p>
              A point reward system is the customer loyalty system that allows
              you to reward customers with points for various actions they take
              on your website such as making purchases, writing product reviews,
              referring friends, etc. These reward points c an be used to
              exchange for special deals or discounts on the next purchases.
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
      </article> */}
      <HowItWorkSlide className="content" />
      {/* <article id="vip-card" className="content-container content">
        <div className="home-slide-content" data-aos="slide-right">
          <section>
            <h2>What is v.jun vip card ?</h2>
            <p>
              Wireless charging is not something of the future, it’s everywhere,
              so your experience should be hassle-free. Our iPhone cases are
              built to withstand Qi, supporting the new standard of wireless
              charging. Charge away without having to remove your iPhone cases,
              so you never have to compromise style for functionality.
            </p>
            <a href="/#" className="btn read-more-secondary">
              LEARN MORE
            </a>
          </section>
        </div>
        <div className="home-slide-image" data-aos="zoom-in">
          <img src={img7} alt="" />
        </div>
      </article> */}
      <VipCardSlide className="content" />
      <section id="articles">
        <div className="articles-content">
          <h1>Latest Products</h1>
          <p>
            Convert your everyday device into a fashion accessory. BURGAphone
            cases are ultra-thi
          </p>
        </div>
        <div className="article-container">
          {products.map((product, index) => (
            <Link
              to="/download/"
              key={index}
              className="img-container"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <img src={product.product_image_url} alt="" />
              <span className="product-label">{product.name}</span>
            </Link>
          ))}
        </div>
      </section>
      <article id="as-seen-in">
        <div>
          <section className="cart">
            <h3>AS SEEN IN</h3>
            <p>
              * Comes in all sorts of colors and styles that you can customize
              for yourself. And suprise, it's compostable *
            </p>
            <a href="/#" className="btn view-our-work">
              VIEW OUR WORK
            </a>
          </section>
        </div>
        <div className="phone-img">
          <img src={img9} alt="" />
        </div>
      </article>
    </main>
  );
};

export default Home;
