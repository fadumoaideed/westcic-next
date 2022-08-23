// import Head from 'next/head'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import { Box } from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'
import Impact from 'components/Impact/Impact'
import Rivet from '../components/Rivet/Rivet'
import Award from 'components/Awards/Awards'
import Resources from 'components/Resources/Resources'
import Footer from 'components/Footer/Footer'

// const prefix = '/westcic-next'

export default function Home() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Box className="home-container">
         <NavBar />
         <Feature />
         <Impact />
         <Rivet />
         <Award />
         <Resources />
         <Footer />

         {/* <Button _css={button}>Hello</Button> */}
      </Box>
   )
}
