import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BsCheckCircleFill} from 'react-icons/bs'
  


const Payments = () => {
  const [data, setData] = useState([])
  const [text, setText] = useState([])
  const [success, setsuccess] = useState(false)
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleDate = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if(text.length <16){
      alert("Incorrect card number")
    }
    else if(data.length >=4){
      alert("CVV must be 3 charactor")
    }
    else{
      setsuccess(true)
      setTimeout(() => {
        
        navigate("/")
      }, 4000);
    }
  }

  // val = e.target.value
  if(success){
    return ( 
    <>
<BsCheckCircleFill className="donedanadan"/>
<h1>Order Placed</h1>
<p>Thank You for Placing the Order Keep Shoping</p>
   
    </>)
  }


  return (
    <div>
      <MDBContainer
      className="py-5"
      fluid
     
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Payment</h3>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value="**** **** **** 3193"
                    />
                  </div>
                </div>
                <Link to={"/"}> <a href="#!">Select card</a> </Link>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
                <Link to={"/"}><a href="#!">Select card</a></Link>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="number"
                    size="lg"
                    value={text}
                    onChange={handleDate}
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="month"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                    value={data}
                    onChange={handleChange}
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn color="success" size="lg" block 
              onClick={handleClick}>
                Add card
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default Payments
