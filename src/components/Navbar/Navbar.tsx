import {
   Box,
   Flex,
   Text,
   IconButton,
   Button,
   Stack,
   Collapse,
   Icon,
   Link,
   Popover,
   PopoverTrigger,
   PopoverContent,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure
} from '@chakra-ui/react'
import {
   HamburgerIcon,
   CloseIcon,
   ChevronDownIcon,
   ChevronRightIcon
} from '@chakra-ui/icons'
import { Logo } from '../Logo/logo'

export default function WithSubnavigation() {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Box className="navigation">
         <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}
         >
            <Flex
               flex={{ base: 1, md: 'auto' }}
               ml={{ base: -1 }}
               display={{ base: 'flex', md: 'none' }}
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
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
               />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
               <Link href="/">
                  <Logo />
               </Link>

               {/* <Flex display={{ base: 'none', md: 'inline-flex' }} ml={10}>
                  <DesktopNav />
               </Flex> */}
            </Flex>

            <Stack
               flex={{ base: 1, md: 3 }}
               justify={'flex-end'}
               direction={'row'}
               spacing={5}
               className="navbar-links"
               pe={20}
            >
               <Stack display={{ base: 'none', md: 'inline-flex' }}>
                  <DesktopNav />
               </Stack>
            </Stack>
         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav />
         </Collapse>
      </Box>
   )
}

const DesktopNav = () => {
   const linkColor = useColorModeValue('gray.600', 'gray.200')
   const linkHoverColor = useColorModeValue('gray.800', 'white')
   const popoverContentBgColor = useColorModeValue('white', 'gray.800')

   return (
      <Stack direction={'row'} spacing={55}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={'hover'} placement={'bottom-start'}>
                  <PopoverTrigger>
                     <Link
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                           textDecoration: 'underline',
                           textDecorationColor: 'teal',
                           textDecorationStyle: 'solid',
                           textDecorationThickness: '3px',
                           textUnderlineOffset: '8px',
                           color: linkHoverColor
                        }}
                     >
                        {navItem.label}
                     </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={'xl'}
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
   return (
      <Link
         href={href}
         role={'group'}
         display={'block'}
         p={2}
         rounded={'md'}
         _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}
      >
         <Stack direction={'row'} align={'center'}>
            <Box>
               <Text
                  transition={'all .3s ease'}
                  _groupHover={{ color: 'teal.900' }}
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
               <Icon color={'teal.800'} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
         </Stack>
      </Link>
   )
}

const MobileNav = () => {
   return (
      <Stack
         bg={useColorModeValue('white', 'gray.800')}
         p={4}
         display={{ md: 'none' }}
      >
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
            <Text
               fontWeight={400}
               color={useColorModeValue('gray.600', 'gray.200')}
            >
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
               />
            )}
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
               // borderStyle={'solid'} //line hover underneath
               borderColor={useColorModeValue('gray.200', 'gray.700')}
               align={'start'}
            >
               {children &&
                  children.map((child) => (
                     <Link key={child.label} py={2} href={child.href}>
                        {child.label}
                     </Link>
                  ))}
            </Stack>
         </Collapse>
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
      label: 'Home',
      href: '/'
   },
   {
      label: 'Projects',
      children: [
         {
            label: 'Project 1',
            subLabel: 'lorem ipsum',
            href: '#'
         },
         {
            label: 'Project 2',
            subLabel: 'lorem ipsum',
            href: '#'
         }
      ]
      // href: 'projects'
   },
   {
      label: 'Services',
      href: 'services'
   },
   {
      label: 'About',
      href: 'about'
   },
   {
      label: 'Contact',
      href: 'contact'
   }
]
