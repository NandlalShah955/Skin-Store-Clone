import {HiOutlineShoppingBag} from 'react-icons/hi'
import '../HomePage/HomePage.css'
import '../SkinCare/SkinCare.css'
import { useNavigate } from 'react-router-dom'
function Makeup() {
 
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
 
  return (
    <>

<h1 className="Shophai"> Shop Makeup</h1>

<div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/25/Page-001-023125.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/36/Page-002-023136.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/47/Page-003-023147.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-004-023158.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/Page-005-023207.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-006-023217.png"
            alt=""
          />
        </div>
      </div>

      <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/59/SS-Batching-Christmas-Category_Banner-EG1180x450_6-082659.jpg" alt="" />
      </div>

      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/033-TUZ058-LGM-IL-1200x1200-082706.jpg"
            alt=""
          />
          <h4>25% off Illamasqua with code SINGLES</h4>
          <p>
           

          Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/55872684_101472577691924_3731299010004746383_n-073328.jpg"
            alt=""
          />
          <h4>25% off Rodial with code SINGLES</h4>
          <p>
          With over 25 years of award-winning results, today Alpha-H is a global leader in transformative skincare.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/45/Screenshot_2022-03-07_140249-041445.png"
            alt=""
          />
          <h4>25% off Eyeko with code SINGLES</h4>
          <p>
           

          Internationally distinguished board-certified Dermatologist and hormonal skin expert.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/50/original-Screenshot_2022-04-08_151615-073450.png"
            alt=""
          />
          <h4>25% off Stila with code SINGLES</h4>
          <p>
           

          Receive a First Aid Beauty Ultra Repair Cream 2.0 oz (Worth $16) when you spend $40 or more on the 
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/03/original-Shop_the_Range_0000_Image_1___Best_Sellers_-073503.jpg"
            alt=""
          />
          <h4>25% off PUR with code SINGLES</h4>
          <p>
          Obagi crafts advanced skincare products that help unleash skin’s full potential with an extensive portfolio designed.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-Screenshot_2022-03-07_141739-073514.png"
            alt=""
          />
          <h4>
25% off Estee Lauder with code SINGLES</h4>
          <p>
           

          NEOSTRATA professional skin care products are recommended by Dermatologists and Plastic Surgeons in over 42 countries.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <h1 className="Shophai"> Best Sellers</h1>

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11975850-1514742470154982.jpg"
            alt=""
          />
          <p>SkinMedica TNS Advanced+ Serum 1oz</p>
          <p>$265.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/productimg/480/480/11499307-1124510754093142.jpg"
            alt=""
          />
          <p>Elemis Pro-Collagen Cleansing Balm 100g</p>
          <p>$49.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13187846-8284878568539867.jpg"
            alt=""
          />
          <p>Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz) </p>
          <p>$128.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12707464-1784871985284256.jpg"
            alt=""
          />
          <p>
EltaMD UV Clear Tinted Broad-Spectrum SPF46</p>
          <p>$41.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>
    

      <h1 className="Shophai"> Have a Look at Blogs</h1>
      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/02/original-19_0402_Dermablend_Etailer_3FI-Size-700x392-090202.jpg"
            alt=""
          />
          <h4>Tinted Moisturizer Skin </h4>
          <p>
           

          Turn your favorite products into the ideal tinted moisturizer!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/watercolour-liquid-illuminator-tease-3_32223171347_o-090121.jpg"
            alt=""
          />
          <h4>Using Makeup to Look Fresh in the Morning</h4>
          <p>
          See how to fake a good night's sleep with makeup and skincare!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/Canva-images-25_1595345347-090846.jpg"
            alt=""
          />
          <h4>Find the perfect match with Dermablend!</h4>
          <p>
           

          Find the perfect match with Dermablend!
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    
    
    </>
  )
}

export default Makeup