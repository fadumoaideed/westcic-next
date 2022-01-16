import React, { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import {
   Box,
   Flex,
   Button,
   Container,
   Grid,
   Heading,
   Text,
   SimpleGrid
} from '@chakra-ui/react'
import TextLoop from 'react-text-loop'
import { translate3d } from 'react-animations/lib/utils'
let prefix = '/westcic-next'

export default function Home() {
   return (
      <Fragment>
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
         </Head>

         <Box className="home-container">
            <NavBar />
            <Button
               position={'absolute'}
               top="500px"
               fontSize={'20px'}
               zIndex={'1'}
               color="white"
               variant="outline"
               borderRadius={'30'}
               transition="all 200ms ease"
               mx={['50px', '100px', '150px', '150px']}
               _hover={{
                  boxShadow: 'lg',
                  bg: 'rgba(0, 0, 0, 0.2)',
                  transform: 'scale(1.05)'
               }}
               width="180px"
               height="50px"
            >
               Learn more!
            </Button>
            {/* //FIXME: */}
            {/* <Image
               src="/../public/Untitled(1).png"
               alt="transpar"
               layout="fill"
               transition={'all .2s ease-in-out'}
               transform={'scale(1.02'}
               
            /> */}
            <Box className="hell" position={'absolute'} top="200" zIndex={'1'}>
               <Heading color="white" as="h1" size="4xl" mx="50px">
                  <TextLoop children={['Engineer', 'Innovate', 'Design']} />
                  <span>&nbsp;</span>a
               </Heading>
               <Heading color="white" as="h1" size="4xl" mx="50px">
                  sustainable world
               </Heading>
               <Text
                  fontFamily={'Arial'}
                  color="white"
                  as="h1"
                  mt="10px"
                  mx="55px"
                  fontSize={'20px'}
               >
                  Human centered design at the center of all things
               </Text>
            </Box>
            <Box
               id="section1"
               bg="white"
               height={'500px'}
               m="50px"
               justifyContent={'center'}
            >
               <Heading size={'3xl'}>Lorem ipsum</Heading>
               <Text fontSize={'2xl'} pt="20px">
                  Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </Text>
            </Box>

         </Box>
      </Fragment>
   )
}
