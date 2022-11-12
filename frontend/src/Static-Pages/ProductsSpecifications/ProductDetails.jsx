import React from "react";
import "./ProductDetails.css";
// import "../HomePage/HomePage.css";
import { RiStarSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
function ProductDetails() {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:8080/products");
      let data = await res.json();
      console.log(data);
      // return(data)
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="Shophaifrq">Frequently Bought Together</h1>
      <div className="frequentlybought">
        {/* start in this div  */}

      <div className="mainimagewala"> {data?.map((el) => (
            <div className="imgandprice">
              <div className="onlyimagehai" key={el.id}>
                <img src={el.image} alt="nandlal" />
              </div>

              <div className="pricedesc">
                <p>{el.title}</p>
                <p> {`$${el.price}.00`} </p>
              </div>
            </div>
          ))}
          <span className="add">+</span>
          
          <div className="imgandprice">
  <div className="onlyimagehai">
    <img src="https://s1.thcdn.com//productimg/130/130/13978267-1504991771290107.jpg" alt="cream-image" />
  </div>
  <div className="pricedesc">
    <p>Christophe Robin Cleansing Purifying Scrub with Sea Salt Duo
</p>
<p>$53.00</p>
  </div>


          </div>
      </div>
          {/* wrap in this div  */}
         

        <div className="totalpricewaladiv">
          <p>Christophe Robin Cleansing Purifying Scrub with Sea Salt Duo</p>
          <p>$53.00</p>
        </div>
      </div>

     
     
     
     
     
     
     
     
     
     
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

      <section className="reviewwala"></section>
    </>
  );
}

export default ProductDetails;
