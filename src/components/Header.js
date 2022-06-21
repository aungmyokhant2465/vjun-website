import React from "react";
import logoImg from '../static/images/vjun.png'
import appStoreImg from '../static/images/appStoreLogo.png'
import googlPlayImg from '../static/images/googlePlayLogo.png'

const Header = () => {
    return (
    <header>
        <nav>
            <ul>
                <li>
                    <img src={logoImg} alt="V.jun" />
                </li>
                <li><a href="/#">Home</a></li>
                <li><a href="/download.html">Download</a></li>
                <li><a href="/blog.html">Blog</a></li>
                <li><a href="/about.html">About</a></li>
            </ul>
            <div>
                <a href="/#"><img src={appStoreImg} alt="download on the App Store" /></a>
                <a href="/#"><img src={googlPlayImg} alt="Get it on Google Play" /></a>
            </div>
        </nav>
    </header>
    )
}

export default Header