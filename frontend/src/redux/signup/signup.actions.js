import axios from "axios";
import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_ERROR } from "./signup.types";
let API = process.env.API;
console.log(API);

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  try {
    let res = await axios.post(
      'https://blossombackend.onrender.com/users/signup',
      creds
    );
    const data = await res.data;
    console.log(creds);
    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    return data;
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR, payload: e.message });
  }
};
