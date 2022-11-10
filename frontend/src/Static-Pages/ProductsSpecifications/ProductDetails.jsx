import React from "react";
import "./ProductDetails.css";
// import "../HomePage/HomePage.css";
import { RiStarSFill } from "react-icons/ri";

function ProductDetails() {
  return (
    <>
      {/* <div className='Stars'></div>
<RiStarSFill className='stars'/> */}
      <h1 className="Shophai">Other customers bought</h1>

      <div className="othercustomer">
      <div className="mainwala">
          <div className="image1"></div>
          <div className="textdata">
            <p>SkinCeuticals Tripeptide-R Neck Repair 1.7oz</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(4)</p>
            </div>
            <p className="pricehai">$67.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>
     
        <div className="mainwala">
          <div className="image2"></div>
          <div className="textdata">
            <p>SkinCeuticals Silymarin CF Serum 1 fl. oz</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(5)</p>
            </div>
            <p className="pricehai">$167.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>
     
        <div className="mainwala">
          <div className="image3"></div>
          <div className="textdata">
            <p>SkinCeuticals Retinol 0.3 Refining Night Treatment 30ml</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <p className="uparkr">(4)</p>
            </div>
            <p className="pricehai">$67.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>
     
        <div className="mainwala">
          <div className="image4"></div>
          <div className="textdata">
            <p>SkinCeuticals Metacell Renewal B3</p>
            <div className="giftsel">Select your Gift</div>
            <div className="starshai">
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
              <RiStarSFill className="stars" />
             
              <p className="uparkr">(3)</p>
            </div>
            <p className="pricehai">$169.00</p>
            <span className="butkor">QUICK BUY</span>
          </div>
        </div> 
      </div>
    
    <section className="reviewwala">
      
    </section>
    
    
    </>
  );
}

export default ProductDetails;
