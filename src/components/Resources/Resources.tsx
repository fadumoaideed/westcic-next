import {
   Box,
   Flex,
   Heading,
   Link,
   SimpleGrid,
   Image,
   Text
} from '@chakra-ui/react'

export default function Resources() {
   return (
      <>
         <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={['5xl', '6xl']}
            align="center"
            py="40px"
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
               Explore More{' '}
            </Text>
         </Heading>
         <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={10}
            py="10px"
            px={['50px', '50px', '50px', '50px', '100px']}
         >
            <Box height="auto" overflow="hidden">
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
            <Box height="auto" overflow="hidden">
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
            <Box height="auto" overflow="hidden">
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
      </>
   )
}
