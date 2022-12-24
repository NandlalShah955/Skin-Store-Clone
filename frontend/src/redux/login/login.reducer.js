import {
    LOGIN_GET_ERROR,
    LOGIN_GET_SUCCESS,
    LOGIN_GET_LOADING,
    LOGOUT_GET,
    UPDATE_GET_SUCCESS,
  } from "./login.types";
  
  
  let local=localStorage.getItem("userrole");
  console.log(local);
var checkAdminAuth=false
if(local=='admin'){
  checkAdminAuth=true
}
var checkSellerAuth=false;
if(local=='seller'){
  checkSellerAuth=true;
}

  let initialstate = {
    isauth:false,
    isloading: false,
    iserror: false,
    token:'',
    user:{},
    AdminIsAuth:checkAdminAuth,
    SellerIsAuth:checkSellerAuth
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
        localStorage.setItem("token",payload.token)
        // This thing is done for showing user info in userprofilepage
        localStorage.setItem('userrole',payload.user.role)
        localStorage.setItem('username',payload.user.userName)
        localStorage.setItem('useremail',payload.user.email)
        localStorage.setItem('usercreatedAt',payload.user.createdAt)
        
        return {
          ...state,
          isloading: false,
          iserror: false,
          token: payload.token,
          isauth:true,
          user:payload.user,
          AdminIsAuth:payload.user.role=='admin',
          SellerIsAuth:payload.user.role=='seller'
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
       
        localStorage.removeItem('token');
        localStorage.removeItem('userrole');
        localStorage.removeItem('username');
        localStorage.removeItem('useremail');
        localStorage.removeItem('usercreatedAt');
        return {
          ...initialstate,
         
        };
      }
      default:
        return state;
    }
  };