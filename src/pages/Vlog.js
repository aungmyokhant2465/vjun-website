import "../styles/vlog.css";
import React from "react";
import { useParams } from "react-router-dom";
// import img1 from "../static/images/image10.png";
import img2 from "../static/images/image14.png";
import img3 from "../static/images/image11.png";
import img4 from "../static/images/image12.png";
import img5 from "../static/images/image1.jpg";

import { useQuery } from "@apollo/client";
import { BLOG } from "../query";

const Vlog = () => {
  const { id } = useParams();

  const result = useQuery(BLOG, {
    variables: { id: id },
  });

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const blog = result.data.blog_data_by_pk;

  return (
    <main>
      <article className="video-container">
        <img src={blog.title_image_url} alt="" />
      </article>
      <section>
        <div>
          {/* <h2>Nudient's Bold Case</h2>
          <p>
            The Otterbox Symmetry gives you the same level of protection you’ve
            come to expect from the Otterbox Defender Series, only this time
            without the added bulk. The ultra slim yet protective design is
            perfect for carrying your phone in your pocket. The Otterbox
            Symmetry gives you the same level of protection you’ve come to
            expect from the Otterbox Defender Series
          </p> */}
          <h2>{blog.title}</h2>
          <p>
            <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
          </p>
        </div>
        <div className="blog-image-conatiner">
          <div className="blog-img-content first">
            <img src={img2} alt="" />
          </div>
          <div className="blog-img-content second">
            <img src={img3} alt="" />
          </div>
          <div className="blog-img-content third">
            <img src={img4} alt="" />
          </div>
        </div>
      </section>
      <article className="blog-full-img">
        <img src={img5} alt="" />
      </article>
    </main>
  );
};

export default Vlog;
