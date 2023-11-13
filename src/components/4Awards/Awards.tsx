import {
   Container,
   Stack,
   Flex,
   Box,
   Heading,
   Text,
   Image
} from '@chakra-ui/react'

export default function Awards() {
   return (
      <Container maxW={'8xl'} className="award-container">
         <Stack
            align={'center'}
            spacing={'20px'}
            direction={['column', 'row']}
            mx={['10px', '20px', '30px', '45px']}
            my="60px"
         >
            <Stack flex={1} spacing={['10px', '20px']}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['5xl', '6xl']}
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
                     Innovation Awards/2023
                  </Text>
                  <br />
                  <Text as={'span'} color={'teal.400'}>
                     Winners
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize={['md', 'lg']} pl={'5px'}>
                  WEST C.I.C. were the winners of the Director&apos;s Award in
                  2023 and shortlisted as finalists for the Engineering
                  Innovation Chamption in the business sector in 2021 & 2022.
                  This is in recognition of their ongoing work in outreach and
                  innovation and a strong commitment to improve diversity in
                  STEM.
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
                     src={'/images/InnovationAward23WESTCIC.png'}
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
