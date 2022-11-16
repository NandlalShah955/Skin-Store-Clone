import React, { useState } from "react";
// // import { Button } from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import img from "./logo/Blossom.png";
import "./Navbar.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";
// import  {TopNav}  from "./TopNav";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {Link} from 'react-router-dom'

// or less ideally

const options = ["LOGIN", "SIGNUP"];

const Navbars = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const userData = localStorage.getItem("token") || ""
  const [userId, userEmail, userPassword] = userData.split(":")
  // console.log(userData);
  console.log(userEmail)
  return (
    <div>
      {/* <TopNav /> */}



      <nav>
        <div class="menu-icon">
          <span>
            <AiOutlineMenu
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            />
          </span>
        </div>
        <div class="logo">
          <Link to="/"> <img
              class="img1"
              src={img}
              width="100%"
              height="100%"
              alt="pcg"
            /></Link>
           
       
        </div>

        <div class="search-icon">
          <span>
            <AiOutlineSearch />
          </span>
        </div>
        <div class="cancel-icon">
          <span class="fas fa-times">
            <AiOutlineClose />
          </span>
        </div>
        <form class="co" action="#">
          <input
            type="search"
            class="search-data"
            placeholder="Search for a product ot brand..."
          />
         <Link to='/Sale'>
<button type="submit">
            <AiOutlineSearch size={26}style={{margin:'5px'}} />
          </button>

         </Link>
          
        </form>

        <div
          class="nav-items"
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <AiOutlineUserAdd size={22} style={{ marginTop: "30px" }} />
            <li>
              <span style={{ padding: 5 }}></span>

             {/* <select name="Account" id="">
          
              <option value="">Account</option>
              <option value="">Login</option>
              <option value="">Account</option>
             </select> */}
              {/* <Dropdown
                style={{ border: "none" }}
                options={options}
               
                placeholder="Account"
              /> */}
              {userEmail ? <Link to="/Login"><button style={{width: 'auto', padding: '3px', borderRadius:'55px',height:'auto'}}>{userEmail}</button></Link> : <Link to="/Register"><button className="BaSign">SignUp</button></Link>}
            </li>
          
            
          
           
            <span style={{ paddingLeft: 20 }}>
              <BsMinecartLoaded style={{ marginTop: "32px" }} />
            </span>
           
            <li style={{ marginTop: "30px" }}>Cart</li>
          -
          </ul>
        </div>
      </nav>

      <div className="line"></div>
    </div>
  );
};

//------------------Main Nav-----------------------

// <div className={styles.NavMainCont}>
// <div className={styles.NavInnerCont}>
//   <div className={styles.NavLogodiv}>
//     <img
//    
//       alt=""
//     />
//   </div>
//   <div className={styles.NavInputdiv}>
//     <form>

{
  /* Search Bar */
}
{
  /* <InputRightElement
            pointerEvents="none"
            children={<Search2Icon />}
          /> */
}
{
  /* <input type="tel" placeholder="Search for a product ot brand..." />
        </form>
      </div>
      <div className={styles.Nav_Acc_Cart_div}>
        <div className={styles.Nav_Acc_div}> */
}
{
  /* <Popover trigger="hover" placement="bottom-start"> */
}
{
  /* <PopoverTrigger> */
}
// <button bg="white" _hover={{ bg: "#F2F2F2" }}>
{
  /* <MdOutlineAccountCircle size="22px" /> */
}
{
  /* Account
              </button> */
}
{
  /* </PopoverTrigger> */
}
{
  /* <Portal> */
}
{
  /* <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Login / Register</PopoverHeader>
                <PopoverClosebutton />
                <PopoverBody bg="#F2F2F2">
                    <Stack direction="column" spacing={4}>
                      <button
                        backgroundColor="#2E3337"
                        color="white"
                        borderRadius={0}
                        _hover={{ bg: "teal.600" }}
                        onClick={() => handleOnClick("/login")}
                      >
                        LOGIN
                      </button>
                      <button
                        colorScheme="blue"
                        borderRadius={0}
                        bg="white"
                        border="1px"
                        borderColor="#2E3337"
                        color="#2E3337"
                        _hover={{ bg: "teal.50" }}
                        onClick={() => handleOnClick("/register")}
                      >
                        REGISTER
                      </button>
                    </Stack>
                </PopoverBody>
                <PopoverFooter>
                  <Stack direction="column" spacing={4}>
                    <div className={styles.Nav_AccFooter_div}>
                      { (
                        <Text className={styles.Nav_AccFooter_Text}>
                          My Account
                        </Text>
                      )}
                      <Text className={styles.Nav_AccFooter_Text}>
                        Wishlist
                      </Text>
                      <Text className={styles.Nav_AccFooter_Text}>
                        Your Order
                      </Text>
                      <Text className={styles.Nav_AccFooter_Text}>
                        Your Referrals
                      </Text>
                    </div>
                  </Stack>
                </PopoverFooter>
              </PopoverContent>
            {/* </Portal> */
}
{
  /* </Popover> */
}
//     </div>
//     <div className={styles.Nav_Cart_div}>
//       <Popover trigger="hover" placement="bottom-start">
//         <PopoverTrigger>
//           <button
//             bg="white"
//             _hover={{ bg: "#F2F2F2" }}
//             onClick={() => navigate("/cart")}
//           >
//             <BsMinecartLoaded size="22px" />
//             Cart
//             { (
//               <p className={styles.Nav_Cart_CountP}></p>
//             )}
//           </button>
//         </PopoverTrigger>
//         <Portal>
//           <PopoverContent>
//             <PopoverArrow />
//             <PopoverHeader>Cart</PopoverHeader>
//             <PopoverClosebutton />
//             <PopoverFooter>
//               <Stack direction="column" spacing={4}>
//               </Stack>
//             </PopoverFooter>
//           </PopoverContent>
//         </Portal>
//       </Popover>
//     </div>
//   </div>
// </div>
// <div className="NavHr">
//   <hr style={{ border: "1px solid #333" }} />
// </div>

// </div> */}

export default Navbars;
