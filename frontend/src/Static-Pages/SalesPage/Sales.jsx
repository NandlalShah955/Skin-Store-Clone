import React from "react";
import { useState } from "react";
import axios from "axios";

import styles from "./Sales.module.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
// AiFillHeart
import { GoSettings } from "react-icons/go";
import { useEffect } from "react";
import Stars from "./Stars";
import Pagination from "./Pagination";

import { Link, Navigate, useSearchParams } from "react-router-dom";


const Sales = () => {
  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort_x, setSort_x] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();


  const getData = () => {
    if (sort_x === "lowtohigh") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/asc`);
    } else if (sort_x === "hightolow") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/desc`
      );
    } else if (sort_x === "ot") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ot`);
    } else if (sort_x === "et") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/et`);
    } else if (sort_x === "tt") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/tt`);
    } else if (sort_x === "ff") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ff`);
    } else if (sort_x === "af") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/af`);
    } else if (sort_x === "three") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/three`
      );
    } else if (sort_x === "four") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/four`
      );
    } else if (sort_x === "five") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/five`
      );
    } else {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale?page=${currentPage}`
      );
    }
  };

  const sort_func = (event) => {
    setSort_x(event.target.value);
    getData(sort_x);
  };

  useEffect(() => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [currentPage, sort_x]);

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
              <p>Price</p>
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
            <div className={styles.sorting}>
              <div>Price</div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Default</option>
                <option value="ot">Less than $10</option>
                <option value="et">$10 to $20</option>
                <option value="tt">$20 to $30</option>
                <option value="ff">$40 to $50</option>
                <option value="af">Above $50</option>
              </select>
            </div>
          </div>

          <div className={styles.savings}>
            <div onClick={() => setClick1(!click1)}>
              <p>Get Products By Rating</p>
              {click1 ? (
                <MdOutlineKeyboardArrowUp className={styles.arrow} />
              ) : (
                <MdOutlineKeyboardArrowDown className={styles.arrow} />
              )}
            </div>
          </div>
          <div
            className={
              click1 ? `${styles.refine_option1}` : `${styles.refine_option2}`
            }
          >
            <div className={styles.sorting}>
              <div>Get Products By Rating</div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Default</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select>
            </div>
          </div>
        </div>

        {/* product section  */}
        <div className={styles.products_area}>
          <p className={styles.off_percent}>Up to 50% off!</p>
          <p className={styles.results}>{data.length} results</p>
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
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Default</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                {/* <option value="a-z">A-Z</option> */}
              </select>
            </div>
            {/* pagination  */}
            <div className={`${styles.pagination} ${styles.hidden}`}>
              <Pagination setCurrentPage={setCurrentPage} />
            </div>
            {/* responsive refine  */}
            <div className={styles.responsive_refine}>
              <p>Refine</p>
              <GoSettings />
            </div>
          </div>

          {/* main product  */}
          <div className={styles.all__main__products}>
            {data?.map(({ _id, image, title, rating, price }) => (
              <Link to={`/Sale/${_id}`}>
                
              <div key={_id} className={styles.each_product} >
                <div>
                  <div className={styles.wishlist}>
                    <AiOutlineHeart />
                    {/* <AiFillHeart />} */}
                  </div>
                  <img src={image} alt="product_img" />
                </div>
                <p className={styles.product__dis}>{title}</p>
                <Stars stars={rating} />
                <p className={styles.product__price}>$ {price}</p>
                <button className={styles.product__buy}>QUICK BUY</button>
              </div>
              </Link>
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
              <Pagination setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
