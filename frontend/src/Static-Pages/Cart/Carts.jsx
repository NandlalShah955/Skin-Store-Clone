import React, {  useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
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

  useEffect(()=>{
    let userId = "6372460dfad1cc8a20b5b694";
    axios.get(`https://blossombackend.onrender.com/carts/${userId}`).then((res)=>{
      // console.log(res.data)
      setData(res.data);
    })
  },[]);
  console.log(data)
  // const [data, setdata] = useState([]);
  // const [fetchData, setFetchData] = useState([]);
  // let fetchData = []
  // const datafromback = JSON.parse(localStorage.getItem("cartItems"));
  // console.log(datafromback, "datahai");

  // const newdata = datafromback.map((i, val) => {
  //   return i[0].image;
  // });
  // const titl = datafromback.map((i, val) => {
  //   return i[0].title;
  // });
  // const rate = datafromback.map((i, val) => {
  //   return i[0].price;
  // });

//   console.log(rate,"rate")
//   let meratotal=0;
// for(var i=0; i<rate.length; i++) {
// meratotal+=rate[i]
// }
// console.log(meratotal)

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
    <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

  </MDBContainer>
</section>
    </section>
    {/* <div className="imagedescpr">
     
    
      <div>
      {
        newdata.map((el)=>(
        <div className="Mainiimageonly">
        <img src={el} alt="" />
        
      </div>
      ))
      }
      </div>
     <div>

    
      {
        titl.map((el)=> (
          <div className="CartTitle">
            <p>{el}</p>
            <button className="incdec">+</button>
  <button className="incdec">-</button>
          </div>
        ))
      }
 </div>
  
  


<div>
  {
        rate.map((el)=>(

        <div className="ratehaimeara">
    <p>Price:-{el}$ only</p>
        </div>
        ))
        
        }
</div>


      
    </div> */}
    {/* <h3>Total Price:${meratotal}</h3> */}
   {/* <Link to='/Payment'> <button className="antimpage">Checkout</button></Link> */}
   
    </>
  );
};

export default Carts;
