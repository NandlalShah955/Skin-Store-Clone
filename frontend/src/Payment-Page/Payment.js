import React, { useState,useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Payment.css";
import {BsCheckCircleFill} from 'react-icons/bs'
function Payment() {
  const navi=useNavigate()
  const [data, setdata] = useState([])
  const [total, settotal] = useState(0)
  const [totalcost, settotalcost] = useState(0)
  
  const [success, setsuccess] = useState(false)
  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      console.log(data);
      // return(data)
      setdata(data);
      console.log(data);

const tc=data.reduce((total,a)=>{
  return total+Number(a.price)
},0)


settotal(tc)


    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

const attheend =()=>{
setsuccess(true)
  setTimeout(() => {
    navi('/')
// window.alert("helo")
}, 4000);

}

  if(success){
    return ( 
    <>
<BsCheckCircleFill className="donedanadan"/>
<h1>Order Placed</h1>
<p>Thank You for Placing the Order Keep Shoping</p>
   
    </>)
  }


  return (
    <div>
     <h1>Payment </h1>
      <nav className="payment_navbar">
        <Link to="/">
          <img src="https://s1.thcdn.com/checkout/resources/images/e1ea488cfe9c3b7fc40c08ba4949b1c9.svg" />
        </Link>
      </nav>

      <section className="maindiv">
        <div className="sbhai">
          <div className="emailwala">
            <h2 style={{marginBottom: "10px"}}>Checkout as a guest</h2>
            <p className="uparkro" style={{marginBottom: "5px"}}>
              Complete your order Without signing up,or sign up after payment
            </p>
            <h2 style={{marginBottom: "10px"}}>1.Email and delivery address</h2>
            <label>Email Address</label>
            <input type="text" />
          <p className="uparkro"> We'll send the purchase receipt to this email</p> 
            <label>Country/Region</label>
            <input type="text" />
            <label> Full Name</label>
            <input type="text" />
            <label>Zip Code/Postcode</label>
            <input type="text" name="" id="" />
            <label>Address</label>
            <input type="text" />
            <label>Town/City</label>
            <input type="text" />
            <label>Contact</label>
            <input type="text" />
          </div>
          <div className="chotawla">
            <h2>2.Select Delivery Option</h2>
            <button>
              PLease Enter your address so we can calculate your delivery
              options.
            </button>
          </div>
          <div className="paymentmethod">
            <h2>3.Select Payment Method</h2>

            <h3>Credit/Debit Card</h3>
            <div className="chotiimage">
              <img src="https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg" alt="" />
              <img src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg" alt="" />
              <img src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg" alt="" />
              <img src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg" alt="" />
            </div>

            <label>Card Number</label>
            <input type="password" />

            <label>Name on card</label>
            <input type="text" />

            <label>Expiry Date</label>
            <input type="month" />
<label>Year</label>
            <input type="year" />
          </div>
          <button className="submit" onClick={attheend}>SUBMIT MY ORDER</button>
        
        </div>
         

        
        
        <div className="imageswala">
          {/* wrap in this div  */}
          <h2>Your products: </h2>
          {/* {data?.map((el) => (
            <div className="imgandprice">
              <div className="onlyimage" key={el.id}>
                <img src={el.image} alt="nandlal" />
              </div>

              <div className="pricedesc">
                <p>{el.title}</p>
                <p>Price: {`$${el.price}.00`} </p>
              </div>
            </div>
          ))}
          <p>Total Price:{total}</p> */}

        </div>
      </section>
    </div>
  );
}

export default Payment;
