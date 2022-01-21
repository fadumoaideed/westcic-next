import React, { Fragment } from 'react'
import Head from 'next/head'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { slideInLeft, slideInRight } from 'react-animations'
import {
   Box,
   Grid,
   Flex,
   GridItem,
   SimpleGrid,
   Stack,
   Heading,
   Text
} from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'
import Navbar from '../components/Navbar/Navbar'
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
            <Navbar />

            <Carousel />

            <SimpleGrid columns={[1, 1, 2]}>
               <SlideInLeft>
                  <Box
                     bg="teal.500"
                     height="400px"
                     // pt="50px"
                     width={['100%', '100%', '50vw', '50vw']}
                     className="box"
                     // transition={'all'}
                     // transform={'translateX(10px)'}
                     // _fullScreen={{ width: '300px' }}
                  >
                     <Heading
                        fontSize={['2xl', '2xl', '5xl', '6xl']}
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
                        px={['30px', '60px', '85px', '200px']}
                     >
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                     </Text>
                  </Box>
               </SlideInLeft>
            </SimpleGrid>
         </Box>
      </Fragment>
   )
}
