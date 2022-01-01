import React, { Fragment } from 'react'
import Head from 'next/head'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { slideInRight } from 'react-animations'
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
let prefix = '/westcic-next'
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

            <SimpleGrid columns={[1, 2, 2]} pb="4">
               <SlideInRight>
                  <Box bg="grey" height="400px" align="center" className="box">
                     <Stack
                        spacing={3}
                        p="5"
                        display="flex"
                        align="center"
                     ></Stack>
                  </Box>
               </SlideInRight>

               <Box bg="teal.500" height="400px" align="center">
                  <Stack
                     spacing={3}
                     display="flex"
                     align="center"
                     p="5"
                  ></Stack>
               </Box>
            </SimpleGrid>
         </Box>
      </Fragment>
   )
}

{
   /* <Heading
fontSize={['xl', '2xl', '5xl', '6xl']}
align="center"
>
Sustainable Innovation
</Heading>
<Text
fontSize={['2sm', '2md', '5md', '6md']}
variant="outline"
align="justify"
fontWeight="thin"
p="5"
>
Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat.
</Text> */
}
