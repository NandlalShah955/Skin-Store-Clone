import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import {Navigate} from 'react-router-dom'

function PrivateRoute({children}) {
  const {Auth}=useContext(AuthContext)
  if(Auth==false){
   setTimeout(() => {
     window.alert('login First')
   }, 3000);
   
    return( <Navigate to ='/Login'/>
  
    )
   
  
  }
  
  
  return children
}

export default PrivateRoute