// import Head from 'next/head'
import Navigation from '../components/Navigation/navigation'
import { Box } from '@chakra-ui/react'
import Feature from 'components/Feature/Feature'
import Award from 'components/Awards/Awards'
import Resources from 'components/Resources/Resources'
import Footer from 'components/Footer/Footer'
import Project from 'components/Rivet1/Rivet'
import Hero from '../components/Hero/hero'
export default function Home() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Box className="home-container">
         <Navigation />
         <Hero />
         <Feature />
         <Project />
         <Award />
         <Resources />
         <Footer />
      </Box>
   )
}
