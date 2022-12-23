import {useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'

import React from 'react'

function Privateroute({children}) {
  const {isauth}=useSelector((store)=>store.login);
if(!isauth){
    return alert("Please login First"),(<Navigate to='/login'></Navigate>)
}
  
   return children
}

export default Privateroute