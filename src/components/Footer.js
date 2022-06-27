import React from "react";

import img1 from "../static/images/logo192.png";
import img2 from "../static/icons/facebook.svg";
import img3 from "../static/icons/telegram.svg";
import img4 from "../static/icons/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <div id="footer-logo-container">
              <img src={img1} alt="V.jun" />
            </div>
            <div id="footer-download-links-container">
              <h3>Download App</h3>
              <div className="download-btn-container">
                <a href="/#"> </a>
                <a href="/#"> </a>
              </div>
            </div>
            {/* <div className="logo-container">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div> */}
          </div>
          <div className="more-footer">
            <article>
              <h3>Shops</h3>
              <ul>
                <li>Yangon</li>
                <li>mandalay</li>
                <li>Corner Shops</li>
                <li>Content</li>
              </ul>
            </article>
            <article>
              <h3>Resources</h3>
              <ul>
                <li>Delivery</li>
                <li>Blog</li>
                <li>Royalty Program</li>
                <li>Customization</li>
              </ul>
            </article>
            <article>
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Teams</li>
              </ul>
            </article>
          </div>
          <div>
            {/* <a href="tel:09753916010">Hotline : +959 772 919268</a>
          <a href="tel:+09753916009">Hotline : +959 772 919268</a>
          <address>
            No(35/B) Insein Street, Kamaryut Township, Khaing Shwe War St x
            Insein St, Yangon
          </address> */}
            <article>
              <h3>Contact Us</h3>
              <address>
                No((35/B) Insein Street, Kamaryut Township, Khaing Shwe War St x
                Insein St. Yangon
              </address>
              <div>
                <a href="tel:09753916010">09 753 916 010</a>
                <a href="tel:09753916009">, 09 753 916 009</a>
              </div>
              <a href="mailto:support@figma.com">support@figma.com</a>
            </article>
          </div>
        </div>
        <div className="follow-us">
          <h4>Follow us</h4>
          <div className="logo-container">
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>Copyright &copy; 2022 V.Jun</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
