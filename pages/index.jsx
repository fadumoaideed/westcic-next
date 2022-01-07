import React, { Fragment } from 'react'
import Head from 'next/head'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import { Box, Button } from '@chakra-ui/react'
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
            <Button variant={'solid'} size={'sm'}>
               Learn More!
            </Button>
         </Box>
      </Fragment>
   )
}
