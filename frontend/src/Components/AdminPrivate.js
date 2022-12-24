
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import React from 'react'

function AdminPrivate({children}) {
  const {AdminIsAuth}=useSelector((store)=>store.login)
if(!AdminIsAuth){
   return (
    alert("You are redirected for security reasons"),(<Navigate to='/'></Navigate>)
  )
}
return children;
 
}

export default AdminPrivate