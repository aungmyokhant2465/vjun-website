import "../styles/shop.css";
import React from "react";
import img1 from "../static/images/image10.png";
import img2 from "../static/images/shop.png";

import { useQuery } from "@apollo/client";
import { SHOPS } from "../query";

const Shop = () => {
  const result = useQuery(SHOPS);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  const shops = result.data.shop_data;
  console.log(shops);

  return (
    <main id="shop-container">
      <article className="video-container">
        <img src={img1} alt="" />
      </article>
      <section>
        <h1>Our Shop</h1>
        <ul className="shop-tag-container">
          <li className="shop-tag">
            <button className="tag-active">Yangon Shop</button>
          </li>
          <li className="shop-tag">
            <button>Madalay Shop</button>
          </li>
          <li className="shop-tag">
            <button>Corner Shop</button>
          </li>
        </ul>
      </section>
      <article className="shop-container">
        {shops.map((shop, index) => (
          <div className="shop-cart" key={index}>
            <div className="shop-cart-image">
              <img src={shop.shop_photo} alt="" />
            </div>
            <div className="shop-cart-content">
              <ul>
                <li>
                  <span>{shop.shop_name}</span>
                </li>
                <li>
                  <span>Google Map</span>
                  <span>
                    :{" "}
                    <a href={shop.map_link}>
                      https://goo.glmaps/2hgVtyQyiGqRJZQPA
                    </a>
                  </span>
                </li>
                <li>
                  <span>Daily Open</span>
                  <span>: 09:00 am - 19:30 pm</span>
                </li>
                <li>
                  <span>Hotline</span>
                  <span>：09-753-916-010</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className="shop-cart">
          <div className="shop-cart-image">
            <img src={img2} alt="" />
          </div>
          <div className="shop-cart-content">
            <ul>
              <li>
                <span>YGN - U Tun Lin Chan Shop</span>
              </li>
              <li>
                <span>Google Map</span>
                <span>
                  :{" "}
                  <a href="https://goo.glmaps/2hgVtyQyiGqRJZQPA">
                    https://goo.glmaps/2hgVtyQyiGqRJZQPA
                  </a>
                </span>
              </li>
              <li>
                <span>Daily Open</span>
                <span>: 09:00 am - 19:30 pm</span>
              </li>
              <li>
                <span>Hotline</span>
                <span>：09-753-916-010</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="shop-cart">
          <div className="shop-cart-image">
            <img src={img2} alt="" />
          </div>
          <div className="shop-cart-content">
            <ul>
              <li>
                <span>YGN - U Tun Lin Chan Shop</span>
              </li>
              <li>
                <span>Google Map</span>
                <span>
                  :{" "}
                  <a href="https://goo.glmaps/2hgVtyQyiGqRJZQPA">
                    https://goo.glmaps/2hgVtyQyiGqRJZQPA
                  </a>
                </span>
              </li>
              <li>
                <span>Daily Open</span>
                <span>: 09:00 am - 19:30 pm</span>
              </li>
              <li>
                <span>Hotline</span>
                <span>：09-753-916-010</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="shop-cart">
          <div className="shop-cart-image">
            <img src={img2} alt="" />
          </div>
          <div className="shop-cart-content">
            <ul>
              <li>
                <span>YGN - U Tun Lin Chan Shop</span>
              </li>
              <li>
                <span>Google Map</span>
                <span>
                  :{" "}
                  <a href="https://goo.glmaps/2hgVtyQyiGqRJZQPA">
                    https://goo.glmaps/2hgVtyQyiGqRJZQPA
                  </a>
                </span>
              </li>
              <li>
                <span>Daily Open</span>
                <span>: 09:00 am - 19:30 pm</span>
              </li>
              <li>
                <span>Hotline</span>
                <span>：09-753-916-010</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Shop;
