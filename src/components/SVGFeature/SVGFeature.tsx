import { Box } from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function SVGFeature() {
   return (
      <Box position={'relative'}>
         <AnimationOnScroll
            animateIn="animate__animate__fadeInTopLeft"
            animateOnce={false}
         >
            <Box position={'relative'} top="0px" zIndex={1}>
               <svg xmlns="http://www.w3.org/2000/svg" width="213" height="213">
                  <defs>
                     <linearGradient id="svg" gradientTransform="rotate(45)">
                        <stop offset="0%" stop-color="rgba(255,110,254,0.75)" />
                        <stop offset="93%" stop-color="rgba(138,73,212,0.75)" />
                     </linearGradient>
                  </defs>
                  <path
                     fill="url(#svg)"
                     d="M100 3.2527767497326a13 13 0 0 1 13 0l79.664718204935 45.994446500535a13 13 0 0 1 6.5 11.258330249198l0 91.98889300107a13 13 0 0 1 -6.5 11.258330249198l-79.664718204935 45.994446500535a13 13 0 0 1 -13 0l-79.664718204935 -45.994446500535a13 13 0 0 1 -6.5 -11.258330249198l1.4650701372568e-13 -91.98889300107a13 13 0 0 1 6.5 -11.258330249198"
                  ></path>
               </svg>
            </Box>{' '}
         </AnimationOnScroll>

         <Box position={'relative'} top={'-213px'} left={'60px'} zIndex={2}>
            <AnimationOnScroll animateIn="animate__fadeIn"></AnimationOnScroll>

            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="213">
               <defs>
                  <linearGradient id="svg1" gradientTransform="rotate(109)">
                     <stop offset="0%" stop-color="rgba(106,240,130,0.75)" />
                     <stop offset="53%" stop-color="rgba(73,146,212,0.75)" />
                  </linearGradient>
               </defs>
               <path
                  fill="url(#svg1)"
                  d="M100 3.2527767497326a13 13 0 0 1 13 0l79.664718204935 45.994446500535a13 13 0 0 1 6.5 11.258330249198l0 91.98889300107a13 13 0 0 1 -6.5 11.258330249198l-79.664718204935 45.994446500535a13 13 0 0 1 -13 0l-79.664718204935 -45.994446500535a13 13 0 0 1 -6.5 -11.258330249198l1.4650701372568e-13 -91.98889300107a13 13 0 0 1 6.5 -11.258330249198"
               ></path>
            </svg>
         </Box>
         <Box position={'relative'} top="-375px" left={'30px'} zIndex={1}>
            <AnimationOnScroll animateIn="animate__fadeIn"></AnimationOnScroll>
            <svg xmlns="http://www.w3.org/2000/svg" width="213" height="213">
               <defs>
                  <linearGradient id="svg2" gradientTransform="rotate(109)">
                     <stop offset="0%" stop-color="rgba(255,189,118,0.75)" />
                     <stop offset="53%" stop-color="rgba(73,99,212,0.75)" />
                  </linearGradient>
               </defs>
               <path
                  fill="url(#svg2)"
                  d="M100 3.2527767497326a13 13 0 0 1 13 0l79.664718204935 45.994446500535a13 13 0 0 1 6.5 11.258330249198l0 91.98889300107a13 13 0 0 1 -6.5 11.258330249198l-79.664718204935 45.994446500535a13 13 0 0 1 -13 0l-79.664718204935 -45.994446500535a13 13 0 0 1 -6.5 -11.258330249198l1.4650701372568e-13 -91.98889300107a13 13 0 0 1 6.5 -11.258330249198"
               ></path>
            </svg>
         </Box>
      </Box>
   )
}

export default SVGFeature
