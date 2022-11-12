import axios from "axios";
import React, { useState } from "react";
import styles from "./Login.module.css";
import facebook from "./logo/Facebook_F_icon.svg.png";
import google from "./logo/Google__G__Logo.svg.png";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        console.log(res.data.token);
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = loginDetails;
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
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="">*Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
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
            <button className={styles.new_continue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
