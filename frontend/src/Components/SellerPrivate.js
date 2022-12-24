
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import React from 'react'

function SellerPrivate({children}) {
  const {SellerIsAuth}=useSelector((store)=>store.login)
if(!SellerIsAuth){
   return (
    alert("This page is Only for seller account"),(<Navigate to='/'></Navigate>)
  )
}
return children;
 
}

export default SellerPrivate