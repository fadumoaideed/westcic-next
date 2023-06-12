import {
   Container,
   Stack,
   Flex,
   Box,
   Heading,
   Text,
   Image,
   Link,
   List,
   ListItem,
   ListIcon
} from '@chakra-ui/react'
import { IoMdSquare } from 'react-icons/io'

export default function Awards() {
   return (
      <Container maxW={'8xl'}>
         <Stack
            align={'center'}
            spacing={{ base: '10px', md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            mx={['10px', '20px', '30px', '45px']}
            mb="30px"
         >
            <Stack flex={1} m={['0px', '40px', '10px']}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['5xl', '6xl']}
               >
                  Latest{' '}
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
                     projects
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize="xl">
                  WEST C.I.C. introduced a sustainable and inclusive human
                  centered design approach, helping bring clean energy to rural
                  communities in Nigeia. Our aim was to empowering women farmers
                  without affecting their livelihood with new patented
                  innnovative technology delievered by project partners
                  <span>&nbsp;</span>
                  <Link isExternal href="https://www.pyrogenesys.com">
                     Pyrogensys Ltd.
                  </Link>
                  <span>&nbsp;</span>
                  Learn more about the project
                  <span>&nbsp;</span>
                  <Link
                     isExternal
                     href="https://pyrogenesys.com/portfolio/rivet/"
                     fontWeight={'semibold'}
                  >
                     here.
                  </Link>
               </Text>
               <Text fontSize={'xl'} color={'gray.500'} fontWeight={'semibold'}>
                  Project outcome:
               </Text>
               <List
                  m={'5px'}
                  color={'gray.500'}
                  fontSize="lg"
                  pl={'40px'}
                  pt={'5px'}
               >
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Understand and mapped the dynamics of the community
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Implemented inclusive innovation through iterative design
                     processes
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Ensure that new innovation introduced does not cause
                     unintended consequences
                  </ListItem>
               </List>
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
