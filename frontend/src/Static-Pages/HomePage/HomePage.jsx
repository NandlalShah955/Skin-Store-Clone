import React from "react";
import "./HomePage.css";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
 
  return (
    <>

<Slider/>

      <h1 className="Shophai">Shop by Category</h1>
      {/* Shop by Category images  */}
      <div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="Shophai"> Trending Offers</h1>
      {/* Trending Offers Div     */}

      <div className="Trending_wala" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg"
            alt=""
          />
          <h4>SkinCeutivcals Gift</h4>
          <p>
            Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you
            spend $150 or more on the brand.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png"
            alt=""
          />
          <h4>25% off Elemis with code SINGLES</h4>
          <p>
            Elemis skincare products are carefully formulated to maximize the
            potential of your skin and restore its best qualities to enhance
            your natural beauty.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg"
            alt=""
          />
          <h4>Brand of the Month: Obagi Medical</h4>
          <p>
            Obagi crafts advanced skincare products that help unleash skin’s
            full potential with an extensive portfolio designed to brighten,
            protect, and enhance skin tone and texture.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg"
            alt=""
          />
          <h4>Up to 50% off TriPollar</h4>
          <p>
            TriPollar uses clinical expertise to create home-use devices that
            encourage skin regeneration and enhance natural beauty.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Neoutics">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg"
            alt=""
          />
          <h4>25% off Neocutis with code SINGLES</h4>
          <p>
            Neocutis means 'new skin', and that's precisely what the products in
            their collection can create: a new, youthful complexion that is
            visibly smoother and firmer to the touch.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg"
            alt=""
          />
          <h4>30% off Christophe Robin + Gift</h4>
          <p>
            Receive a Christophe Robin Cleansing Volumizing Deluxe Paste 12ml
            (Free Gift) when you spend $80 or more.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Estee">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png"
            alt=""
          />
          <h4>25% off Estee Lauder with code SINGLES</h4>
          <p>
            Always happy to share the latest and greatest in skincare and beauty
            innovation, we're happy to announce that Estee Lauder is now
            available at SkinStore!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="DHC">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg"
            alt=""
          />
          <h4>25% off DHC with code SINGLES</h4>
          <p>
            Discover olive oil based skincare and makeup with 25% off Japanese
            beauty expert, DHC.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg"
            alt=""
          />
          <h4>25% off Perricone MD with code SINGLES</h4>
          <p>
            Perricone MD is a cosmeceutical line that helps to repair skin
            damage using nutrient antioxidants.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <h1 className="Shophai">What People Are Buying Right Now</h1>

      {/* WHAT PEOPLE ARE NOW DIV  */}

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13524404-5734930150395321.jpg"
            alt=""
          />
          <p>Epionce Luminous Eye Serum Original Size at 0.53ml</p>
          <p>$67.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12448076-8695002190173929.jpg"
            alt=""
          />
          <p>Grow Gorgeous Hair Density Serum Original Duo 2 x 60ml</p>
          <p>$49.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13920999-1114993397470335.jpg"
            alt=""
          />
          <p>Sunday Riley Morning Buzz Vitamin C Brightening Trio Skincare Set </p>
          <p>$98.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg"
            alt=""
          />
          <p>TriPollar STOP X Device - Rose Gold Beautiful Natural Skin</p>
          <p>$199.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>

      {/* DIfferent images div starts from here   */}

      <div className="diffimages" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="Shophai"> Over On the Blog</h1>

      <div className="overblog" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg"
            alt=""
          />
          <h4>SkinCeuticals: Vitamin C Beyond the Face</h4>
          <p>
           
SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg"
            alt=""
          />
          <h4>Which TriPollar Device is Right for You?</h4>
          <p>
          In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg"
            alt=""
          />
          <h4>Discover Natura Bissé</h4>
          <p>
           
With an aim to help their clients’ skin as they age and to turn their daily skin care routines into a moment of real self-care.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
