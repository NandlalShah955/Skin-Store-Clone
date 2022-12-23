import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./signup.types";
  let token = localStorage.getItem("token") || "";
  let initialstate = {
    isloading: false,
    iserror: false,
    token,
    isauth:false,
    
  };
  
  export const signupReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case SIGNUP_LOADING: {
        return {
          ...state,
          isloading: true,
          iserror:false
        };
      }
      case SIGNUP_SUCCESS: {
        if (payload.token) {
          localStorage.setItem("token", payload.token);
        }
  
        return {
          ...state,
          isloading: false,
          iserror: false,
          isauth:true,
          token: payload.token,
        };
      }
   
      case SIGNUP_ERROR: {
        return {
          ...state,
          isloading: false,
          iserror: true,
        };
      }
    
      default:
        return state;
    }
  };