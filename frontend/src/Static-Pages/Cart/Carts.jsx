import React, {  useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';


// import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./Carts.css";
import {Link} from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

// import { useStateContext } from '../Context/CartContext';

const Carts = () => {
  const [data, setData] = useState([]);
  const [inc, setInc] = useState(false);
  const [dec, setDec] = useState(false);
  const [itemDelete, setItemDelete] = useState(false); 
  const [loading, setloading] = useState(false)
  const userData = localStorage.getItem("token") || ""
  const [userId, userEmail, userPassword] = userData.split(":")
  console.log(userId)
  let total = 0

  const handleRemove = async(id) => {
    setloading(true)
    let res = await axios.delete(`https://blossombackend.onrender.com/carts/${id}`)
    console.log("res deleted",res.data)
    
    setItemDelete(!itemDelete);
  setloading(false)
  };

  const handleDec = (id, quantity) => {
    axios.patch(`https://blossombackend.onrender.com/carts/${id}`,{quantity: quantity-1})
    setDec(!dec);
  };

  const handleInc = (id, quantity) => {
    let res = axios.patch(`https://blossombackend.onrender.com/carts/${id}`,{quantity: quantity+1})
    console.log(quantity)
    setInc(!inc);
  };

  useEffect(()=>{
    // let userId = "6372460dfad1cc8a20b5b694";
    setloading(true)
     axios.get(`https://blossombackend.onrender.com/carts/${userId}`).then((res)=>{
      // console.log(res.data)
      setData(res.data);
      setloading(false)
    })
  },[inc, dec, itemDelete]);
  
  if (loading) {
    return (
      <img src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif" alt="loading" />
    );
  }


  return (
    <>
    <h1>Your Cart</h1>
    <section>
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>           
      </MDBCol>
    </MDBRow>
    {
      data.map((el)=>(
        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={el.image}
                  alt="icon" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{el.title}</p>
                
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  {/* <MDBIcon fas icon="minus" /> */}
                  <button onClick={() => handleDec(el._id, el.quantity)}>
                    <AiOutlineMinusCircle size={"20px"}/>
                  </button>
                </MDBBtn>

                {el.quantity}
                <MDBBtn color="link" className="px-2">
                  <button onClick={() => handleInc(el._id, el.quantity)}>
                    <AiOutlinePlusCircle size={"20px"}/>
                  </button>
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  ${el.price}
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <button onClick={() => handleRemove(el._id)}>
                    <BsFillTrashFill size="20px" />
                  </button>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      ))
    }
    

  </MDBContainer>
   <Link to='/delivery'> <button style={{marginBottom: "40px", color: "white", background: "teal", borderRadius: "10px", paddingLeft: "25px", paddingRight: "25px", paddingTop: "10px", paddingBottom: "10px", border: "none"}}>Checkout</button></Link>
</section>
    </section>
    
   
    </>
  );
};

export default Carts;
