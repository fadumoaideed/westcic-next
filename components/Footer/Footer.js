import Image from 'next/image'
import { useState } from 'react'
import {
   Flex,
   Box,
   Text,
   ButtonGroup,
   ButtonGroupProps,
   IconButton
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/Link'
import React from 'react'

function Footer() {
   return (
      <Box
         as="nav"
         justify="space-between"
         position="fixed"
         left="0"
         bottom="0"
         width="100%"
         bg={['brand.900', 'brand.900', 'white', 'white']}
         color={['white', 'white', 'brand.900', 'brand.900']}
      >
         <Flex
            display="flex"
            flexDirection="row"
            margin="5"
            align="right"
            alignItems="flex-end"
            justify="space-between"
         >
            <div style={{ width: 'auto' }}>
               <Image
                  src="/logo.png"
                  alt="WEST CIC Logo"
                  width={140}
                  height={100}
               />
            </div>

            <ButtonGroup variant="ghost" color="grey.500" {...ButtonGroupProps}>
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="30px" />}
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook fontSize="30px" />}
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="30px" />}
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram fontSize="30px" />}
               />
            </ButtonGroup>
         </Flex>
         <Text fontSize="sm" align="center" m="3">
            &copy; {new Date().getFullYear()} WEST (Women in Engineering,
            Science and Technology) C.I.C. , All rights reserved.
         </Text>
      </Box>
   )
}

export default Footer
