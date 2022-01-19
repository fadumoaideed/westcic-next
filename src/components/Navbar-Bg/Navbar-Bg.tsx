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
      <Box
         w="100vw" //FIXME: get rid of white bar on right
         className="navbar"
         bgImage="url('https://res.cloudinary.com/westcic/image/upload/v1642290864/1234cht-bg_m1axiw.png')"
         backgroundSize={['cover', 'cover', 'cover', '100%']}
         backgroundPosition={['left top', 'left top', 'left top', 'left top']}
         bgRepeat="no-repeat"
         minH={['800px', '800px', '800px', '800px', '900px']}
      >
         <Flex
            color={'white'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 2 }}
            // borderBottom={1}
            // borderStyle={'solid'}
            // borderColor={'teal.900'}
            // borderBottomWidth={'0.1px'}
            align={'start'}
            pt={'10'}
         >
            <Flex
               flex={{ base: 1, md: 'auto' }}
               ml={{ base: 10 }}
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
                  color={'white'}
                  aria-label={'Toggle Navigation'}
                  _hover={{ bg: 'none', transform: 'scale(1.05)' }}
               />
            </Flex>
            <Flex
               flex={{ base: 1 }}
               justify={{ base: 'center', md: 'start' }}
               pl="50px"
            >
               <Link href="/">
                  <Logo />
               </Link>
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
         <Box
            bg="#114546"
            // justify={'flex-start'}
            w={'100vw'}
            direction={'row'}
            position={'absolute'}
            top="88px"
            zIndex={2}
         >
            <Collapse in={isOpen} animateOpacity>
               <MobileNav />
            </Collapse>
         </Box>
         <Link href="#section1">
            <Icon
               position={'absolute'}
               top={['700px', '800px', '800px', '800px']}
               w={'100vw'}
               h={50}
               color={'white'}
               as={ChevronDownIcon}
               _hover={{
                  transition: 'all 0.6s ease-out',
                  transform: 'rotate(180deg)'
               }}
            />
         </Link>
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
                        fontSize={'16px'}
                        fontWeight={500}
                        color={'white'}
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
                        bg={'white'}
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
                  _groupHover={{ color: 'black', textDecoration: 'underline' }} //FIXME:navbar project
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
            <Text fontWeight={400} color={'white'}>
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={'all .25s ease-in-out'}
                  transform={isOpen ? 'rotate(180deg)' : ''}
                  w={6}
                  h={6}
                  color="white"
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
