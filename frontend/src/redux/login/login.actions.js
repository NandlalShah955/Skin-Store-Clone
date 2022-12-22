import axios from "axios";
import { LOGIN_GET_ERROR, LOGIN_GET_SUCCESS, LOGIN_GET_LOADING,LOGOUT_GET, UPDATE_GET_SUCCESS } from "./login.types";
export const login = (creds) => async (dispatch) => {

    // dispatch({ type: LOGIN_GET_LOADING });
    try {
        let response = await axios.post("https://blossombackend.onrender.com/users/login", creds)
        dispatch({ type: LOGIN_GET_SUCCESS, payload: response.data });
        alert('Login Successful')
        console.log(response.data);
        return response.data;        
    }
    catch (e) {
        dispatch({ type: LOGIN_GET_ERROR })
        alert('Login Failed')
    }  
}

export const logout = () => ({type:LOGOUT_GET})