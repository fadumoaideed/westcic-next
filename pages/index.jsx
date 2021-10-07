import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import React from 'react'
import DynamicComponentWithNoSSR from '../components/Carousel/ssr'

export default function Home() {
   return (
      <Box className="Home">
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Box mr={['0', '0', '0', '150px']} ml={['0', '0', '0', '150px']}>
            <DynamicComponentWithNoSSR />
         </Box>
      </Box>
   )
}
