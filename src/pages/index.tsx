// import Head from 'next/head'
import Resources from 'components/Resources/Resources'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import Award from 'components/Awards/Awards'
import { Box, Flex } from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'
// import Rivet from 'components/RIVET/Rivet'
// import Link from 'next/link'
import Footer from 'components/Footer/Footer'

// const prefix = '/westcic-next'

export default function Home() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <>
         <Flex>
            <Box className="home-container">
               <NavBar />
               <Feature />
               {/* <Rivet /> */}
               <Award />
               <Resources />
               <Footer />
               {/* <Button _css={button}>Hello</Button> */}
            </Box>
         </Flex>
      </>
   )
}
