import { Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import TextAnimation from 'components/TextAnimation/TextAnimation'

function Hero() {
   // const button = useStyleConfig('Button', { variant: 'small' })

   return (
      <Flex
         className="hero-container"
         display="flex"
         flexDirection={['column', 'row']}
         mx={['10px', '35px', '50px', '20px']}
         justify={['flex-start', 'space-around', 'flex-start', 'space-around']}
         mb={'35px'}
      >
         <Flex
            className="hero-heading"
            display={'flex'}
            flexDirection="column"
            pl={['10px', '0px', '0px', '30px']}
            pr={['0px', '0px', '20px']}
            pt={['30px', '40px']}
            w={['auto', '350px', 'auto']}
         >
            <Flex flexDirection={['column', 'row']}>
               <Heading
                  color={'teal.600'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
               >
                  Sustainable&nbsp;
               </Heading>
               <Heading
                  color={'teal.600'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
                  background={'-webkit-linear-gradient(0deg, #2ebf91, #8360c3)'}
                  backgroundClip={'text'}
               >
                  innovation
               </Heading>
            </Flex>

            <SimpleGrid row={[1, 2]} spacing={0}>
               <Heading
                  color={'teal.600'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
               >
                  inclusive of <TextAnimation />
               </Heading>
               <Heading
                  color={'teal.600'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
               ></Heading>
            </SimpleGrid>
            <Text
               fontFamily={'Arial'}
               color={'teal.600'}
               mx="2px"
               mt={['15px', '10px', '15px', '30px']}
               mb={['50px', '30px']}
               fontSize={['1.2rem', '1.4rem', '1.5rem', '1.6rem', '1.70rem']}
               w={['auto', 'auto', '400px', 'auto']}
            >
               Engineering with a human-centered design approach
            </Text>
            <Text
               mb={'15px'}
               fontWeight={'bold'}
               color={'teal.800'}
               fontSize={'xl'}
            >
               Upcoming events
            </Text>
            <Link
               href="https://www.eventbrite.co.uk/e/stem-sisterhood-our-journey-tickets-647250111507?aff=ebdshpsearchautocomplete&keep_tld=1"
               style={{ textDecoration: 'none' }}
               maxWidth={'600px'}
               mb={['50px']}
            >
               <Flex
                  display="flex"
                  flexDirection={['row']}
                  boxShadow={'md'}
                  mb={'0px'}
               >
                  <Flex
                     display={'flex'}
                     flexDirection={'row'}
                     alignItems={'center'}
                     justifyContent={'center'}
                     borderRadius={'3px 0px 0px 3px '}
                     fontFamily={'cursive'}
                     bg={'#f9a7b0'}
                     fontSize={['4xl', '5xl']}
                     color={'white'}
                     fontWeight={'normal'}
                     h={'90px'}
                     w={'90px'}
                     minWidth={'60px'}
                     minHeight={'100px'}
                  >
                     <Text>6</Text> <Text as={'sup'}>th</Text>
                  </Flex>
                  <Flex
                     flexDirection={'column'}
                     alignItems={'flex-start'}
                     pl={'10px'}
                  >
                     <Text
                        color={'teal.800'}
                        pl={'2px'}
                        fontSize={'xl'}
                        fontWeight={'semibold'}
                     >
                        July 2023
                     </Text>
                     <Text color={'teal.700'}>
                        STEM Sisterhood is an online event that highlights the
                        importance of networks of women
                     </Text>
                  </Flex>
               </Flex>
            </Link>
         </Flex>

         <Flex className="hero-illustration">
            <Image
               alt={'Hero Image'}
               alignSelf={'center'}
               fit={'fill'}
               w={['auto', '300px', '400px', '600px', '600px']}
               h={'auto'}
               src={
                  'https://res.cloudinary.com/westcic/image/upload/v1680883001/hero_lshqqs.png'
               }
            />
         </Flex>
      </Flex>
   )
}

export default Hero
