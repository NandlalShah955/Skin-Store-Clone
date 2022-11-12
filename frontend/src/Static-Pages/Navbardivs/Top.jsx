import React from 'react'
import './Top.css'
import {FaTruck} from 'react-icons/fa'
import {VscDeviceMobile} from 'react-icons/vsc'
import {BsBagCheck} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
function Top() {
  return (
    <div>
         <div className='AdBottom_mainCon'>
        <div className='AdBottom_innerCon'>
          <div className='AdBottom_div'>
            <div size="25px" />
          <FaTruck/><p>FREE US Shipping Over $49</p>
          </div>
          <div className='AdBottom_div'>
            <div size="25px" />
          <FaUserFriends/><p>Refer a Friend, Get $15</p>
          </div>
          <div className='AdBottom_div'>
            <div size="25px" />
          <BsBagCheck/><p>New Customers Save 20% - Use Code NEWBIE</p>
          </div>
          <div className='AdBottom_div'>
            <div size="25px" />
            <VscDeviceMobile/> <p>Download Our App</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Top