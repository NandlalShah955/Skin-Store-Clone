import React from 'react'
import './MainNavbar.css'
import {Link} from 'react-router-dom'
// import Fragrance from '../Fragrance/Fragrance'
function MainNavbar() {
  const [isshown, setisshown] = React.useState(false)
  const [issmall, setissmall] = React.useState(false)
  const [showimage, setshowimage] = React.useState(false)
  const handleclicksmall=()=>{
setissmall(true)
  }
  const handleleaveksmall=()=>{
setissmall(false)
  }
  const handleshowimg=()=>{
setshowimage(true)
  }
  const handlehideimg=()=>{
    setshowimage(false)
  }



  const handleshow=()=>{
setisshown(true)
  }
  const handleleave=()=>{
   setisshown(false)
  }
  return (
    <>
<div className='hoveringdiv'>
<ul id='navibarr'>
 <Link className='link' to='/Brands'>    <li onMouseOver={handleshow}  onMouseLeave={handleleave}    >Brands</li></Link>
 <Link className='link' to='/Holiday'> <li onMouseOver={handleclicksmall}  onMouseLeave={handleleaveksmall} >Holiday</li></Link>
 <Link className='link' to='/Sale'> <li onMouseOver={handleshowimg}  onMouseLeave={handlehideimg}>Sale</li></Link>
 {/* adclassName='link' d products link here  */}
 
 <Link className='link' to='/SkinCare'> <li onMouseOver={handleshow}  onMouseLeave={handleleave} >SkinCare</li></Link>
 <Link className='link' to='/Hair'> <li onMouseOver={handleclicksmall}  onMouseLeave={handleleaveksmall}>Hair</li></Link>
 <Link className='link' to='/Makeup'> <li onMouseOver={handleshowimg}  onMouseLeave={handlehideimg}>Makeup</li></Link>
 <Link className='link' to='/BathBody'> <li  onMouseOver={handleshow}  onMouseLeave={handleleave}>Bath & Body</li></Link>
 <Link className='link' to='/Fragrance'> <li onMouseOver={handleclicksmall}  onMouseLeave={handleleaveksmall}>Fragrance</li></Link>
 <Link className='link' to='/SelfCare'> <li onMouseOver={handleshowimg}  onMouseLeave={handlehideimg}>Self-Care</li></Link>
 <Link className='link' to='/Tools'> <li onMouseOver={handleshow}  onMouseLeave={handleleave}>Tools</li></Link>
 <Link className='link' to='/'> <li  onMouseOver={handleshowimg}  onMouseLeave={handlehideimg}>New</li></Link>
 <Link className='link' to='/'> <li onMouseOver={handleclicksmall}  onMouseLeave={handleleaveksmall}>Routine</li></Link>
 <Link className='link' to='/'> <li onMouseOver={handleshowimg}  onMouseLeave={handlehideimg}>Blog</li></Link>
</ul>

</div>

{isshown && <div className='hidden'>
  <div>
<h3>Popular Categories</h3>
<ul>
  <li>View All Skin Care</li>
  <li>New In</li>
  <li>Clean Skincare</li>
  <li>5*Rated Products</li>
  <li>Gifts & Sets</li>
  <li>Supersizes & Duo</li>
  <li>Travel Sizes</li>
</ul>



  </div>
  
  <div>
    <h3>By Product Type</h3>
    <ul>
      <li>Cleansers</li>
      <li>Moisturizers</li>
      <li>Serums</li>
      <li>Eye Serum</li>
      <li>Exfoliators</li>
      <li>Masks</li>
      <li>Eye Care</li>
      <li>Toners</li>
      <li>Oils</li>
      <li>Treatments</li>
      <li>Mists</li>
      <li>Self Tanning</li>
      <li>Tools</li>
      <li></li>
    </ul>
  </div>
  
  <div>
    <h3>By Ingredient</h3>
    <ul>
    <li>Vitamin C</li>
    <li>AHA</li>
    <li>Caffeine</li>
    <li>Retinol</li>
    <li>Hyaluronic Acid</li>
    <li>Niacinamide</li>
    <li>Lactic Acid</li>
    <li>Sailcylic Acid</li>
    <li>Glycolic Acid</li>
    <li>Azelaic Acid</li>
    </ul>
    
  </div>
  
  <div>
    <h3>By Specific Concern</h3>
    <ul>
      <li>Acne & Blemishes</li>
      <li>Fine Line & Wrinkles</li>
      <li>Dark Circles</li>
      <li>Dry Skin</li>
      <li>Dullness</li>
      <li>Lack of Firmness</li>
      <li>Pigmentation</li>
      <li>Pregnancy Skincare</li>
      <li>Redness & Rosacea</li>
      <li>Sensitive Skin</li>
      <li>Visible Pores</li>
    </ul>
  </div>
  
  
  
  <div>
    <h3>Sunscreen & Suncare</h3>
    <ul>
      <li>Take The SPF Quiz</li>
      <li>SPF 30 and over</li>
      <li>SPF 50 and over</li>
      <li>After Sun</li>
      <li>Tinted</li>
      <li>Mineral</li>
      <li>Eye Protection</li>
    </ul>
  </div>





</div>
}
{issmall && <div className='smallhidden'>
<div>
<h3>Popular Categories</h3>
<ul>
  <li>View All Fragrance</li>
  <li>New In</li>
  <li>5*Rated Products</li>
  
</ul>



  </div>

  <div>
<h3>Top Brands</h3>
<ul>
  <li>NEOM Organics</li>
  <li>Glasshouse Fragrance</li>
  <li>KORRES</li>
  <li>NEST Fragrances</li>
  <li>Molton Brown</li>
 </ul>



  </div>

  <div>
<h3>Personal Fragrance</h3>
<ul>
  <li>Perfume</li>
  <li>Eaude Toilette</li>
  <li>Body Spray</li>
  <li>For Her</li>
  <li>Gifts & Sets</li>
  <li>For Him</li>
 
</ul>
</div>


  <div>
<h3>Home Fragrance</h3>
<ul>
  <li>Scented Candled</li>
  <li>Diffusers</li>
  <li>Aromatherapy</li>
  <li>Pillow Mists</li>
  <li>Room Sprays</li>
 </ul>



  </div>

</div>
}
{showimage && <div className='showimg'>

<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Skin_Care_Nav_%281%29-20221027.png" alt="" />
  <p>SkinCare</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Makeup_Nav_%281%29-20221027.png" alt="" />
  <p>Makeup</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Hair_Care_Nav_%281%29-20221028.png" alt="" />
  <p>HairCare</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Body_Nav_%281%29-20221027.png" alt="" />
  <p>Body</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Free_Beauty_Consultation_Nav_%282%29-20221028.png" alt="" />
  <p>Tips and Advice</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Tips_and_Advice_Nav_%281%29-20221027.png" alt="" />
  <p>Beauty Center</p>
</div>
<div>
  <img src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Free_Beauty_Consultation_Nav_%281%29-20221027.png" alt="" />
  <p>Free Beuty Consultants</p>
</div>


</div>
}


{/* <Fragrance/> */}

    </>
  )
}

export default MainNavbar