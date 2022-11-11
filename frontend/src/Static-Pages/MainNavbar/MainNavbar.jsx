
import "./MainNavbar.css"
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
// import HomePage from '../HomePage/HomePage'
function MainNavbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    return (
   <>
         hello
         <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            CodeBucks
           
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <p className={click ? <VscChromeClose/> : <GiHamburgerMenu/>}></p>
          </div>
        </div>
      </nav> 


        
   </>
      
        )
}

   
  
 
export default MainNavbar