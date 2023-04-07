/* eslint-disable react/no-children-prop */
import {
   Box,
   Flex,
   Text,
   IconButton,
   Stack,
   Collapse,
   Icon,
   Link,
   Popover,
   PopoverTrigger,
   PopoverContent,
   useDisclosure,
   Divider
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Logo } from '../Logo/logo'

export default function Navigation() {
   const { isOpen, onToggle } = useDisclosure()
   return (
      <Box className="navbar">
         <Flex
            className="logo-nav-links"
            color={'white'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 2 }}
            align={'start'}
            pt={'10'}
         >
            <Flex
               flex={{ base: 1, md: 'auto' }}
               ml={{ base: 10 }}
               display={{ base: 'flex', md: 'none' }}
               alignSelf="center"
               className="mobile-dropdown-tab"
            >
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? (
                        <CloseIcon w={5} h={5} />
                     ) : (
                        <HamburgerIcon w={7} h={7} />
                     )
                  }
                  variant={'ghost'}
                  color={'black'}
                  aria-label={'Toggle Navigation'}
               />
            </Flex>
            <Flex className="logo">
               <Link
                  href="/"
                  flex={{ base: 1 }}
                  justify={{ base: 'center', md: 'start' }}
                  pl="50px"
                  top="-10px"
               >
                  <Logo />
               </Link>
            </Flex>

            <Stack
               flex={{ base: 1, md: 3 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={5}
               className="navbar-links"
               alignSelf={'flex-start'}
               mr={10}
               ml="10px"
               pt="10px"
            >
               <Stack display={{ base: 'none', md: 'inline-flex' }}>
                  <DesktopNav />
               </Stack>
            </Stack>
         </Flex>
         <Box
            className="mobile-navbar-dropdown"
            bg="white"
            w={'100%'}
            direction={'row'}
            position={'absolute'}
            pl="30px"
            boxShadow={'lg'}
         >
            <Collapse in={isOpen} animateOpacity>
               <MobileNav />
            </Collapse>
         </Box>
      </Box>
   )
}

const DesktopNav = () => {
   return (
      <Stack direction={'row'} spacing={55}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                     <Link
                        p={5}
                        href={navItem.href ?? '#'}
                        fontSize={'lg'}
                        fontWeight={'semibold'}
                        color="teal.800"
                        _hover={{
                           textDecoration: 'underline',
                           textDecorationColor: 'white',
                           textDecorationStyle: 'solid',
                           textDecorationThickness: '3px',
                           textUnderlineOffset: '8px'
                        }}
                     >
                        {navItem.label}
                     </Link>
                  </PopoverTrigger>

                  {/* {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={'yellow'}
                        p={4}
                        rounded={'sm'}
                        minW={'sm'}
                     >
                        <Stack>
                           {navItem.children.map((child) => (
                              <DesktopSubNav key={child.label} {...child} />
                           ))}
                        </Stack>
                     </PopoverContent>
                  )} */}
               </Popover>
            </Box>
         ))}
      </Stack>
   )
}

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//    // Dropdown list for sub-pages
//    return (
//       <Link
//          href={href}
//          role={'group'}
//          display={'block'}
//          p={2}
//          rounded={'md'}
//          _hover={{ bg: 'transparent' }}
//       >
//          <Stack direction={'row'} align={'center'}>
//             <Box>
//                <Text
//                   transition={'all .3s ease'}
//                   fontWeight={500}
//                   fontSize={'lg'}
//                >
//                   {label}
//                </Text>
//                <Text fontSize={'sm'}>{subLabel}</Text>
//             </Box>
//             <Flex
//                transition={'all .3s ease'}
//                transform={'translateX(-10px)'}
//                opacity={0}
//                _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
//                justify={'flex-end'}
//                align={'center'}
//                flex={1}
//             >
//                <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
//             </Flex>
//          </Stack>
//       </Link>
//    )
// }

const MobileNav = () => {
   return (
      <Stack bg={'transparent'} p={4} display={{ md: 'none' }}>
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   )
}

const MobileNavItem = ({ label, href }: NavItem) => {
   return (
      <Stack spacing={4}>
         <Flex
            className="mobile-dropdown-text-tabs"
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
               textDecoration: 'none',
               background: '#CBD5E0'
            }}
            flexWrap="wrap"
         >
            <Text
               fontSize={['sm', 'md']}
               fontWeight={'semibold'}
               color={'teal.800'}
            >
               {label}
            </Text>
         </Flex>
      </Stack>
   )
}

interface NavItem {
   label: string
   subLabel?: string
   children?: Array<NavItem>
   href?: string
}

const NAV_ITEMS: Array<NavItem> = [
   {
      label: 'Outreach',
      href: '#outreach'
   },
   {
      label: 'Innovation',
      // children: [
      //    {
      //       label: 'Project 1',
      //       subLabel: 'lorem ipsum',
      //       href: '#'
      //    },
      // ]
      href: '#innovation'
   },

   {
      label: 'About',
      href: '#about'
   },
   {
      label: 'Contact',
      href: '#contact'
   }
]
