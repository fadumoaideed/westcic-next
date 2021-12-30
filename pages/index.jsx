import React, { Fragment } from 'react'
import Head from 'next/head'
import {
   Box,
   Grid,
   Flex,
   GridItem,
   SimpleGrid,
   Stack,
   Heading,
   Text
} from '@chakra-ui/react'
import Carousel from '../components/Carousel/Carousel'
let prefix = '/westcic-next'
export default function Home() {
   return (
      <Fragment>
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
         </Head>

         <Box className="home-container">
            <Carousel />

            <SimpleGrid
               columns={[1, 2, 2]}
               // gap={25}
               // ps="20"
               // pe="20"
               // pt="4"
               pb="4"
            >
               <Box bg="grey" height="400px" align="center" className="box">
                  <Stack spacing={3} p="5">
                     <Heading
                        fontSize={['xl', '2xl', '5xl', '6xl']}
                        align="center"
                     >
                        Sustainable Innovation
                     </Heading>
                     <Text
                        fontSize={['2sm', '2md', '5md', '6md']}
                        variant="outline"
                        align="justify"
                        fontWeight="thin"
                        p="5"
                     >
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                     </Text>
                  </Stack>
               </Box>
               <Box bg="tomato" height="400px" align="center">
                  <Stack spacing={3} display="flex" align="center" p="5">
                     <Heading
                        fontSize={['xl', '2xl', '5xl', '6xl']}
                        align="center"
                     >
                        Sustainable Innovation
                     </Heading>
                     <Text
                        fontSize={['2sm', '2md', '5md', '6md']}
                        variant="outline"
                        align="justify"
                        fontWeight="thin"
                        p="5"
                     >
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                     </Text>
                  </Stack>
               </Box>
            </SimpleGrid>
         </Box>
      </Fragment>
   )
}
