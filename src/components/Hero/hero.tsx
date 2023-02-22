import {
   Box,
   Container,
   Flex,
   Heading,
   Spacer,
   Stack,
   Text
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { TextLoop } from 'react-text-loop-next'

function Hero() {
   return (
      <Flex
         className="hero-container"
         display="flex"
         flexDirection={['column', 'row']}
         mx={['50px', '20px']}
         justify={['flex-start', 'space-between']}
      >
         <Flex
            className="hero-heading"
            display={'flex'}
            flexDirection="column"
            pl={['30px', '40px']}
            // border={'solid'}
            pt={['30px', '50px']}
         >
            <Heading
               color={'teal.600'}
               fontSize={['2.8rem', '3.6rem', '3.8rem', '4.3rem', '7xl']}
            >
               Sustainable innovation
            </Heading>

            <Heading
               color={'teal.600'}
               fontSize={['2.8rem', '3.6rem', '3.8rem', '4.3rem', '7xl']}
            >
               inclusive of<span>&nbsp;</span>
               <TextLoop
                  // eslint-disable-next-line react/no-children-prop
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
               color={'teal.400'}
               mx="2px"
               mt={['5px', '10px', '15px', '30px']}
               fontSize={['1.4rem', '1.6rem', '1.5rem', '1.75rem']}
            >
               Engineering with a human-centred design approach
            </Text>
         </Flex>
         <Flex className="hero-illustration" pr={['0px', '25px', '50px']}>
            <Image
               alt={'Hero Image'}
               fit={'cover'}
               w={['auto', '300px', '400px', '600px', '700px']}
               h={'auto'}
               src={
                  'https://res.cloudinary.com/westcic/image/upload/v1676844583/Untitled_8.vectornator_tklwqt.png'
               }
            />
         </Flex>
      </Flex>
   )
}

export default Hero
