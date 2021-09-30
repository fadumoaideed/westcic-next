import {
   Box,
   Flex,
   Text,
   IconButton,
   Stack,
   Collapse,
   Link,
   Popover,
   PopoverTrigger,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function WithSubnavigation() {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Box as="nav" p="0">
         <Flex
            className="nav"
            bg={['teal.800', 'teal.800', 'teal.800', 'teal.800']}
            color={['brand.800', 'brand.800', 'brand.800', 'brand.800']}
            minH={'80px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderStyle={'none'}
            align={'center'}
         >
            <Flex
               flex={{ base: 1, md: 'auto' }}
               ml={{ base: -2 }}
               display={{ base: 'flex', md: 'none' }}
            >
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? (
                        <CloseIcon w={3} h={3} color="white" />
                     ) : (
                        <HamburgerIcon
                           w={5}
                           h={5}
                           color="white"
                           outline="dark"
                        />
                     )
                  }
                  variant={'solid'}
                  aria-label={'Toggle Navigation'}
               />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
               <Text
                  textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                  fontFamily={'heading'}
                  color={[useColorModeValue('white', 'white')]}
               >
                  Logo
               </Text>

               <Flex display={{ base: 'center', md: 'flex' }} ml={10}>
                  <DesktopNav />
               </Flex>
            </Flex>
         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav />
         </Collapse>
      </Box>
   )
}

const DesktopNav = () => {
   return (
      <Stack direction={'row'} spacing={10} align="center">
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                     <Link
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'md'}
                        fontWeight={500}
                        color={useColorModeValue('white', 'white')}
                        _hover={{
                           textDecoration: 'none',
                           color: useColorModeValue('black', 'black'),
                           opacity: '0.3'
                        }}
                     >
                        {navItem.label}
                     </Link>
                  </PopoverTrigger>
               </Popover>
            </Box>
         ))}
      </Stack>
   )
}

const MobileNav = () => {
   return (
      <Stack
         bg={['brand.800', 'brand.800', 'brand.800', 'brand.800']}
         p={4}
         display={{ md: 'none' }}
      >
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   )
}

const MobileNavItem = ({ label, href }) => {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Stack spacing={4} onClick={onToggle}>
         <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
               textDecoration: 'none'
            }}
         >
            <Text
               fontWeight={600}
               color={useColorModeValue('brand.600', 'brand.200')}
            >
               {label}
            </Text>
         </Flex>

         <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: '0!important' }}
         >
            <Stack
               mt={2}
               pl={4}
               borderLeft={1}
               borderStyle={'solid'}
               borderColor={useColorModeValue('brand.200', 'brand.700')}
               align={'start'}
            ></Stack>
         </Collapse>
      </Stack>
   )
}

const NAV_ITEMS = [
   {
      label: 'Home',
      href: '/'
   },
   {
      label: 'Projects',
      href: 'projects'
   },
   {
      label: 'Services',
      href: 'services'
   },
   {
      label: 'Contact Us',
      href: 'contact-us'
   }
]
