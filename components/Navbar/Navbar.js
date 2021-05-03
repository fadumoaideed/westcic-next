import { useState } from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/Link'

const MenuItem = ({ children, isLast, to = '/' }) => {
   return (
      <Text
         mb={{ base: isLast ? 0 : 8, sm: 0 }}
         mr={{ base: 0, sm: isLast ? 0 : 8 }}
         display="block"
      >
         <Link href={to}>{children}</Link>
      </Text>
   )
}

const Navbar = (props) => {
   const [show, setShow] = useState(false)
   const toggleMenu = () => setShow(!show)
   return (
      <Flex
         mb={8}
         p={8}
         as="nav"
         align="center"
         justify="space-between"
         wrap="wrap"
         w="100%"
         bg={['brand.900', 'brand.900', 'white', 'white']}
         color={['white', 'white', 'brand.900', 'brand.900']}
      >
         <Box w="200px">
            <Link href="/" fontSize="lg" fontWeight="bold">
               LOGO
            </Link>
         </Box>

         <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
            {show ? <CloseIcon /> : <HamburgerIcon />}
         </Box>

         <Box
            display={{ base: show ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
         >
            <Flex
               align="right"
               justify={['center', 'space-between', 'flex-end', 'flex-end']}
               direction={['column', 'row', 'row', 'row']}
               pt={[4, 4, 0, 0]}
            >
               <MenuItem to="/services">Services</MenuItem>
               <MenuItem to="/about">About</MenuItem>
               <MenuItem to="/contact-us" isLast>
                  Contact
               </MenuItem>
            </Flex>
         </Box>
      </Flex>
   )
}

export default Navbar
