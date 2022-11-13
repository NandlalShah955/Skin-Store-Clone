import { render } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Carts.css";
import { useNavigate } from "react-router-dom";
// import { useStateContext } from '../Context/CartContext';

const Carts = () => {
  const [data, setdata] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  // let fetchData = []
  const datafromback = JSON.parse(localStorage.getItem("cartItems"));
  console.log(datafromback, "datahai");

  const newdata = datafromback.map((i, val) => {
    return i[0].image;
  });
  const desc = datafromback.map((i, val) => {
    return i[0].description;
  });
  const titl = datafromback.map((i, val) => {
    return i[0].title;
  });
  const rate = datafromback.map((i, val) => {
    return i[0].price;
  });
  // {
  //   
  // <div className='cartNimage'></div>
  // ))
  // }
  // console.log(newdata)

  return (
    <div className="imagedescpr">
      {
        newdata.map((el)=>(
        <div className="Mainiimageonly">
        <img src={el} alt="" />
        
      </div>
      ))
      }
      {
        titl.map((el)=> (
          <div className="CartTitle">
            <p>{el}</p>
          </div>
        ))
      }

      {<div className="desc"></div>}
      {<div className="ratehaimeara"></div>}
    </div>
  );
};

export default Carts;
