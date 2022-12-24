import axios from "axios";
import {
  LOGIN_GET_LOADING,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_ERROR,
  UPDATE_GET_SUCCESS,
  LOGOUT_GET,
} from "./login.types";
export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    let res = await axios.post(
      "https://blossombackend.onrender.com/users/login",
      creds
    );
    let data = await res.data;
   
   
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (e) {
    return dispatch({ type: LOGIN_GET_ERROR, payload: e.message });
  }
};

export const logout = () => {
    // to remove all userinfo at the time of user logout 
    
    return{

         type: LOGOUT_GET 
    }
};
