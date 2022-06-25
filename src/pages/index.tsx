import React from 'react'
import Head from 'next/head'
import Resources from 'components/Resources/Resources'
import Section1 from 'components/Section1/Section1'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Award from 'components/SplitScreen/SplitScreen'
import {
   Box,
   Container,
   Flex,
   Image,
   SimpleGrid,
   Stack,
   Text,
   Heading,
   useStyleConfig
} from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'
import { ParallaxBanner } from 'react-scroll-parallax'
import Rivet from 'components/RIVET/Rivet'
import Link from 'next/link'

const prefix = '/westcic-next'

export default function Home() {
   const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <>
         <Box className="home-container">
            <NavBar />
            <Feature />
            <Rivet />
            <Award />
            <Resources />

            {/* <Button _css={button}>Hello</Button> */}
         </Box>
      </>
   )
}
