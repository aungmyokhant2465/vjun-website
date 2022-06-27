import "../styles/about.css";
import React, { useEffect } from "react";
import img1 from "../static/images/image10.png";
import img2 from "../static/images/VJunBrand.png";
import img3 from "../static/images/yesidoBrand.png";
import img4 from "../static/images/aweiBrand.png";
import AOS from "aos";

const Brand = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
    });
  });

  return (
    <main id="about-container">
      <article className="video-container">
        <img src={img1} alt="" />
      </article>
      <section>
        <h1>Our Brand</h1>
        <p>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking innovations, by
          making our products more sustainably, by building a creative and
          diverse team and by making a positive impact in communities where we
          live and work.
        </p>
      </section>
      <article className="about-content">
        <article className="about-slides content">
          <section>
            <div data-aos="fade-right">
              <h3>V.Jun</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
            <div className="about-img-container" data-aos="flip-left">
              <img src={img2} alt="" />
            </div>
          </section>
          <section>
            <div data-aos="fade-left">
              <h3>YESIDO</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
            <div className="about-img-container" data-aos="flip-right">
              <img src={img3} alt="" />
            </div>
          </section>
          <section>
            <div data-aos="fade-right">
              <h3>AWEI</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
            <div className="about-img-container" data-aos="flip-left">
              <img src={img4} alt="" />
            </div>
          </section>
        </article>
      </article>
    </main>
  );
};

export default Brand;
