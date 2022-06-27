import React from "react";
import logoImg from "../static/images/vjun.png";
// import appStoreImg from "../static/images/appStoreLogo.png";
// import googlPlayImg from "../static/images/googlePlayLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logoImg} alt="V.jun" />
            </Link>
          </li>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/brand">Brand</Link>
          </li>
          <li>
            <Link to="/shop">Our Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="download">Download</Link>
          </li>
        </ul>
        {/* <div>
          <a href="/#">
            <img src={appStoreImg} alt="download on the App Store" />
          </a>
          <a href="/#">
            <img src={googlPlayImg} alt="Get it on Google Play" />
          </a>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
