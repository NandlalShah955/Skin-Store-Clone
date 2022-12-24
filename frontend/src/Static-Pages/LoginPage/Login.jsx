
import React, { useState, useEffect } from "react";
import { useNavigate,link, Link } from "react-router-dom";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/login/login.actions";


const Login = () => {
  const { isauth, iserror, isloading,user } = useSelector((store) => store.login);
  const [loginDetails, setloginDetails] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginDetails({ 
      ...loginDetails,
       [name]: value 
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      alert("Please enter all details");
    } else {
      dispatch(login(loginDetails));
    }
  };
 
  useEffect(() => {
    if (iserror) {
      alert("Incorrect Email or password");
    } else if (isauth) {
      if(user.role=='seller'){
        navigate('/addproduct')
      }else if (user.role=='admin'){
       navigate('/showusers')
      }else{

        navigate("/Sale");
      }
      
      alert("Logged in successfully");

    }
  }, [isauth, iserror]);

  if (isloading) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" alt="loading" />
    );
  }

  return (
    <div className={styles.main_login}>
      <div className={styles.new_existing}>
        <div className={styles.existing_user}>
          <form
            action=""
            className={styles.existing_content}
            onSubmit={handleLogin}
          >
            <h2>Existing Customers</h2>
            <label htmlFor="">*Email adress</label>
            <input type="email" name="email" onChange={handleChange} />
            <label htmlFor="">*Password</label>
            <input type="password" name="password" onChange={handleChange} />
            <a href="./" className={styles.forget_password}>
              Forgotten Your Password?
            </a>
            <button className={styles.sing_in_button}>SIGN IN</button>
            <p>Or, Continue with</p>
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
          </form>
        </div>
        <div className={styles.new_user}>
          <div className={styles.new_user_content}>
            <h2>New Customer</h2>
          

            <button className={styles.new_continue}> <Link to='/Register' style={{color:'white'}}>Continue</Link></button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
