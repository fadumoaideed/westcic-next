import React from 'react'
import Head from 'next/head'
import FeatureStack from '../components/Feature/Feature'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import {
   Box,
   Button,
   Container,
   Flex,
   Image,
   SimpleGrid,
   useStyleConfig
} from '@chakra-ui/react'

const prefix = '/westcic-next'

export default function Home() {
   const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Box className="home-container">
         <NavBar />
         <Container id="section1" maxW={'1600px'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={'10'} px="30px">
               <FeatureStack />
               <Flex overflow="hidden">
                  <Image
                     alt={'feature image'}
                     src={
                        'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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
         <Button _css={button}>Hello</Button>
      </Box>
   )
}
