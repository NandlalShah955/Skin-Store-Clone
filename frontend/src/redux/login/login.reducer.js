import {
    LOGIN_GET_ERROR,
    LOGIN_GET_SUCCESS,
    LOGIN_GET_LOADING,
    LOGOUT_GET,
    // UPDATE_GET_SUCCESS,
  } from "./login.types";
  
  let initialstate = {
    isauth:false,
    isloading: false,
    iserror: false,
    token:''
    
  };
  
  export const loginReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case LOGIN_GET_LOADING: {
        return {
          ...state,
          isloading: true,
          iserror:false,
        };
      }
      case LOGIN_GET_SUCCESS: {
        // if (payload.token) {
        //   localStorage.setItem("token", payload.token);
        //   localStorage.setItem("name", payload.username);
        //   localStorage.setItem("id", payload.id);

        // }
  
        return {
          ...state,
          isloading: false,
          iserror: false,
          token: payload.token,
          isauth:true,
        };
      }
      // case UPDATE_GET_SUCCESS: {
      //   if (payload.token) {
      //     // localStorage.setItem("token", payload.token);
      //     localStorage.setItem("name", payload.username);
      //   }
  
      //   return {
      //     ...state,
      //     isloading: false,
      //     iserror: false,
      //     token: payload.token,
      //     name: payload.name
      //   };
      // }
        
      case LOGIN_GET_ERROR: {
        return {
          ...state,
          isloading: false,
          iserror: true,
        };
      }
      case LOGOUT_GET: {
       
        return {
          ...initialstate,
         
        };
      }
      default:
        return state;
    }
  };