import React, { Fragment } from 'react'
import Head from 'next/head'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import {
   Box,
   Flex,
   Button,
   Container,
   Grid,
   Heading,
   Text,
   Link
} from '@chakra-ui/react'
import TextLoop from 'react-text-loop'
let prefix = '/westcic-next'

export default function Home(props) {
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
               top="50px"
               fontSize={'20px'}
               zIndex={'1'}
               display={'flex'}
               direction={'row'}
               justify={{ base: 'center', md: 'center' }}
               align={{ base: 'center', md: 'center' }}
               color="white"
               variant="outline"
               borderRadius={'30'}
               transition="all 200ms ease"
               m={['100px', '200px', '500px', '500px']}
               _hover={{
                  boxShadow: 'sm',
                  transform: 'scale(1.05)'
               }}
               width="180px"
               height="50px"
            >
               Learn more!
            </Button>
            <Heading
               color="white"
               as="h1"
               size="4xl"
               m="50px"
               position={'absolute'}
               top="250px"
               zIndex={'1'}
               display={'flex'}
               direction={'row'}
               justify={{ base: 'center', md: 'space-between' }}
               align={{ base: 'center', md: 'center' }}
            >
               <TextLoop
                  children={['Engineering', 'Innovating', 'Designing']}
               />
               <span>&nbsp;</span>a
            </Heading>
            <Heading
               color="white"
               as="h1"
               size="4xl"
               m="50px"
               position={'absolute'}
               top="320px"
               zIndex={'1'}
               display={'flex'}
               direction={'row'}
               justify={{ base: 'center', md: 'space-between' }}
               align={{ base: 'center', md: 'center' }}
            >
               sustainable world
            </Heading>
            <Text
               color="white"
               as="h1"
               fontSize={'20px'}
               ml="50px"
               position={'absolute'}
               top="450px"
               zIndex={'1'}
               display={'flex'}
               direction={'row'}
               justify={{ base: 'center', md: 'space-between' }}
               align={{ base: 'center', md: 'center' }}
            >
               Human design at the center of all things
            </Text>
         </Box>
      </Fragment>
   )
}
