import "../styles/vlogs.css";
import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { BLOGS } from "../query";

const Vlogs = () => {
  const result = useQuery(BLOGS);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const blogs = result.data.blog_data;

  return (
    <main id="vlogs-container" className="vlogs-content">
      <section className="content">
        <h1>Blog posts</h1>
        <p>Our latest updates and blogs about managin your team</p>
      </section>
      <article className="vlogs-container content">
        {blogs.map((blog, index) => (
          <Link to={`/blog/${blog.id}`} key={index}>
            <div className="vlogs-cart">
              <div className="vlogs-cart-image">
                <img src={blog.title_image_url} alt="" />
              </div>
              <div className="vlogs-cart-content">
                <h2>{blog.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.body.substring(
                      blog.body.search(/<p>/) + 3,
                      30
                    ),
                  }}
                ></div>
              </div>
            </div>
          </Link>
        ))}
      </article>
    </main>
  );
};

export default Vlogs;
