import {HiOutlineShoppingBag} from 'react-icons/hi'
import '../HomePage/HomePage.css'
import '../SkinCare/SkinCare.css'
import { useNavigate } from 'react-router-dom'


function Selfcare() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
  return (
    <div>
 <div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/37/Page-001-033837.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/44/Page-002-033844.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/52/Page-003-033852.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/Page-004-033900.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/22/Page-005-033922.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/25/Page-006-033925.png"
            alt=""
          />
        </div>
      </div>

      <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/22/SS-Batching-Christmas-Category_Banner-EG1180x450_3-040522.jpg" alt="" />
      </div>

      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/Circle-074826-070200.png"
            alt=""
          />
          <h4>Up to 30% off Slip</h4>
          <p>
       
Slip is the world’s first silk pillowcase offered as a beauty product which provides immediateand dramatic results.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/Screenshot_2022-04-08_131225-085435.png"
            alt=""
          />
          <h4>25% off Aromatherapy Associates with code SINGLES</h4>
          <p>
          We are Dr Roebuck’s, and we makeskincare full of function, not fillers.


          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/45/Shot56-600x600-070145.png"
            alt=""
          />
          <h4>
          Up to 40% off ESPA</h4>
          <p>
           

         

          
You can buy the full range ESPA skin care products online and enjoy the luxury of ESPA at home.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-original-Gentlemen%27s_Playground-025731-090205.jpg"
            alt=""
          />
          <h4>25% off LELO with code SINGLES</h4>
          <p>
           

         
Kerstin Florian’s luxury skincare range was founded by skincare expert, Florian.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/08/Screenshot_2022-04-08_125701-070508.png"
            alt=""
          />
          <h4>25% off Comfort Zone with code SINGLES</h4>
          <p>
          Professional skin care brand founded in 1996 with a conscious,
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/19/original-SkinStore-Range-SerumsTreatments-070519.jpg"
            alt=""
          />
          <h4>
          25% off Borghese with code SINGLES</h4>
          <p>
           

         
Enjoy the ultimate Spa-Inspired experience at home with our natural products.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <h1 className="Shophai"> Best Sellers</h1>

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12877967-2024880386298046.jpg"
            alt=""
          />
          <p>Smile Makers - The Firefighter</p>
          <p>$60.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12878248-1864896468022422.jpg"
            alt=""
          />
          <p>Fur Silk Scrub 6 fl. oz</p>
          <p>$50.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/10524480-3634925715074127.jpg"
            alt=""
          />
          <p>this works Deep Sleep Pillow Spray </p>
          <p>$30.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13874768-8584989263146251.jpg"
            alt=""
          />
          <p>
          
Aromatherapy Associates Moment of Grounding Set </p>
          <p>$70.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>
      <h1 className="Shophai"> Over On The Blog</h1>
      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/39/12190252-6-1-1_1605909391-094439.jpg"
            alt=""
          />
          <h4>Signs To Change Your Skin Care Regimen </h4>
          <p>
See what’s new at SkinStore this month with our new brand.</p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/1223-DPO660-SS-JS-EJ-Jan-toolkit-batch-shot-1600x600_1609868048-094728.jpg"
            alt=""
          />
          <h4>Beauty Solutions for 2022</h4>
          <p>
          See how to fake a good night's sleep with makeup and skincare!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/59/skinstore_newsletter_580x348_02_%281%29-095159.jpg"
            alt=""
          />
          <h4>NEOM and natura: Now at SkinStore</h4>
          <p>
           

          Find the perfect match with Dermablend!
          </p>
          <button>READ MORE</button>
        </div>
      </div>




    </div>
  )
}

export default Selfcare