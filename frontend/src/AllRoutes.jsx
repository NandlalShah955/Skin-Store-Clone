import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Static-Pages/HomePage/HomePage'
import Brands from './Static-Pages/Brands/Brands'
import Holiday from './Static-Pages/Holiday/Holiday'
import SkinCare from './Static-Pages/SkinCare/SkinCare'
import Hair from './Static-Pages/Hair/Hair'
import Makeup from './Static-Pages/Makeup/Makeup'
import Bath from './Static-Pages/Bath-Body/Bath'
import Fragrance from './Static-Pages/Fragrance/Fragrance'
import Selfcare from './Static-Pages/Selfcare/Selfcare'
import Tools from './Static-Pages/Tools/Tools'
import Payment from './Payment-Page/Payment'
function AllRoutes() {
  return (
    <Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/Brands' element={<Brands/>}/>
<Route path='/Holiday' element={<Holiday/>}/>
{/* <Route path='/Sale' element={<HomePage/>}/> */}
{/* add proucts page link here  */}
<Route path='/SkinCare' element={<SkinCare/>}/>
<Route path='/Hair' element={<Hair/>}/>
<Route path='/Makeup' element={<Makeup/>}/>
<Route path='/BathBody' element={<Bath/>}/>
<Route path='/Fragrance' element={<Fragrance/>}/>
<Route path='/SelfCare' element={<Selfcare/>}/>
<Route path='/Tools' element={<Tools/>}/>
{/* <Route path='/Payment' element={<Payment/>}/> */}



    </Routes>
  )
}

export default AllRoutes