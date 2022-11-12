import "./App.css";
import HomePage from "./Static-Pages/HomePage/HomePage";
// import ProductDetails from "./Static-Pages/ProductsSpecifications/ProductDetails";
// import Bath from "./Static-Pages/Bath-Body/Bath";
// import Payment from './Payment-Page/Payment'
// import MainNavbar from './Static-Pages/MainNavbar/MainNavbar'
// import AllRoutes from "./AllRoutes";
import FinalNavbar from "./FinalNavbar/FinalNavbar";
function App() {
  return (
    <div className="App">
   
   <FinalNavbar/>
   {/* <AllRoutes/> */}
     <HomePage/>
     {/* <Payment/> */}
     {/* <ProductDetails/> */}

    </div>
  );
}

export default App;
