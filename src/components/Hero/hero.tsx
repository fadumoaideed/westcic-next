import { Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout'
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
            <Heading
               color={'black'}
               fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
            >
               Sustainable innovation
            </Heading>
            <SimpleGrid row={[1, 2]} spacing={0}>
               <Heading
                  color={'black'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
               >
                  inclusive of <TextAnimation />
               </Heading>
               <Heading
                  color={'black'}
                  fontSize={['3.7rem', 'auto', 'auto', '6.8xl']}
               ></Heading>
            </SimpleGrid>
            <Text
               fontFamily={'Arial'}
               color={'teal.800'}
               mx="2px"
               mt={['15px', '10px', '15px', '30px']}
               mb={['30px']}
               fontSize={['1.2rem', '1.4rem', '1.5rem', '1.6rem', '1.75rem']}
               w={['auto', 'auto', '400px', 'auto']}
            >
               Engineering with a human-centred design approach
            </Text>
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
