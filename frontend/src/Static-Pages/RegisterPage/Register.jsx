import React, { useState } from "react";
import styles from "./Register.module.css";

import facebook from "../LoginPage/logo/Facebook_F_icon.svg.png";
import google from "../LoginPage/logo/Google__G__Logo.svg.png";
import { useNavigate } from "react-router-dom";
import {signup} from "../../redux/signup/signup.actions";
import { useSelector, useDispatch } from "react-redux";
function Register() {
  const [userdetails, setuserdetails] = useState({});
  const navigate=useNavigate()
  const { isloading, iserror, isauth } = useSelector((store) => store.signup);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserdetails({
      ...userdetails,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userdetails.userName || !userdetails.email || !userdetails.password) {
      alert("Please fill all you details");
    } else {
      {
        alert("Your account has been Created");
      }
    dispatch(signup(userdetails))
    }
  };
if(isauth){
  navigate('/Login')
}
if(isloading){
  return (
    <img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"></img>
  )
}else if(iserror){
  return (
    alert("Incorrect email or password")
  )
}



  return (
    <div className={styles.main_register}>
      <div className={styles.about}>
        <form className={styles.about_content} onSubmit={handleSubmit}>
          <h2>About You</h2>
          <p className={styles.sign_up}>Sign Up With</p>
          <div className={styles.social_links}>
            <a href="./">
              <img src={facebook} alt="facebook_logo" />
              Facebook
            </a>
            <a href="./">
              <img src={google} alt="google_logo" />
              Google
            </a>
          </div>
          <div>
            <hr />
          </div>

          <p className={`${styles.sign_up} ${styles.create}`}>
            Or create an email account
          </p>
          <label htmlFor="">* Full Name</label>
          <input type="text" name="userName" onChange={handleChange} />

          <label htmlFor="">* Email address</label>
          <input type="email" name="email" onChange={handleChange} />
          <label htmlFor="">* Confirm Email address</label>
          <input type="email" />
          <label htmlFor="">* Password</label>
          <input type="password" name="password" onChange={handleChange} />
          <label htmlFor="">
            Cell Phone Number <span>(Optional)</span>
          </label>
          <input type="number" />
          <p className={styles.option}>
            We will use this number to send occasional promotional messages.
          </p>
          <div className={styles.referal}>
            <label htmlFor="">
              Referral Code <span>(Optional)</span>
            </label>
            <input type="text" />
            <p className={styles.option}>
              * Your referrals discount is automatically applied at cart
            </p>
          </div>

          <button className={styles.continue}>CONTINUE</button>

          <p>
            By proceeding, you are confirming that you agree to our{" "}
            <a href="./">Terms and Conditions</a> and{" "}
            <a href="./">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
