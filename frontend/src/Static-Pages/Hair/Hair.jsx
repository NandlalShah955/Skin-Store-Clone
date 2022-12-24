
import {HiOutlineShoppingBag} from 'react-icons/hi'
import '../HomePage/HomePage.css'
import '../SkinCare/SkinCare.css'
import { useNavigate } from 'react-router-dom'

function Hair() {
  const navigate=useNavigate()
  const handleredirect=()=>{
navigate('/Sale')
 }
  
  return (
    <>
 <div className='topdiv' onClick={handleredirect}>
        <img src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/23/SS-Batching-Christmas-Category_Banner-EG1180x450_4-082423.jpg" alt="" />
      </div>
      
      <div className="overblog" id='overblog1' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/33/original-original-500x500-085431-082633.jpg"
            alt=""
          />
          <h4>30% off Christophe Robin + Gift</h4>
          <p>
           

         
Receive a Christophe Robin Cleansing Volumizing Deluxe Paste 12ml (Free Gift) when you spend $80 or more.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/15/original-IMG_0861-035315.jpg"
            alt=""
          />
          <h4>25% off RAINCRY with code SINGLES</h4>
          <p>
          Luxury haircare brand RAINCRY was founded by hairstylist Feisal Qureshi
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-original-500x500-043905-101746.jpg"
            alt=""
          />
          <h4>30% off Grow Gorgeous</h4>
          <p>
           

          
Looking for thicker hair? Grow Gorgeous' range of hair growth products, which includes their popular Hair Density Serum,.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>

      <div className="overblog" id='overblog2' onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/08/Screenshot_2022-04-08_115604-084408.png"
            alt=""
          />
          <h4>25% off Philip Kingsley with code SINGLES</h4>
          <p>
           

          
Whether you’re after a hair growth treatment, expert hair brushes or moisturizing shampoo,
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot22-500x500-065434.png"
            alt=""
          />
          <h4>25% off David Mallett with code SINGLES</h4>
          <p>
          The vibrant Australian sunshine combined with the culture and worldliness of Europe has influenced David Mallett
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-SkinStore_ACDCollection-065458.png"
            alt=""
          />
          <h4>25% off FEKKAI with code SINGLES</h4>
          <p>
           

          
FEKKAI offers clean, high-performance haircare that doesn't compromise.


          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
   
      <h1 className="Shophai" id='shop'> Shop by Hair Focus</h1>

      <div className="Shopcateg" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/Page-001-015714.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/Page-002-015723.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/Page-003-015732.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/Page-004-015742.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/50/Page-005-015750.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-006-015756.png"
            alt=""
          />
        </div>
      </div>

      <h1 className="Shophai"> Best Sellers</h1>

      <div className="buying_people" onClick={handleredirect}>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12357671-1384966113558978.jpg"
            alt=""
          />
          <p>Alterna Caviar Anti-Aging Replenishing Moisture Shampoo </p>
          <p>$104.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/12635437-1314911951568611.jpg"
            alt=""
          />
          <p>
Christophe Robin Cleansing Purifying Scrub with Sea Salt 250ml</p>
          <p>$49.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/13645157-2124947241775400.jpg"
            alt=""
          />
          <p>RAINCRY Regenerating Shampoo and Repairing Conditioner Bundle </p>
          <p>$73.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
        <div className="Riley">
          <img
            src="https://static.thcdn.com/images/small/webp//productimg/480/480/11927426-2014713645552216.jpg"
            alt=""
          />
          <p>
         
Grow Gorgeous Density Serum Intense 60ml</p>
          <p>$35.00</p>
          <div><HiOutlineShoppingBag/>SHOP NOW</div>
        </div>
      </div>

      <h1 className="Shophai">Over On The Blog</h1>

      <div className="overblog">
        <div>
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/0115-TUU087-SS-AH-February-Batching-Shot-24-1080x1080-072235.jpg"
            alt=""
          />
          <h4>Learn about the Hair Care Brands!</h4>
          <p>
           
         
Get the inside scoop on haircare brands like Olaplex at SkinStore!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-hair_color-084316.jpg"
            alt=""
          />
          <h4>Hair Color 101</h4>
          <p>
          Start your hair color journey here!
          </p>
          <button>READ MORE</button>
        </div>
        <div className="Tripoller">
          <img
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/33/0201-TUU087-SS-AH-February-Batching-Shot-25-1080x1080-072333.jpg"
            alt=""
          />
          <h4>Soft Curls with T3</h4>
          <p>
           
          See hoe T3 gives you beach
          </p>
          <button>READ MORE</button>
        </div>
      </div>

    </>
  )
}

export default Hair