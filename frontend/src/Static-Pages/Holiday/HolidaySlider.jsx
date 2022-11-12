import {Carousel} from 'react-responsive-carousel'
import '../HomePage/Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Holidayedit from './Holiday-Images/Holiday-Edit.jpeg';
import Holidayshop from './Holiday-Images/Holiday-Shop.jpeg';

const slider=[
    {
        image:Holidayedit
    },
    {
        image:Holidayshop
    },
]


function Slider() {
  return (
    <div className='maindivhai'>
  <Carousel autoPlay infiniteLoop showArrows showIndicators>

{slider.map((el)=>{
return <img src={el.image} alt="additional-image" height='100%' width='90%' />
})}

  </Carousel>


    </div>
  )
}

export default Slider