import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const SVGFeature = () => {
   return (
      <Box
         position={'relative'}
         //  top="60px"
         //  left="60px"
      >
         <Box className="circle1" position={'relative'} top="0px" zIndex={1}>
            {/* <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
               <defs>
                  <linearGradient id="svg1" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(255,110,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(138,73,212,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg2" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(140,255,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(10,73,255,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg3" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(140,100,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(255,73,255,0.75)" />
                  </linearGradient>
               </defs>
               <circle
                  cx="11"
                  cy="6"
                  r="5.5"
                  fill="url('#svg2')"
                  stroke-dasharray="1.38, 1"
                  stroke="black"
                  stroke-width="0.25"
               />
               <circle cx="8" cy="12" r="5.5" fill="url('#svg1')" />
               <circle cx="15" cy="12" r="5.5" fill="url('#svg3')" />
            </svg> */}
            {/* <svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
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
               <text x="50%" y="50%" text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">Look, I’m centered!Look, I’m centered!</text>
               <g id="c1"> </g>
               <circle cx="12" cy="7" r="6" fill="url('#svg2')" />
               <circle cx="9" cy="13" r="6" fill="url('#svg1')" />
               <circle cx="15" cy="13" r="6" fill="url('#svg3')" />
            </svg> */}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
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
               <g transform="translate(12, 10)">
                  <circle fill="url('#svg3')" r="6" />
                  <text
                     stroke="white"
                     text-anchor="middle"
                     font-size="1px"
                     stroke-width="0.1px"
                     alignment-baseline="central"
                     font-family="Arial, Helvetica, sans-serif"
                  >
                     Viable
                  </text>
               </g>

               <g transform="translate(8, 16)">
                  <circle fill="url('#svg2')" r="6" />
                  <text
                     stroke="white"
                     text-anchor="middle"
                     font-size="1px"
                     stroke-width="0.1px"
                     alignment-baseline="central"
                     font-family="Arial, Helvetica, sans-serif"
                  >
                     Feasible{' '}
                  </text>
               </g>
               <g transform="translate(16, 16)">
                  <circle fill="url('#svg1')" r="6" />
                  <text
                     stroke="white"
                     text-anchor="middle"
                     font-size="1px"
                     stroke-width="0.1px"
                     font-family="Arial, Helvetica, sans-serif"
                     alignment-baseline="central"
                  >
                     Inclusive
                  </text>
               </g>
            </svg>
         </Box>
      </Box>
   )
}

export const SVGFeatureMobile = () => {
   return (
      <Box position={'relative'}>
         <Box className="circle1" position={'relative'} top="70px" zIndex={1}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <defs>
                  <linearGradient id="svg1" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(255,110,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(138,73,212,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg2" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(140,255,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(10,73,255,0.75)" />
                  </linearGradient>
                  <linearGradient id="svg3" gradientTransform="rotate(109)">
                     <stop offset="0%" stopColor="rgba(140,100,254,0.75)" />
                     <stop offset="93%" stopColor="rgba(255,73,255,0.75)" />
                  </linearGradient>
               </defs>
               /*{' '}
               <text
                  y="0"
                  font-family="Arial, Helvetica, sans-serif"
                  fontSize={'0.05rem'}
               >
                  VIABLE
               </text>
               <circle cx="9.5" cy="3" r="3" fill="url('#svg2')" />
               <circle cx="8" cy="6" r="3" fill="url('#svg1')" />
               <circle cx="11" cy="6" r="3" fill="url('#svg3')" />
            </svg>
         </Box>
      </Box>
   )
}
