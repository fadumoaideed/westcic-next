import Navigation from '../components/0Navigation/navigation'
import { Box } from '@chakra-ui/react'
import Hero from '../components/1Hero/hero'
import Project from 'components/3LatestProject/LatestProject'
import Award from 'components/4Awards/Awards'
import Resources from 'components/5Resources/Resources'
import Footer from 'components/Footer/Footer'
// import Test from 'components/6Contact/test1'
import Head from 'next/head'

export default function Home() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <>
         <Head>
            <title>
               WEST C.I.C. Women in Engineering, Science and Technology
            </title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Box className="home-container">
            <Navigation />
            <Hero />
            <Project />
            <Award />
            <Resources />
            <Footer />
         </Box>
      </>
   )
}
