import '../styles/vlog.css'
import React from "react";
import img1 from '../static/images/image10.png'
import img2 from '../static/images/image14.png'
import img3 from '../static/images/image11.png'
import img4 from '../static/images/image12.png'
import img5 from '../static/images/image1.jpg'

const Vlog = () => {
    return (
        <main>
        <article class="video-container">
            <img src={img1} alt="" />
        </article>
        <section>
            <div>
                <h2>Nudient's Bold Case</h2>
                <p>
                    The Otterbox Symmetry gives you the same level of protection you’ve come to expect from the Otterbox Defender Series, 
                    only this time without the added bulk. The ultra slim yet protective design is perfect for carrying your phone in your pocket.
                    The Otterbox Symmetry gives you the same level of protection  you’ve come to expect from the Otterbox Defender Series
                </p>
            </div>
            <div class="blog-image-conatiner">
                <div class="blog-img-content first">
                    <img src={img2} alt="" />
                </div>
                <div class="blog-img-content second">
                    <img src={img3} alt="" />
                </div>
                <div class="blog-img-content third">
                    <img src={img4} alt="" />
                </div>
            </div>
        </section>
        <article class="blog-full-img">
            <img src={img5} alt="" />
        </article>
    </main>
    )
}

export default Vlog