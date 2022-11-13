

import React, {  useState } from "react";
import "./Carts.css";
import {Link} from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

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
  const titl = datafromback.map((i, val) => {
    return i[0].title;
  });
  const rate = datafromback.map((i, val) => {
    return i[0].price;
  });

  console.log(rate,"rate")
  let meratotal=0;
for(var i=0; i<rate.length; i++) {
meratotal+=rate[i]
}
console.log(meratotal)

  return (
    <>
    <h1>Your Cart</h1>
    <div className="imagedescpr">
     
    
      <div>
      {
        newdata.map((el)=>(
        <div className="Mainiimageonly">
        <img src={el} alt="" />
        
      </div>
      ))
      }
      </div>
     <div>

    
      {
        titl.map((el)=> (
          <div className="CartTitle">
            <p>{el}</p>
            <button className="incdec">+</button>
  <button className="incdec">-</button>
          </div>
        ))
      }
 </div>
  
  


<div>
  {
        rate.map((el)=>(

        <div className="ratehaimeara">
    <p>Price:-{el}$ only</p>
        </div>
        ))
        
        }
</div>


      
    </div>
    <h3>Total Price:${meratotal}</h3>
   <Link to='/Payment'> <button className="antimpage">Checkout</button></Link>
   
    </>
  );
};

export default Carts;
