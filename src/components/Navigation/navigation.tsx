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
   useDisclosure
} from '@chakra-ui/react'
import {
   HamburgerIcon,
   CloseIcon,
   ChevronDownIcon,
   ChevronRightIcon
} from '@chakra-ui/icons'
import { Logo } from '../Logo/logo'

export default function Navigation() {
   const { isOpen, onToggle } = useDisclosure()
   return (
      <Box
         className="navbar"
         // bgImage="url('https://res.cloudinary.com/westcic/image/upload/v1657530660/cht-bg_bhurdl.png')"
         backgroundSize={['cover', 'cover', 'cover', '100%']}
         backgroundPosition={['left top', 'left top', 'left top', 'left top']}
         bgRepeat="no-repeat"
         minW={['100%']}
         bgColor="white" // ! TODO: find white shade
      >
         <Flex
            className="logo-navlinks"
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
                        <CloseIcon w={3} h={3} />
                     ) : (
                        <HamburgerIcon w={5} h={5} />
                     )
                  }
                  variant={'outline'}
                  color={'black'}
                  aria-label={'Toggle Navigation'}
                  _hover={{ bg: 'none', transform: 'scale(1.05)' }}
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
               ml="5px"
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
            top="120px"
            zIndex={2}
            pl="30px"
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
                        fontSize={'xl'}
                        fontWeight={'bold'}
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

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={'teal.900'}
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
                  )}
               </Popover>
            </Box>
         ))}
      </Stack>
   )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
   // Dropdown list for subpages
   return (
      <Link
         href={href}
         role={'group'}
         display={'block'}
         p={2}
         rounded={'md'}
         _hover={{ bg: 'transparent' }}
      >
         <Stack direction={'row'} align={'center'}>
            <Box>
               <Text
                  transition={'all .3s ease'}
                  _groupHover={{ textDecoration: 'underline' }} //FIXME: style subnav
                  fontWeight={500}
                  fontSize={'lg'}
               >
                  {label}
               </Text>
               <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>
            <Flex
               transition={'all .3s ease'}
               transform={'translateX(-10px)'}
               opacity={0}
               _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
               justify={'flex-end'}
               align={'center'}
               flex={1}
            >
               <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
         </Stack>
      </Link>
   )
}

const MobileNav = () => {
   return (
      <Stack bg={'transparent'} p={4} display={{ md: 'none' }}>
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Stack spacing={4} onClick={children && onToggle}>
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
            <Text fontWeight={400} color={'black'}>
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
                  color="black"
               />
            )}
         </Flex>
         {/* SUB NAVIGATION NOT IN USE
         <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: '0!important' }}
         >
            <Stack
               className="sub-nav"
               mt={2}
               pl={4}
               borderLeft={1}
               align={'start'}
               color={'white'} //sub project
            >
               {children &&
                  children.map((child) => (
                     <Link key={child.label} py={2} href={child.href}>
                        {child.label}
                     </Link>
                  ))}
            </Stack>
         </Collapse> */}
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
