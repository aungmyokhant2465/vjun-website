import React from "react"

import img1 from '../static/images/logo192.png'
import img2 from '../static/icons/Facebook_white.png'
import img3 from '../static/icons/Tumblr_white.png'
import img4 from '../static/icons/Twitter_white.png'

const Footer = () => {
    return (
        <footer>
        <div className="footer-content">
            <div>
                <a href="tel:09753916010">Hotline : +959 772 919268</a>
                <a href="tel:+09753916009">Hotline : +959 772 919268</a>
                <address>No (70) Kaing Dan Street, Lanmadaw Township, Yangon, Myanmar, 1113</address>
            </div>
            <div className="more-footer">
                <article>
                    <h3>About Us</h3>
                    <ul>
                        <li>About V.Jun</li>
                        <li>Visit Us</li>
                        <li>content Us</li>
                        <li>Careers</li>
                    </ul>
                </article>
                <article>
                    <h3>Help</h3>
                    <ul>
                        <li>FAQs</li>
                        <li>Delivery</li>
                        <li>Customization</li>
                        <li>Terms of service</li>
                    </ul>
                </article>
                <article>
                    <h3>Shops</h3>
                    <ul>
                        <li>Yangon Shops</li>
                        <li>mandalay Shops</li>
                        <li>Corner Shops</li>
                    </ul>
                </article>
            </div>
            <div>
                <div id="footer-logo-container">
                    <img src={img1} alt="V.jun" /> <span>Happy Shop with us!</span>
                </div>
                <div id="footer-download-links-container">
                    <h5>Download App</h5>
                    <div className="download-btn-container">
                        <a href="/#"> </a>
                        <a href="/#"> </a>
                    </div>
                </div>
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
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer