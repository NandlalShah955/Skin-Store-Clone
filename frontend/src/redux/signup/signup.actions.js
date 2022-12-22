import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./signup.types";
let API=process.env.API;


export const signup = (creds) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })
    try {
        let res = await axios.post(`${API}/users/signup`, creds);
        const data=await res.data;
        dispatch({ type: SIGNUP_SUCCESS, payload: data });
        
        
    }
    catch (e) {
        dispatch({type:SIGNUP_ERROR,payload:e.message})
    }
    
}