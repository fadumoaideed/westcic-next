import { Flex, Heading, Text } from '@chakra-ui/layout'
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
         justify={['flex-start', 'space-between']}
      >
         <Flex
            className="hero-heading"
            display={'flex'}
            flexDirection="column"
            pl={['10px', '0px', '0px', '30px']}
            pr={['0px', '0px', '20px']}
            pt={['30px', '40px']}
         >
            <Heading
               color={'teal.800'}
               fontSize={['3.5rem', '3.8rem', '4.3rem', '6.8xl']}
            >
               Sustainable innovation
            </Heading>

            <Heading
               color={'teal.800'}
               fontSize={['3.5rem', '3.8rem', '4.3rem', '6.8xl']}
               minWidth={'400px'}
            >
               inclusive of<span>&nbsp;</span>
               <TextAnimation />
            </Heading>

            <Text
               fontFamily={'Arial'}
               color={'teal.800'}
               mx="2px"
               mt={['5px', '10px', '15px', '30px']}
               fontSize={['1.2rem', '1.4rem', '1.5rem', '1.6rem', '1.75rem']}
            >
               Engineering with a human-centred design approach
            </Text>
         </Flex>

         <Flex
            className="hero-illustration"
            alignSelf={'center'}
            mx={['30px', '0px']}
         >
            <Image
               alt={'Hero Image'}
               fit={'fill'}
               // h={['300px', '400px', '600px', '700px']}
               w={'auto'}
               h={'auto'}
               minH={'450px'}
               minW={'450px'}
               src={
                  'https://res.cloudinary.com/westcic/image/upload/v1680883001/hero_lshqqs.png'
               }
            />
         </Flex>
      </Flex>
   )
}

export default Hero
