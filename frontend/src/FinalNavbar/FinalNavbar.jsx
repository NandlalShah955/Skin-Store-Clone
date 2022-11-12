import React from 'react'
import MainNavbar from '../Static-Pages/MainNavbar/MainNavbar'
import Navbars from '../Static-Pages/Navbars/Navbars'
import Top from '../Static-Pages/Navbardivs/Top'
import Navbar from '../Static-Pages/Navbardivs/Navbar'

function FinalNavbar() {
  return (
    <div style={{
      position:'sticky',
      zIndex:999,
      top:0,
      backgroundColor:'white'
    }}>

    <Navbars/>
    <MainNavbar/>
    <Top/>

<Navbar/>
    </div>
  )
}

export default FinalNavbar