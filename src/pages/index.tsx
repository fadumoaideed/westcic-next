// import Head from 'next/head'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import { Box } from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'
// import Impact from 'components/Impact/Impact'
import Award from 'components/Awards/Awards'
import Resources from 'components/Resources/Resources'
import Footer from 'components/Footer/Footer'
import Project from 'components/Rivet1/Rivet'

//TODO: Work needed for MVP
// - add hyphen between human and centered
// - add email link (nodemailer form?) with auth
// - add images and graphics
// - find replacement for cloundinary
// - reduce size of navbar in mobile mode and desktop (use Window.innerHeight)
// - increase size of navbar header in mobile mode
// - Reduce spacing between clean energy and africa
// - change font, weight and background colour of navbar dropdown
// - rename navbar to one page style

export default function Home() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Box className="home-container">
         <NavBar />
         <Feature />
         {/* <Impact /> */}
         <Project />
         <Award />
         <Resources />
         <Footer />
         {/* <Button _css={button}>Hello</Button> */}
      </Box>
   )
}
