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
               Explore More
            </Text>
         </Heading>
         <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing={10}
            pt="10px"
            pb="30px"
            px={['50px', '50px', '50px', '50px', '70px']}
         >
            <Box>
               <Link href="#">
                  <Flex>
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_315/v1651936496/tedx-talk_c6ttph.png'
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
            <Link href="https://res.cloudinary.com/westcic/raw/upload/v1656191742/Dictionary_of_Gender_Bias_Terminology_1_pa0evf.pptx">
               <Box>
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_315/v1651929597/gender-bias-terminology-1_y5d5nr.png'
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
               </Box>
            </Link>

            <Box>
               <Link href="https://www.instagram.com/accounts/login/?next=/west_astonuni/">
                  <Flex overflow="hidden">
                     <Image
                        alt={'feature image'}
                        src={
                           'https://res.cloudinary.com/westcic/image/upload/c_scale,h_315/v1655896973/20190917_132722_ofqtnd.jpg'
                        }
                        objectFit={'cover'}
                        backgroundPosition={['center']}
                        _hover={{
                           transform: 'scale(1.1)',
                           transition: '0.5s ease-out',
                           backgroundColor: 'rgba(105,105,105, 0.9)'
                        }}
                     />
                  </Flex>
               </Link>
            </Box>
         </SimpleGrid>
      </>
   )
}
