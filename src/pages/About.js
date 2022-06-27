import React, { useEffect } from "react";
import img1 from "../static/images/image10.png";
import img2 from "../static/images/image17.png";
import AOS from "aos";

const About = () => {
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
      <section className="content">
        <h1>ABOUT V.Jun</h1>
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
            <div className="about-img-container" data-aos="flip-left">
              <img src={img2} alt="" />
            </div>
            <div data-aos="fade-left">
              <h3>INNOVATION</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
          </section>
          <section>
            <div className="about-img-container" data-aos="flip-right">
              <img src={img2} alt="" />
            </div>
            <div data-aos="fade-right">
              <h3>OUR TEAM</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
          </section>
          <section>
            <div className="about-img-container" data-aos="flip-left">
              <img src={img2} alt="" />
            </div>
            <div data-aos="fade-left">
              <h3>SOCIAL & COMMUNITY IMPACT</h3>
              <p>
                Wireless charging is not something of the future, it’s
                everywhere, so your experience should be hassle-free. Our iPhone
                cases are built to withstand Qi, supporting the new standard of
                wireless charging. Charge away without having to remove your
                iPhone cases, so you never have to compromise style for
                functionality.
              </p>
            </div>
          </section>
        </article>
      </article>
    </main>
  );
};

export default About;
