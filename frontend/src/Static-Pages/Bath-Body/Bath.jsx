import {HiOutlineShoppingBag} from 'react-icons/hi'
import '../HomePage/HomePage.css'
import '../SkinCare/SkinCare.css'
import { useNavigate } from 'react-router-dom'


function Bath() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
  
  return (
    <>
 

<div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Page-001-035911.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/Page-002-035914.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/Page-003-035927.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/38/Page-004-035938.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/47/Page-005-035947.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/55/Page-006-035955.png"
            alt=""
          />
        </div>
      </div>

      <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/34/SS-Batching-Christmas-Category_Banner-EG1180x450_2-034934.jpg" alt="" />
      </div>

      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinStore-Range-SerumsTreatments-044006.jpg"
            alt=""
          />
          <h4>25% off Illamasqua with code SINGLES</h4>
          <p>
           

          Self-care is more than a luxury in Italian culture, it’s a way of life.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-DRR_ShopTheRange_SkinStore_Hand%26Body_500x500-065723.jpg"
            alt=""
          />
          <h4>25% off Dr. Roebuck's with code SINGLES</h4>
          <p>
          We are Dr Roebuck’s, and we makeskincare full of function, not fillers.


          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/original-SkinStore_-_Image_5-065740.jpg"
            alt=""
          />
          <h4>25% off Aurelia London with code SINGLES</h4>
          <p>
           

         
Containing carefully blended levels of bespoke essential oils, our products are suitable skin.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/30/original-KFI_Skinstore_ShopRange_Bath-070130.png"
            alt=""
          />
          <h4>25% off Kerstin Florian with code SINGLES</h4>
          <p>
           

         
Kerstin Florian’s luxury skincare range was founded by skincare expert, Florian.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/49/Screenshot_2022-04-08_125701-042949.png"
            alt=""
          />
          <h4>25% off PUR with code SINGLES</h4>
          <p>
          Professional skin care brand founded in 1996 with a conscious,
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/33/original-Screenshot_2022-04-08_124716-042733.png"
            alt=""
          />
          <h4>
          25% off Cowshed with code SINGLES</h4>
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
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11401781-1894964322188103.jpg"
            alt=""
          />
          <p>NUXE Huile Prodigieuse Oil</p>
          <p>$26.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12564808-1014935531447783.jpg"
            alt=""
          />
          <p>Aesop Resurrection Hand Wash 500ml</p>
          <p>$30.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/10364465-1064965873801360.jpg"
            alt=""
          />
          <p>Aesop Resurrection Hand Wash 500ml </p>
          <p>$48.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11709502-1014887840432099.jpg"
            alt=""
          />
          <p>
          Bioderma Atoderm Shower Oil 1000ml</p>
          <p>$28.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>
      <h1 className="Shophai">What Blog Says</h1>

      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/20/original-Webp.net-resizeimage_%2825%29-072820.jpg"
            alt=""
          />
          <h4>Winter Foot Care at SkinStore </h4>
          <p>
           

          Turn your favorite products into the ideal tinted moisturizer!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/original-Webp.net-resizeimage_%2826%29-073009.jpg"
            alt=""
          />
          <h4>The Best Hand Cream for Softer Hands</h4>
          <p>
          See how to fake a good night's sleep with makeup and skincare!
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Untitled_design_%2842%29-100228.png"
            alt=""
          />
          <h4>How To Get Rid Of Bumps On Arms</h4>
          <p>
           

          Find the perfect match with Dermablend!
          </p>
          <button>READ MORE</button>
        </div>
      </div>




    </>
  )
}

export default Bath