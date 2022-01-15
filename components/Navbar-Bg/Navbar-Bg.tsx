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
import {Logo} from "../Logo/logo"


export default function WithSubnavigation() {
   const { isOpen, onToggle } = useDisclosure()

   return (
      <Box className="navigation"             
      // bgImage="url('https://res.cloudinary.com/westcic/image/upload/v1641419941/Screenshot_2022-01-05_at_21.57.48_ku6iss.png')"   
      backgroundSize={['cover','cover','cover',"100%"]}    
      backgroundPosition={['left top','left top','left top','left top']}    
      bgRepeat="no-repeat" 
      bgColor={'green'}
      minH={'800px'}
      >
         <Flex

            color={'white'}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            // borderBottom={1}
            // borderStyle={'solid'}
            // borderColor={'teal.900'}
            // borderBottomWidth={'0.1px'}
            align={'start'}
            pt={'10'}
            
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
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} pl='50px'>
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
               <Stack display={{ base: 'none', md: 'inline-flex' }}  >         <DesktopNav /></Stack>
   
            </Stack>
         </Flex>
         <Box bg="transparent"                
               // justify={'flex-start'}
               w={"100vw"}
               direction={'row'}> <Collapse in={isOpen} animateOpacity >
               <MobileNav />
            </Collapse></Box>
           
         
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
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'white'}
                        _hover={{
                           textDecoration: 'underline',
                           textDecorationColor:"teal",
                           textDecorationStyle: "solid",
                           textDecorationThickness:"3px",
                           textUnderlineOffset: "8px",
                           color: 'white'
                        }}
                     >
                        {navItem.label}
                     </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={'teal.600'}
                        p={4}
                        rounded={'xl'}
                        minW={'sm'}
                     >
                        <Stack >
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

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => { // Dropdown list for subpages
   return (
      <Link
         href={href}
         role={'group'}
         display={'block'}
         p={2}
         rounded={'md'}
         _hover={{ bg: "teal.50" }}
      >
         <Stack direction={'row'} align={'center'} >
            <Box >
               <Text
                  transition={'all .3s ease'}
                  _groupHover={{ color: 'teal.900' }}
                  fontWeight={500}
                  fontSize={"lg"}
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
         bg={'transparent'}
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
      <Stack spacing={4} onClick={children && onToggle} >
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
               color={'white'}
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
                  color='white'
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
               borderColor={'purple'}
               align={'start'}
               color={'white'}

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
   label: string;
   subLabel?: string;
   children?: Array<NavItem>;
   href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
   {
      label: 'Home',
      href: '/'
   },,{
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
      ],
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
