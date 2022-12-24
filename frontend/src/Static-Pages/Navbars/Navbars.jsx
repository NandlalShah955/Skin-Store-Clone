import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "./logo/Blossom.png";
import "./Navbar.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsMinecartLoaded } from "react-icons/bs";

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "react-dropdown/style.css";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/login/login.actions";
// or less ideally

const Navbars = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const userData = localStorage.getItem("token") || "";
  const [data, setdata] = useState([]);
  const [searchdata, setsearchdata] = useState("");
  const [userId, userEmail, userPassword] = userData.split(":");
  const [isNav, setIsNav] = useState(false);
  const dispatch = useDispatch();
  const { isauth } = useSelector((store) => store.login);

 

  // for navigating the user to the different pages
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/${e.target.value}`);
  };

  // For search operation in input box
  const handleSearch = async (e) => {
   const searcheddata=e.target.value
   
    try {
      let res = await axios.get(
        `https://blossombackend.onrender.com/products/Sale/${searchdata}`
      );
      if(searcheddata===''){

        setdata([]);
      }else{
        setdata(res.data)
        setIsNav(true);
       setTimeout(() => {
        setIsNav(false)
       }, 4000);
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data)

  useEffect(() => {
    handleSearch();
  }, []);

  const handlelogout = (e) => {
    dispatch(logout());
  };

  return (
    <div>
      <nav>
        <div className="menu-icon">
          <span>
            <Navbars22
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            />
          </span>
        </div>
        <div className="logo">
          <Link to="/">
            {" "}
            <img
              className="img1"
              src={img}
              width="100%"
              height="100%"
              alt="pcg"
            />
          </Link>
        </div>

        <div className="search-icon">
          <span>
            <AiOutlineSearch />
          </span>
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times">
            <AiOutlineClose />
          </span>
        </div>
        <form className="co" action="#">
          <input
            type="search"
            className="search-data"
            placeholder="Search for a product ot brand..."
            onChange={handleSearch}
          />
          <Link to="/Sale">
            <button type="submit">
              <AiOutlineSearch size={26} style={{ margin: "5px" }} />
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
            {/* <AiOutlineUserAdd size={22} style={{ marginTop: "30px" }} /> */}
            <li>
              {/* <span style={{ padding: 5 }}></span> */}
              {isauth ? (
                <div>
                 <AiOutlineUserAdd className="userfont"/>
                  <button className="btnhai">{userEmail}</button>
                  <button className="btnhaisec" onClick={handlelogout}>
                    Logout
                  </button>
                  <select name="Profile"
                  id=""
                  onChange={handleChange}
                  className={"select-taglogin"}>
                    <option value='addproduct'>Seller Dashboard</option>
                    <option value='userinfo'>User Profile</option>
                    <option value='showusers'>Admin Dashboard</option>
                  </select>
                </div>
              ) : (
                <select
                  name="Profile"
                  id=""
                  onChange={handleChange}
                  className={"select-tag"}
                >
                  <option value="Register">Signup</option>
                  <option value="login">Login</option>
                  <option value="addproduct">Seller Dashboard</option>
                  <option value="userinfo">User profile</option>
                  <option value="showusers">Admin Dashboard</option>
                </select>
              )}

              {/* {userEmail ? <Link to="/Login"><button>{userEmail}</button></Link> : <Link to="/Register"><li className="BaSign"><AiOutlineUserAdd /> SignUp</li></Link>} */}
            </li>

            {/* <span style={{ paddingLeft: 20 }}>
              <BsMinecartLoaded style={{ marginTop: "32px" }} />
            </span> */}

            <li >
              <Link to={`/Sale/:id/Carts`}>
                <BsMinecartLoaded /> Cart{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="line"></div>
      {/* <div className="menuthing">
        <span>
          <AiOutlineMenu
            onClick={() => {
              setIsNav(!isNav);
            }}
          />
        </span>
      </div>
      <div className="metjabhai">
        <div class="nav-items"
          className={
            isNav ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">User</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/music">Brands</a>
            </li>
            <li>
              <a href="/music">Holiday</a>
            </li>
            <li>
              <a href="/music">SkinCare</a>
            </li>
            <li>
              <a href="/music">Makeup</a>
            </li>
            <li>
              <a href="/music">BathBody</a>
            </li>
            <li>
              <a href="/music">Fragrance</a>
            </li>
            <li>
              <a href="/music">SelfCare</a>
            </li>
          </ul>
        </div>
      </div> */}

      {(setdata.length!=0 && isNav)? (
        
          <div className="suggestionwala">
            {data.map((el) => (
              <Link to="/Sale">
                <div key={el.id} className="searchkro">
                  <img src={el.image} alt="Image" className="products_image" />
                  <h3>{el.title}</h3>
                </div>
              </Link>
            ))}
          </div>
       
      ) : (
        ' '
      )}
    </div>
  );
};

const Navbars22 = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <div>
      <div className="menuthing">
        <span>
          <AiOutlineMenu
            onClick={() => {
              setIsNav(!isNav);
            }}
          />
        </span>
      </div>
      <div className="metjabhai">
        <div
          class="nav-items"
          className={isNav ? "navigation-menu expanded" : "navigation-menu"}
        >
          <ul>
          <li>
              <a href="/Register">Sign Up</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
            <li>
              <a href="/Holiday">Holiday</a>
            </li>
            <li>
              <a href="/Sale">Sale</a>
            </li>
            <li>
              <a href="/Makeup">Makeup</a>
            </li>
            <li>
              <a href="/BathBody">BathBody</a>
            </li>
            <li>
              <a href="/Fragrance">Fragrance</a>
            </li>
            <li>
              <a href="/SelfCare">SelfCare</a>
            </li>
          </ul>
        </div>
      </div>
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
