import AwesomeSlider from 'react-awesome-slider'
// import './carousel.scss'
import React from 'react'

function Carousel() {
   return (
      <div>
         <AwesomeSlider>
            <div data-src="https://via.placeholder.com/350x150" />
            <div data-src="https://via.placeholder.com/350x150" />
            <div data-src="https://via.placeholder.com/350x150" />
            <div data-src="https://via.placeholder.com/350x150" />
         </AwesomeSlider>
      </div>
   )
}

export default Carousel
