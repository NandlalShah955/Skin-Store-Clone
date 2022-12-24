import {HiOutlineShoppingBag} from 'react-icons/hi'
import '../HomePage/HomePage.css'
import '../SkinCare/SkinCare.css'
import { useNavigate } from 'react-router-dom'

function Fragrance() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
  return (
    <>

<h1 className="Shophai">Fragrance</h1>
  <div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/37/Page-001-043237.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/Page-002-043242.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/55/Page-003-043255.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-004-043309.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/19/Page-005-043319.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/Page-006-043326.png"
            alt=""
          />
        </div>
      </div>

      <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/04/SS-Batching-Christmas-Category_Banner-EG1180x450_7-082804.jpg" alt="" />
      </div>

      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-CoaR_SkinToStore_500x500_Fragrance-021958.jpg"
            alt=""
          />
          <h4>25% off Confessions with code SINGLES</h4>
          <p>
           

         
We were born in 2018, holding fast to the idea that the fragrance industry was in dire need of a change.
          </p>
          <button className='Hovereff'>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/50/original-SkinStoreImage3-070350.png"
            alt=""
          />
          <h4>25% off Juliette Has a Gun with code SINGLES</h4>
          <p>
          We are Dr Roebuck’s, and we makeskincare full of function, not fillers.


          </p>
          <button className='Hovereff'>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/Screenshot_2022-04-08_131225-044206.png"
            alt=""
          />
          <h4>
25% off Aromatherapy Associates with code SINGLES</h4>
          <p>
           

         

          Starting out as therapists in the early 1970s, our founders, Geraldine Howard and Sue Beechey, connected with the emerging practice of aromatherapy.
          </p>
          <button className='Hovereff'>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-Screenshot_2022-04-08_125033-085414.png"
            alt=""
          />
          <h4>25% off Kerstin Florian with code SINGLES</h4>
          <p>
           

         
Kerstin Florian’s luxury skincare range was founded by skincare expert, Florian.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/original-0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot19-500x500-064027.png"
            alt=""
          />
          <h4>25% off PUR with code SINGLES</h4>
          <p>
          Professional skin care brand founded in 1996 with a conscious,
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-Screenshot_2022-04-22_122934-045210.png"
            alt=""
          />
          <h4>
          25% off thisworks with code SINGLES</h4>
          <p>
           

         
Enjoy the ultimate Spa-Inspired experience at home with our natural products.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <h1 className="Shophai"> New & Trending</h1>

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11288823-1504904688237120.jpg"
            alt=""
          />
          <p>NEST New York Bamboo Reed Diffuser</p>
          <p>$58.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12519978-6904910939459601.jpg"
            alt=""
          />
          <p>Glasshouse Fragrances  I'Ll Take Manhattan</p>
          <p>$50.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/10970370-1764928009588511.jpg"
            alt=""
          />
          <p>NEOM Perfect Nights Sleep Scented Travel Candle </p>
          <p>$18.00</p>
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
    
      <div className="overblog" id='overblog1'>
        <div id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/skinstore_newsletter_580x348_02_%281%29-065023-094340.jpg"
            alt=""
          />
          <h4>NEOM and natura: What's New on SkinStore </h4>
          <p>
See what’s new at SkinStore this month with our new brand.</p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/43/original-Shop_the_Range_-_Image_1_-_Signature_Collection_500x500-071840-094943.jpg"
            alt=""
          />
          <h4>The Best Hand Cream for Softer Hands</h4>
          <p>
          See how to fake a good night's sleep with makeup and skincare!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller" id='nichekro'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/43/original-Webp.net-resizeimage_-_2021-02-09T164836.851-094843.jpg"
            alt=""
          />
          <h4>Recharge For Winter With The This Works</h4>
          <p>
           

          Find the perfect match with Dermablend!
          </p>
          <button>READ MORE</button>
        </div>
      </div>


    </>
  )
}

export default Fragrance