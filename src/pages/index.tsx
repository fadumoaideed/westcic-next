import React from 'react'
import Head from 'next/head'
import Resources from 'components/Resources/Resources'
import Section1 from 'components/Section1/Section1'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import {
   Box,
   Container,
   Flex,
   Image,
   SimpleGrid,
   useStyleConfig
} from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'

const prefix = '/westcic-next'

export default function Home() {
   const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Box className="home-container">
         <NavBar />
         <Feature />

         <Container id="section1" maxW={'1600px'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={'20'} px="30px">
               <Section1 />
               <Flex overflow="hidden">
                  <Image
                     alt={'feature image'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1651922580/section1v1.1_o6zdqo.png'
                     }
                     objectFit={'cover'}
                     _hover={{
                        transform: 'scale(1.1)',
                        transition: '0.5s ease-out'
                     }}
                  />
               </Flex>
            </SimpleGrid>
         </Container>
         <Resources />

         {/* <Button _css={button}>Hello</Button> */}
      </Box>
   )
}
