import React from 'react'
import {
   Flex,
   Box,
   Text,
   ButtonGroup,
   IconButton,
   Divider
} from '@chakra-ui/react'
import {
   FaCentercode,
   FaFacebook,
   FaInstagram,
   FaLinkedin,
   FaTwitter
} from 'react-icons/fa'

function Footer() {
   return (
      <Box
         as="footer"
         justifyContent={'space-between'}
         position="fixed"
         left="0"
         bottom="0"
         width="100%"
         bg={['white', 'white', 'white', 'white']} //sizes sm md lg xl
         color={['white', 'white', 'white', 'white']}
      >
         <Flex alignItems={'center'} justifyContent={'space-around'}>
            <ButtonGroup variant="solid" align="center">
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin fontSize="30px" />}
                  color="brand.800"
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook fontSize="30px" />}
                  color="brand.800"
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter fontSize="30px" />}
                  color="brand.800"
               />
               <IconButton
                  as="a"
                  m="2"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram fontSize="30px" />}
                  color="brand.800"
               />
            </ButtonGroup>
         </Flex>
         <Divider /> //TODO: fix this
         <Text fontSize="sm" align="center" m="3" color="black">
            WEST (Women in Engineering, Science and Technology) C.I.C.
         </Text>
         <Text align="center" m="3" fontSize="x-small" color="black">
            All rights reserved. &copy; {new Date().getFullYear()}{' '}
         </Text>
      </Box>
   )
}

export default Footer
