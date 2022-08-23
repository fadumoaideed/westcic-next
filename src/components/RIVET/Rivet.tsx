// Why work with WEST to improve your innovation:
// 	- Broaden understanding of your target audience.
// 	- Improve the human experience of your innovation.
// Align your values with ethos-conscious client and collaborators.
import { useEffect, useState } from 'react'
import {
   Container,
   Stack,
   Flex,
   Box,
   Heading,
   Text,
   Image,
   List,
   ListItem,
   ListIcon,
   Link
} from '@chakra-ui/react'
import { IoMdSquare } from 'react-icons/io'

export const Rivet = () => {
   const [mobile, setMobile] = useState<boolean>(false)

   useEffect(() => {
      const updateMobile = () => {
         setMobile(window.innerWidth < 850 ? true : false)
      }

      updateMobile()
      window.addEventListener('resize', updateMobile)
      return () => {
         window.removeEventListener('resize', updateMobile)
      }
   }, [])
   return typeof mobile !== 'undefined' ? (
      mobile ? (
         <MobileViewRivet />
      ) : (
         <DesktopViewRivet />
      )
   ) : null
}
export default Rivet

const DesktopViewRivet = () => {
   return (
      <Container maxW={'8xl'}>
         <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            mx="45px"
            mb="100px"
         >
            <Flex
               flex={1}
               justify={'center'}
               align={'center'}
               position={'relative'}
               w={'full'}
            >
               <Box
                  position={'relative'}
                  boxShadow={'2xl'}
                  height={'full'}
                  overflow={'hidden'}
               >
                  <Image
                     alt={'feature image'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1661271701/20201127_104706_copy_1_d4syof.png'
                     }
                     objectFit={'cover'}
                     align={'center'}
                     w={'100%'}
                     h={'100%'}
                     _hover={{
                        transform: 'scale(1.1)',
                        transition: '0.5s ease-out'
                     }}
                  />
               </Box>
            </Flex>
            <Stack flex={1}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['5xl', '6xl']}
                  pb="20px"
               >
                  <Text
                     as={'span'}
                     position={'relative'}
                     _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'teal.400',
                        zIndex: -1
                     }}
                  >
                     Clean Energy
                  </Text>
                  <br />
                  <Text as={'span'} color={'teal.400'}>
                     Nigeria
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize="xl" pb="5px">
                  Sustainable introduction of bioenergy technology into off-grid
                  communities in rural communities using human centered design.
                  WEST worked on a UKRI-funded project in an international
                  consortium led by <span>&nbsp;</span>
                  <Link href="https://www.pyrogenesys.com">Pyrogensys Ltd</Link>
                  <span>&nbsp;</span>
                  to generate a woman-focussed study.
               </Text>
               <List
                  spacing={3}
                  color={'gray.500'}
                  fontSize="xl"
                  pl={'40px'}
                  pt={'5px'}
               >
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Understand and respect the eco-system of the community
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Mapped the dynamics of the community
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Implemented inclusive innovation through iterative design
                     processes
                  </ListItem>
               </List>
            </Stack>
         </Stack>
      </Container>
   )
}

const MobileViewRivet = () => {
   return (
      <Container maxW={'8xl'}>
         <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            mx="45px"
            mb="80px"
         >
            <Stack flex={1}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['5xl', '6xl']}
                  pb="20px"
               >
                  <Text
                     as={'span'}
                     position={'relative'}
                     _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'teal.400',
                        zIndex: -1
                     }}
                  >
                     Clean Energy
                  </Text>
                  <br />
                  <Text as={'span'} color={'teal.400'}>
                     Champion Finalists
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize="xl" pb="5px">
                  Sustainable introduction of bioenergy technology into off-grid
                  communities in rural communities using human centered design.
                  WEST worked on a UKRI-funded project in an international
                  consortium led by <span>&nbsp;</span>
                  <Link href="https://www.pyrogenesys.com">Pyrogensys Ltd</Link>
                  <span>&nbsp;</span>
                  to generate a woman-focussed study.
                  <List
                     spacing={3}
                     color={'gray.500'}
                     fontSize="xl"
                     pl={'40px'}
                     pt={'5px'}
                  >
                     <ListItem>
                        <ListIcon as={IoMdSquare} color="teal.500" />
                        Understand and respect the eco-system of the community
                     </ListItem>
                     <ListItem>
                        <ListIcon as={IoMdSquare} color="teal.500" />
                        Mapped the dynamics of the community
                     </ListItem>
                     <ListItem>
                        <ListIcon as={IoMdSquare} color="teal.500" />
                        Implemented inclusive innovation through iterative
                        design processes
                     </ListItem>
                  </List>
               </Text>
            </Stack>
            <Flex
               flex={1}
               justify={'center'}
               align={'center'}
               position={'relative'}
               w={'full'}
            >
               <Box
                  position={'relative'}
                  boxShadow={'2xl'}
                  height={'full'}
                  overflow={'hidden'}
               >
                  <Image
                     alt={'feature image'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1661271701/20201127_104706_copy_1_d4syof.png'
                     }
                     objectFit={'cover'}
                     align={'center'}
                     w={'100%'}
                     h={'100%'}
                     _hover={{
                        transform: 'scale(1.1)',
                        transition: '0.5s ease-out'
                     }}
                  />
               </Box>
            </Flex>
         </Stack>
      </Container>
   )
}
