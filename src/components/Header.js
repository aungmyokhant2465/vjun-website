import React from "react";
import logoImg from "../static/images/vjun.png";
import appStoreImg from "../static/images/appStoreLogo.png";
import googlPlayImg from "../static/images/googlePlayLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={logoImg} alt="V.jun" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="download">Download</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {/* <li><a href="/about.html">About</a></li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div>
          <a href="/#">
            <img src={appStoreImg} alt="download on the App Store" />
          </a>
          <a href="/#">
            <img src={googlPlayImg} alt="Get it on Google Play" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
