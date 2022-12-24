import React from 'react'
import '../HomePage/HomePage.css'
import './SkinCare.css'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'


function SkinCare() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
 
  return (
    <>
      <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/large/webp/widgets/121-us/50/SS-Batching-Christmas-Category_Banner-EG770x380_1-081850.jpg" alt="" />
      </div>
      <h1 className="Shophai"> Shop the Range</h1>
      <div className="overblog" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/36/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-012536.jpg"
            alt=""
          />
          <h4>SkinCeuticals Gift</h4>
          <p>
           

          Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-Shoptherange-1-080810.jpg"
            alt=""
          />
          <h4>25% off Alpha-H with code SINGLES</h4>
          <p>
          With over 25 years of award-winning results, today Alpha-H is a global leader in transformative skincare.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/24/original-DZ_SKINSTORE_LANDINGPAGE_HORMONALAGING_500x500-080824.jpg"
            alt=""
          />
          <h4>25% off Dr. Zenovia with code SINGLES</h4>
          <p>
           

          Internationally distinguished board-certified Dermatologist and hormonal skin expert.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/original-original-Shot_9_500x500-070853-041942.jpg"
            alt=""
          />
          <h4>25% off with code SINGLES + $16 First</h4>
          <p>
           

          Receive a First Aid Beauty Ultra Repair Cream 2.0 oz (Worth $16) when you spend $40 or more on the 
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/49/Obagi.ss-060949.jpg"
            alt=""
          />
          <h4>Brand of the Month: Obagi Medical</h4>
          <p>
          Obagi crafts advanced skincare products that help unleash skin’s full potential with an extensive portfolio designed.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-original-original-Untitled_design_%28100%29-093749-095250-081100.png"
            alt=""
          />
          <h4>25% off Neostrata with code SINGLES</h4>
          <p>
           

          NEOSTRATA professional skin care products are recommended by Dermatologists and Plastic Surgeons in over 42 countries.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
   
      <h1 className="Shophai" id='shop'> Shop by Ingredient</h1>

      <div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/Page-001-095910.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/02/original-Page-002-095102.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-Page-003-095100.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-Page-006-095117.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-004-095856.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-Page-005-095106.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="Shophai"> Best Sellers</h1>

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12596429-3594871019700125.jpg"
            alt=""
          />
          <p>SkinMedica TNS Advanced+ Serum 1oz</p>
          <p>$265.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11523630-6274891243712913.jpg"
            alt=""
          />
          <p>Elemis Pro-Collagen Cleansing Balm 100g</p>
          <p>$49.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg"
            alt=""
          />
          <p>Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (1.7oz) </p>
          <p>$128.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11370312-1044938634157826.jpg"
            alt=""
          />
          <p>
EltaMD UV Clear Tinted Broad-Spectrum SPF46</p>
          <p>$41.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>

      <h1 className="Shophai">Over On The Blog</h1>

      <div className="overblog" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/1223-DPO660-PD-SS-Jan-batch-shot-15_1200x672_1610651093-070718.jpg"
            alt=""
          />
          <h4>Intentional Skin Care with Dermalogica</h4>
          <p>
           
          Learn about Dermalogica at SkinStore!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/55/shot-211200X672_1609954468-070955.jpg"
            alt=""
          />
          <h4>Beauty Reset: Products that Reveal Younger Skin</h4>
          <p>
          Reset your skin this year with the right products!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/1200x672_1611689526-071206.jpg"
            alt=""
          />
          <h4>Hyaluronic Acid: The Secret Ingredient</h4>
          <p>
           
          Learn about hyaluronic acid here at SkinStore!
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

    </>
  )
}

export default SkinCare