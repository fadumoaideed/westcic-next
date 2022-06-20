import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function SVGFeature() {
   return (
      <Box
         position={'relative'}
         //  top="60px"
         //  left="60px"
      >
         <Box className="circle1" position={'relative'} top="0px" zIndex={1}>
            <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
               <defs>
                  <linearGradient id="svg1" gradientTransform="rotate(109)">
                     <stop offset="0%" stop-color="rgba(255,110,254,0.75)" />
                     <stop offset="93%" stop-color="rgba(138,73,212,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg2" gradientTransform="rotate(109)">
                     <stop offset="0%" stop-color="rgba(140,255,254,0.75)" />
                     <stop offset="93%" stop-color="rgba(10,73,255,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg3" gradientTransform="rotate(109)">
                     <stop offset="0%" stop-color="rgba(140,100,254,0.75)" />
                     <stop offset="93%" stop-color="rgba(255,73,255,0.75)" />
                  </linearGradient>
               </defs>
               {/* <style>
                  .slick_next_arrow { fill:red;}
                    
                  
                  #hover:target ~ .slick_next_arrow {
                     fill:green;
                  }
               </style> */}
               {/* <text
                  y="20"
                  font-family="Arial, Helvetica, sans-serif"
                  fontSize={'0.07rem'}
               >
                  VIABLE
               </text> */}
               <circle cx="11" cy="6" r="5.5" fill="url('#svg1')" />
               <circle cx="8" cy="12" r="5.5" fill="url('#svg3')" />
               <circle cx="15" cy="12" r="5.5" fill="url('#svg2')" />
            </svg>
         </Box>
      </Box>
   )
}

export default SVGFeature
