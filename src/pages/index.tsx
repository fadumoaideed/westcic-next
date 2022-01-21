import React, { Fragment } from 'react'
import Head from 'next/head'
import Feature from '../components/Feature/Feature'
import NavBar from '../components/Navbar-Bg/Navbar-Bg'
import {
   Box,
 
} from '@chakra-ui/react'
const prefix = '/westcic-next'

export default function Home() {
   return (
      <Box className="home-container">
         <NavBar />

         <Feature />
      </Box>
   )
}
