import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import React from 'react'
import DynamicComponentWithNoSSR from '../components/Carousel/ssr'

export default function Home() {
   return (
      <Box>
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Box mr="150px" ml="150px">
            <DynamicComponentWithNoSSR />
         </Box>
      </Box>
   )
}
