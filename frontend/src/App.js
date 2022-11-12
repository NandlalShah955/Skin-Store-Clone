import "./App.css";

import AllRoutes from "./AllRoutes";
import FinalNavbar from "./FinalNavbar/FinalNavbar";
// import HomePage from './Static-Pages/HomePage/HomePage'
import Footer from './Static-Pages/Footer/Footer'
function App() {
  return (
    <div className="App">
  
  <FinalNavbar/>
  
    <AllRoutes/> 
  {/* <HomePage/> */}
  

  <Footer/>
   
    </div>
  );
}

export default App;
