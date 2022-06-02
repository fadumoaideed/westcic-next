import { Box, Flex, Heading, Link, SimpleGrid, Image } from '@chakra-ui/react'

export default function Resources() {
   return (
      <>
         <Heading fontSize={'5xl'} align="center" pt="40px">
            Find Out More
         </Heading>
         <SimpleGrid
            columns={1}
            spacing={10}
            py="20px"
            px={['30px', '40px', '70px', '150px', '300px']}
         >
            <Box bg="tomato" height="450px" overflow="hidden">
               <Link href="#">
                  <Flex overflow="hidden">
                     <Image
                        alt={'gendered innovations image'}
                        src={'#'}
                        objectFit={'cover'}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
         </SimpleGrid>
         <SimpleGrid
            columns={[1, 2, 2]}
            spacing={10}
            py="20px"
            px={['30px', '40px', '70px', '150px', '300px']}
         >
            <Box bg="black" height="auto" overflow="hidden">
               <Link href="#">
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/v1651936496/tedx-talk_c6ttph.png'
                        }
                        objectFit={'cover'}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           bg: 'rgba(0,0,0, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
            <Box bg="tomato" height="auto" overflow="hidden">
               <Link href="#">
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/v1651929597/gender-bias-terminology-1_y5d5nr.png'
                        }
                        objectFit={'cover'}
                        backgroundPosition={['center']}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           bg: 'rgba(0,0,0, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
         </SimpleGrid>
         <SimpleGrid
            columns={1}
            spacing={10}
            py="20px"
            px={['30px', '40px', '70px', '150px', '300px']}
         >
            <Box bg="tomato" height="250px" overflow="hidden">
               <Link href="#"></Link>
               <Flex overflow="hidden">
                  <Image
                     alt={'Aston university affiliate society'}
                     src={''}
                     objectFit={'cover'}
                     _hover={{
                        transform: 'scale(1.1)',
                        transition: '0.5s ease-out'
                     }}
                  />
               </Flex>
            </Box>
         </SimpleGrid>
      </>
   )
}
