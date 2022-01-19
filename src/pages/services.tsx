import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Services() {
   return (
      <Box h="400">
         <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
               offset={0}
               speed={2.5}
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
               }}
            >
               <p>Scroll down</p>
            </ParallaxLayer>

            <ParallaxLayer
               offset={1}
               speed={2}
               style={{ backgroundColor: '#ff6d6d' }}
            />

            <ParallaxLayer
               offset={1}
               speed={0.5}
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  backgroundColor: 'blue'
               }}
            >
               <p>Scroll up</p>
            </ParallaxLayer>
            <ParallaxLayer
               offset={1}
               speed={0.5}
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  backgroundColor: 'pink'
               }}
            >
               <p>Scroll up</p>
            </ParallaxLayer>
         </Parallax>
      </Box>
   )
}

export default Services
