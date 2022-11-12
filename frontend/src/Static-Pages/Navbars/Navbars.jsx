import React, { useState } from "react";
// // import { Button } from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
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
              src="data:image/png;base64,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"
              height="60"
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
          <button type="submit">
            <AiOutlineSearch size={26} />
          </button>
        </form>

        <div
          class="nav-items"
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <AiOutlineUserAdd size={22} style={{ marginTop: "20px" }} />
            <li>
              <span style={{ padding: 5 }}></span>

             <select name="Account" id="">
          
              <option value="">Account</option>
              <option value="">Login</option>
              <option value="">Account</option>
             </select>
              <Dropdown
                style={{ border: "none" }}
                options={options}
               
                placeholder="Account"
              />
            </li>
            <span style={{ paddingLeft: 20 }}>
              <BsMinecartLoaded style={{ marginTop: "20px" }} />
            </span>
            <li style={{ marginTop: "20px" }}>Cart</li>
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
