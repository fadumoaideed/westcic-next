import React, { Fragment } from 'react'
import Head from 'next/head'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { slideInLeft, slideInRight } from 'react-animations'
import { Box, SimpleGrid, Heading, Text, Spacer } from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'

let prefix = '/westcic-next'

const SlideInLeft = styled.div`
   animation: 2s ${keyframes`${slideInLeft}`};
`
const SlideInRight = styled.div`
   animation: 2s ${keyframes`${slideInRight}`};
`
export default function Home() {
   return (
      <Fragment>
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
         </Head>

         <Box className="home-container">
            <Carousel />

            <SimpleGrid columns={[1, 1, 2]} mx={['0', '0', '100px', '100px']}>
               <SlideInLeft>
                  <Box
                     bg="teal.500"
                     height="400px"
                     width={['100%', '100%', '50vw - 110px', '50vw - 110px']}
                     className="box"
                  >
                     <Heading
                        fontSize={['5xl', '5xl', '5xl', '6xl']}
                        align="center"
                     >
                        Sustainable Innovation
                     </Heading>
                     <Text
                        fontSize={['xsm', '2md', '5md', '6md']}
                        variant="outline"
                        align="justify"
                        fontWeight="thin"
                        pt="30px"
                        px={['30px', '30px', '70px', '80px']}
                     >
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                     </Text>
                  </Box>
               </SlideInLeft>
               <Box bg="grey">
                  <Text>Something interactive here</Text>
               </Box>
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} mx={['0', '0', '100px', '100px']}>
               <Box bg="grey">
                  <Text>Something interactive here</Text>
               </Box>
               <SlideInRight>
                  <Box
                     bg="teal.500"
                     height="400px"
                     width={['100%', '100%', '50vw - 100px', '50vw - 100px']}
                     className="box"
                  >
                     <Heading
                        fontSize={['5xl', '5xl', '5xl', '6xl']}
                        align="center"
                     >
                        Human Centered Design
                     </Heading>
                     <Text
                        fontSize={['xsm', '2md', '5md', '6md']}
                        variant="outline"
                        align="justify"
                        fontWeight="thin"
                        pt="30px"
                        px={['30px', '30px', '70px', '80px']}
                     >
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                     </Text>
                  </Box>
               </SlideInRight>
            </SimpleGrid>
         </Box>
      </Fragment>
   )
}
