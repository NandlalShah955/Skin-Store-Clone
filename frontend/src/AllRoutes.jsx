import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Static-Pages/HomePage/HomePage";
import Brands from "./Static-Pages/Brands/Brands";
import Holiday from "./Static-Pages/Holiday/Holiday";
import SkinCare from "./Static-Pages/SkinCare/SkinCare";
import Hair from "./Static-Pages/Hair/Hair";
import Makeup from "./Static-Pages/Makeup/Makeup";
import Bath from "./Static-Pages/Bath-Body/Bath";
import Fragrance from "./Static-Pages/Fragrance/Fragrance";
import Selfcare from "./Static-Pages/Selfcare/Selfcare";
import Tools from "./Static-Pages/Tools/Tools";
import Sales from "./Static-Pages/SalesPage/Sales";
import Login from "./Static-Pages/LoginPage/Login";
import Register from "./Static-Pages/RegisterPage/Register";
import Carts from "./Static-Pages/Cart/Carts";
import Payment from "./Payment-Page/Payment";
import ProductDetails from "./Static-Pages/ProductsSpecifications/ProductDetails";

import { UserInfo } from "./Static-Pages/UserInfo/UserInfo";

import AddProduct from "./Static-Pages/seller/AddProduct";
import ShowUsers from "./admin/ShowUsers";

import Privateroute from "./Components/Privateroute";
import Payments from "./Static-Pages/Payment/Payment";
import Delivery from "./Static-Pages/NewAddress/Delivery";
import AdminPrivate from "./Components/AdminPrivate";
import SellerPrivate from "./Components/SellerPrivate";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Brands" element={<Brands />} />
      <Route path="/Holiday" element={<Holiday />} />
      <Route path="/Sale" element={<Sales />} />
      <Route path="/Register" element={<Register />} />
      {/* add proucts page link here  */}
      <Route path="/Login" element={<Login />} />
      <Route path="/SkinCare" element={<SkinCare />} />
      <Route path="/Hair" element={<Hair />} />
      <Route path="/Makeup" element={<Makeup />} />
      <Route path="/BathBody" element={<Bath />} />
      <Route path="/Fragrance" element={<Fragrance />} />
      <Route path="/SelfCare" element={<Selfcare />} />

      <Route
        path="/payments"
        element={
          <Privateroute>
            {" "}
            <Payments />{" "}
          </Privateroute>
        }
      />

      <Route
        path="/delivery"
        element={
          <Privateroute>
            {" "}
            <Delivery />{" "}
          </Privateroute>
        }
      />
      {/* <Route path='/Carts' element={<Carts/>}/> */}

      <Route
        path="/Tools"
        element={
          

          <Tools />
        }
      />
      <Route
        path="/Sale/:id/Carts"
        element={
          <Privateroute>
          <Carts />
        </Privateroute>
        }
      />
      <Route
        path="/Payment"
        element={
          <Privateroute>
            <Payment />
          </Privateroute>
        }
      />
      <Route path="/Sale/:id" element={<ProductDetails />} />

      <Route
        path="/userinfo"
        element={
          <Privateroute>
            <UserInfo />
          </Privateroute>
        }
      />

      <Route
        path="/showusers"
        element={
          <Privateroute>
            <AdminPrivate>
          
            <ShowUsers />
          </AdminPrivate>
          </Privateroute>
          
        }
      />

      <Route
        path="/addproduct"
        element={
          <Privateroute>
            <SellerPrivate>
              <AddProduct />
            </SellerPrivate>
          </Privateroute>
        }
      />

      {/* <Route path='/Carts' element={<Carts/>}/> */}
    </Routes>
  );
}

export default AllRoutes;
