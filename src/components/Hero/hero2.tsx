import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { TextLoop } from 'react-text-loop-next'

function Hero() {
   return (
      <Stack
         className="hero-container"
         mx={['30px', '20px']}
         flexDirection="row"
      >
         <Stack
            className="text-loop"
            flex={1}
            bg="lilac"
            mt="20px"
            pt="100px"
            pl="50px"
         >
            <Heading
               color={'teal.400'}
               fontSize={['2.8rem', '4rem', '4.5rem', '7xl']}
            >
               Sustainable innovation
            </Heading>

            <Heading
               color={'teal.400'}
               fontSize={['2.8rem', '4rem', '4.5rem', '7xl']}
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
               fontSize={['lg', '1.4rem', '1.5rem', '3xl']}
            >
               Engineering with a human-centred design approach
            </Text>
         </Stack>
         <Flex
            className="hero-image"
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
         >
            <Box position={'relative'} height={'full'} overflow={'hidden'}>
               <Image
                  alt={'hero-image'}
                  src={
                     'https://res.cloudinary.com/westcic/image/upload/v1676844583/Untitled_8.vectornator_tklwqt.png'
                  }
                  objectFit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
               />
            </Box>
         </Flex>
         {/* <Flex
       className="learn-more-button"
       direction={'row'}
       align={'center'}
       mx={['20px', '100px']}
       position={'relative'}
       width='50%'
       top={'150px'}
       pl={["50px","150px"]}
    >
       <Button
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
       </Button>
    </Flex> */}
      </Stack>
   )
}

export default Hero
