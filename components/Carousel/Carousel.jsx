import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
function Carousel2() {
   return (
      <div className="slider-carousel">
         <Splide
            options={{
               rewind: true,
               autoplay: true,
               pauseOnHover: false,
               interval: 6000,
               breakpoints: {
                  640: {
                     height: '250px'
                  },
                  800: {
                     height: '300px'

                  }
               }
            }}
            type="loop"
            hasAutoplayProgress={true}
         >
            <SplideSlide>
               <img
                  src="https://res.cloudinary.com/westcic/image/upload/w_1440,h_550,c_fill/v1640045431/woman-engineer_f3o3he.jpg"
                  alt="Image 1"
               />
            </SplideSlide>
            <SplideSlide>
               <img
                  src="https://res.cloudinary.com/westcic/image/upload/w_1440,h_550,c_fill/v1640045439/lab_sww3q6.jpg"
                  alt="Image 2"
               />
            </SplideSlide>
            <SplideSlide>
               <img
                  src="https://res.cloudinary.com/westcic/image/upload/w_1440,h_550,c_fill/v1640045427/plant-bulb_u9nge3.jpg"

                  alt="Image 2"
               />
            </SplideSlide>
         </Splide>
      </div>
   )
}

export default Carousel2
