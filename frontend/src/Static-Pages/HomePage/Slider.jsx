import {Carousel} from 'react-responsive-carousel'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Blackfriday from './Homepage-Images/Black-Friday.jpeg';
import Singlesday from './Homepage-Images/Singles-Day.jpeg';
import Holidayedit from './Homepage-Images/Holiday-Edit.jpeg';
import Holidayshop from './Homepage-Images/Holiday-Shop.jpeg';

const slider=[
    {
        image:Blackfriday
    },
    {
        image:Singlesday
    },
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