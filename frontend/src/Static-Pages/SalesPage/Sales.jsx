import React from "react";
import { useState } from "react";
import axios from "axios";

import styles from "./Sales.module.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { useEffect } from "react";

const getData = () => {
  return axios.get(`http://localhost:8080/product`);
};

const Sales = () => {
  const [click, setClick] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const saving = [
    {
      id: 1,
      data: "Up to 25%",
      off: 168,
    },
    {
      id: 2,
      data: "25% to 50%",
      off: 477,
    },
    {
      id: 3,
      data: "50% to 75%",
      off: 104,
    },
    {
      id: 4,
      data: "MoreThan 75%",
      off: 2,
    },
  ];

  return (
    <div className={styles.main__sales}>
      <div className={styles.navigation_tab}>
        <span className={styles.home_hover}>Home</span> <span>/</span>{" "}
        <span>Featured Offers</span>
      </div>
      <div className={styles.main__products}>
        {/* filter section  */}
        <div className={styles.refine}>
          <p className={styles.refine_head}>Refine</p>
          <div>
            <hr />
          </div>
          <div className={styles.savings}>
            <div onClick={() => setClick(!click)}>
              <p>Savings</p>
              {click ? (
                <MdOutlineKeyboardArrowUp className={styles.arrow} />
              ) : (
                <MdOutlineKeyboardArrowDown className={styles.arrow} />
              )}
            </div>
          </div>
          <div
            className={
              click ? `${styles.refine_option1}` : `${styles.refine_option2}`
            }
          >
            {saving.map(({ id, data, off }) => (
              <div key={id}>
                <input type="checkbox" />
                <span>
                  {data} ({off})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* product section  */}
        <div className={styles.products_area}>
          <p className={styles.off_percent}>Up to 50% off!</p>
          <p className={styles.results}>{751} results</p>
          <p className={styles.results} style={{ marginTop: "20px" }}>
            Shop up to 50% off best-selling brands like SkinMedica, Decorté &
            more!
          </p>
          <p className={styles.results}>
            Check out our featured offers page here, or our coupons page for all
            live offers here.
          </p>

          {/* sorting and paginatin section  */}
          <div className={styles.sort_page}>
            {/* sorting  */}
            <div className={styles.sorting}>
              <div>Sort by</div>
              <select name="" id="">
                <option value="defalt">Default</option>
                <option value="popularity">Popularity</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                <option value="a-z">A-Z</option>
                <option value="percentage">Percentage Discount</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
            {/* pagination  */}
            <div className={`${styles.pagination} ${styles.hidden}`}>
              <button>
                <MdKeyboardArrowLeft />
              </button>
              <span>1</span>
              <span style={{ marginRight: "8px" }}>2</span> -{" "}
              <span style={{ marginLeft: "8px" }}>16</span>
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
            {/* responsive refine  */}
            <div className={styles.responsive_refine}>
              <p>Refine</p>
              <GoSettings />
            </div>
          </div>

          {/* main product  */}
          <div className={styles.all__main__products}>
            {data?.map(({ id, image, discription, orginalP, price }) => (
              <div key={id} className={styles.each_product}>
                <div>
                  <div className={styles.wishlist}>
                    <FiHeart />
                  </div>
                  <img src={image} alt="product_img" />
                </div>
                <p className={styles.product__dis}>{discription}</p>
                <p className={styles.product__msrp}>
                  MSRP: <span>{orginalP}</span>
                </p>
                <p className={styles.product__price}>$ {price}</p>
                <button className={styles.product__buy}>QUICK BUY</button>
              </div>
            ))}
          </div>

          {/* pagination  */}
          <div
            className={`${styles.sort_page} ${styles.responsive__sort_page}`}
            style={{ marginTop: "50px" }}
          >
            {/* sorting  */}
            <div className={`${styles.sorting} ${styles.hide__sorting}`}></div>
            {/* pagination  */}
            <div className={styles.pagination}>
              <button>
                <MdKeyboardArrowLeft />
              </button>
              <span>1</span>
              <span style={{ marginRight: "8px" }}>2</span> -{" "}
              <span style={{ marginLeft: "8px" }}>16</span>
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
