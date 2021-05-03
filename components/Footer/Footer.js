import { useState } from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import Link from 'next/Link'

import React from 'react'

function Footer() {
   return (
      <Flex as="nav" align="center" justify="space-between">
         <Box>
            <a href="https://www.facebook.com/westcic1">FB</a>
         </Box>
         <Box>
            <a href="https://www.twitter.com/westcic">Tw</a>
         </Box>
         <Box>
            <a href="https://www.instagram.com/westc.i.c">INsta</a>
         </Box>
      </Flex>
   )
}

export default Footer
