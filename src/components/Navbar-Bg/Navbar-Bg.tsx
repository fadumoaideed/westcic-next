/* eslint-disable react/no-children-prop */
import {
   Box,
   Flex,
   Text,
   Heading,
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
import { TextLoop } from 'react-text-loop-next'

export default function WithSubnavigation() {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Box
         className="navbar"
         bgImage="url('https://res.cloudinary.com/westcic/image/upload/v1657530660/cht-bg_bhurdl.png')"
         backgroundSize={['cover', 'cover', 'cover', '100%']}
         backgroundPosition={['left top', 'left top', 'left top', 'left top']}
         bgRepeat="no-repeat"
         minH={['800px', '800px', '800px', '800px', '900px']}
         minW={['100%']}
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
               top="-10px"
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
               mr={10}
               ml="5px"
            >
               <Stack display={{ base: 'none', md: 'inline-flex' }}>
                  <DesktopNav />
               </Stack>
            </Stack>
         </Flex>
         <Box
            bg="teal.900"
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

         <Stack className="text-loop-button" mx={['30px', '50px']}>
            <Box
               className="text-loop"
               position={'relative'}
               mx={'20px'}
               top={'100px'}
            >
               <Heading
                  color="white"
                  as="h1"
                  fontSize={['2.8rem', '4rem', '4.5rem', '7xl', '8xl']}
                  width={['300px', '400px', '500px', '800px', '1100px']}
               >
                  Sustainable innovation
               </Heading>

               <Heading
                  color="white"
                  as="h1"
                  fontSize={['2.8rem', '4rem', '4.5rem', '7xl', '8xl']}
                  width={['300px', '400px', '500px', '800px', '1100px']}
               >
                  inclusive of<span>&nbsp;</span>
                  <TextLoop
                     children={[
                        'gender',
                        'ethnicity',
                        'age',
                        'disability',
                        'sexuality',
                        'religion',
                        'income'
                     ]}
                  />
               </Heading>

               <Text
                  fontFamily={'Arial'}
                  color="white"
                  as="h1"
                  mt="10px"
                  mx="2px"
                  fontSize={['lg', '1.4rem', '1.5rem', '3xl']}
                  width={['300px', '550px', '550px', '800px']}
               >
                  Engineering with a human-centred design approach
               </Text>
            </Box>
            <Flex
               className="learn-more"
               direction={'row'}
               align={'center'}
               // mx={['20px', '100px']}
               position={'relative'}
               // width='50%'
               top={'150px'}
               // pl={["50px","150px"]}
            >
               {/* <Button
                  mx={'50px'}
                  fontSize={'xl'}
                  color="white"
                  variant="outline"
                  borderRadius={'30'}
                  transition="all 200ms ease"
                  _hover={{
                     boxShadow: 'lg',
                     bg: 'rgba(0, 0, 0, 0.2)',
                     transform: 'scale(1.05)'
                  }}
                  width="180px"
                  height="50px"
               >
                  Learn more!
               </Button> */}
            </Flex>
         </Stack>
         <Flex
            className="chevron"
            w={'100%'}
            display={'flex'}
            justifyContent="space-around"
            position={'absolute'}
            top={['700px', '700px', '700px', '700px', '800px']}
         >
            <Link href="#section1">
               <Icon
                  w={50}
                  h={50}
                  color={'white'}
                  as={ChevronDownIcon}
                  _hover={{
                     transition: 'all 0.6s ease-out',
                     transform: 'rotate(180deg)'
                  }}
               />
            </Link>
         </Flex>
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
                        fontWeight={'bold'}
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
