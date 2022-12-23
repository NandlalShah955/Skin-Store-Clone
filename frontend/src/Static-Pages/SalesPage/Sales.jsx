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
  // const [loading, setloading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();


  const getData = () => {
    if (sort_x === "lowtohigh") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/asc?page=${currentPage}`);
    } else if (sort_x === "hightolow") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/desc?page=${currentPage}`
      );
    } else if (sort_x === "ot") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ot?page=${currentPage}`);
    } else if (sort_x === "et") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/et?page=${currentPage}`);
    } else if (sort_x === "tt") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/tt?page=${currentPage}`);
    } else if (sort_x === "ff") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/ff?page=${currentPage}`);
    } else if (sort_x === "af") {
      return axios.get(`https://blossombackend.onrender.com/products/Sale/af?page=${currentPage}`);
    } else if (sort_x === "three") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/three?page=${currentPage}`
      );
    } else if (sort_x === "four") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/four?page=${currentPage}`
      );
    } else if (sort_x === "five") {
      return axios.get(
        `https://blossombackend.onrender.com/products/Sale/five?page=${currentPage}`
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
    // setloading(true)
    getData()
      .then((res) =>{
        setData(res.data)
        // setloading(false)
      }).catch((err) => console.log(err));
      
  
  
  
  }, [currentPage, sort_x]);

// if(loading){
//   return <h1>loading...</h1>
// }







  return (
    <div className={styles.main__sales}>
      <div className={styles.navigation_tab}>
        <span className={styles.home_hover}>Home</span> <span>/</span>{" "}
        <span>All Products</span>
      </div>
      <div className={styles.main__products}>
        {/* filter section  */}
        <div style={{marginTop: "30px"}} className={styles.refine}>
          <p className={styles.refine_head}>Refine</p>
          <div>
            <hr />
          </div>
          <div className={styles.savings}>
            <div onClick={() => setClick(!click)}>
              <p>Get Products By Price Range</p>
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
              <div></div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Price</option>
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
                <option value="defalt">Rating</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select>
            </div>
          </div>
        </div>

        {/* product section  */}
        <div className={styles.products_area}>
          {/* <p className={styles.off_percent}>Up to 50% off!</p> */}
          <p style={{color: "teal", fontSize: "20px", fontFamily: "cursive", fontWeight: "bolder", marginBottom: "40px"}} className={styles.results}>{data.length} Results</p>
          {/* <p className={styles.results} style={{ marginTop: "20px" }}> */}
            {/* Shop up to 50% off best-selling brands like SkinMedica, Decorté & */}
            {/* more! */}
          {/* </p> */}
          {/* <p className={styles.results}>
            Check out our featured offers page here, or our coupons page for all
            live offers here.</u>
          </p> */}

          {/* sorting and paginatin section  */}
          <div className={styles.sort_page}>
            {/* sorting  */}
            <div className={styles.sorting}>
              <div>Sort :</div>
              <select name="" id="" onChange={sort_func}>
                <option value="defalt">Sort By Price</option>
                <option value="lowtohigh">Price: Low to High</option>
                <option value="hightolow">Price: High to Low</option>
                {/* <option value="a-z">A-Z</option> */}
              </select>
            </div>
            {/* pagination  */}
            {/* <div className={`${styles.pagination} ${styles.hidden}`}>
              <Pagination setCurrentPage={setCurrentPage} />
            </div> */}
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
