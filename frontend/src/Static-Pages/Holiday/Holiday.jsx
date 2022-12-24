
import '../HomePage/HomePage.css'
import HolidaySlider from './HolidaySlider'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
function Holiday() {
 const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
 
  return (
    <>
    {/* slider  */}
<HolidaySlider/>
{/* first red div  */}
<div className="Trending_wala" onClick={handleredirect}>
        <div className='heightkm'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/original-original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot21500x500-052147-021101.jpg"
            alt="Smart Splurges"
          />
          <h4>
Budget Friendly Finds</h4>
          <p>
          Make room for everyone on your list—from skin care to hair tools, we’ve rounded up the gifts that wow without breaking the bank.
          </p>
          <button>SHOP NOW</button>
        </div>
          <div className='heightkm'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot20500x500-052136.jpg"
            alt="Smart Splurges"
          />
          <h4>Smart Splurges</h4>
          <p>
           
Splurge on something sentimental and give an extra thoughtful gift to someone you love.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className='heightkm'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/57/original-original-original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot23500x500-053709-091327-021057.jpg"
            alt="
Luxury Gifts"
          />
          <h4>
Luxury Gifts</h4>
          <p>
           
There's no better time to indulge in a luxury gift for you and yours. Shop the most opulent beauty presents here.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className='heightkm'>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot22500x500-053705.jpg"
            alt="Stocking Stuffers"
          />
          <h4>Stocking Stuffers</h4>
          <p>
          Small but mighty beauty gifts sure to delight all season long.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Neoutics">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-Shot34-500x500-091258.jpeg"
            alt="Home"
          />
          <h4>Festive Finds for the Home</h4>
          <p>
          Deck your home for the holidays with cozy scents guaranteed to make spirits bright.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot24500x500-053717.jpg"
            alt=""
          />
          <h4>
Gifts For You</h4>
          <p>
          Find and buy everything you need to make your inner beauty guru smile.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Estee">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/41/original-Shot27-500x500-091541.jpeg"
            alt=""
          />
          <h4>Skin and Hair Devices</h4>
          <p>
          Skin and hair tools sure to delight all the beauty lovers on your list.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="DHC">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/15/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot25500x500-054015.jpg"
            alt=""
          />
          <h4>Holiday Skincare</h4>
          <p>
          Deck the halls with holiday gift boxes and kits that add a little bit of skin care spice to your present lineup.

SHOP NOW
          </p>
          <button>SHOP NOW</button>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/19/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot26500x500-054019.jpg"
            alt=""
          />
          <h4>Best Selling Holiday</h4>
          <p>
          If you don’t know what to buy (or even if you do) check out the best-sellers that top our list every year.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
      
      <h1 className="Shophai"> Top Holiday Gift Packs</h1>
{/* gift packs  */}

<div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13812007-1244993329820695.jpg"
            alt="Skinstore"
          />
          <p>Skinstore 2022 Holiday Edit - $670 Value</p>
          <p>$149.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13949126-6304993388536680.jpg"
            alt="Ritual"
          />
          <p>Rituals The Ritual of Advent 3D</p>
          <p>$125.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13903619-1444998250558359.jpg"
            alt="hair"
          />
          <p>Olaplex Hair Repair Treatment Holiday Kit (Worth $90.00) </p>
          <p>$62.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13953421-1574996250285994.jpg"
            alt=""
          />
          <p>Natura Bissé Diamond Extreme Holiday Set (Worth $633.00)</p>
          <p>$397.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>

    </>
  )
}

export default Holiday