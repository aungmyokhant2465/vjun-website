import "../styles/shop.css";
import React, { useEffect, useState } from "react";
import img1 from "../static/images/image10.png";
// import img2 from "../static/images/shop.png";

import { useLazyQuery } from "@apollo/client";
import { SHOPS } from "../query";

const Shop = () => {
  const [shops, setShops] = useState(null);
  const [search, setSearch] = useState("yangon");
  const [load, result] = useLazyQuery(SHOPS);

  useEffect(() => {
    load({ variables: { search: `%${search}%` } });
  }, [load, search]);

  useEffect(() => {
    if (result.data) {
      setShops(result.data.shop_data);
    }
  }, [result.data]);

  if (!shops) {
    return <div>Loading...</div>;
  }

  // const shops = result.data.shop_data;
  // console.log(shops);

  return (
    <main id="shop-container">
      <article className="video-container">
        <img src={img1} alt="" />
      </article>
      <section className="content">
        <h1>Our Shop</h1>
        <ul className="shop-tag-container">
          <li className="shop-tag">
            <button
              onClick={() => setSearch("yangon")}
              className={search === "yangon" ? "tag-active" : ""}
            >
              Yangon Shop
            </button>
          </li>
          <li className="shop-tag">
            <button
              onClick={() => setSearch("mandalay")}
              className={search === "mandalay" ? "tag-active" : ""}
            >
              Mandalay Shop
            </button>
          </li>
          <li className="shop-tag">
            <button
              onClick={() => setSearch("corner")}
              className={search === "corner" ? "tag-active" : ""}
            >
              Corner Shop
            </button>
          </li>
        </ul>
      </section>
      <div className="shop-content">
        <article className="shop-container content">
          {shops.map((shop, index) => (
            <div className="shop-cart" key={index}>
              <div className="shop-cart-image">
                <img src={shop.shop_photo} alt="" />
              </div>
              <div className="shop-cart-content">
                <ul>
                  <li>
                    <h3>{shop.shop_name}</h3>
                  </li>
                  <li>
                    <span>Google Map</span>
                    <span>
                      : <a href={shop.map_link}>{shop.map_link}</a>
                    </span>
                  </li>
                  <li>
                    <span>Hotline</span>
                    <span>: {shop.phone}</span>
                  </li>
                  <li>
                    <span>Note</span>
                    <span>: {shop.note}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          {/* <div className="shop-cart">
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
        </div> */}
        </article>
      </div>
    </main>
  );
};

export default Shop;
