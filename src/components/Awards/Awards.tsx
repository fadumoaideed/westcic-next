import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
   Container,
   Stack,
   Flex,
   Box,
   Heading,
   Text,
   Image,
   Icon,
   IconProps,
   Link
} from '@chakra-ui/react'

export default function Awards() {
   return (
      <Container maxW={'8xl'}>
         <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 15, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
            mx="45px"
            mb="30px"
         >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
               <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={['4xl', '4xl', '5xl', '6xl']}
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
                     Engineering Innovation
                  </Text>
                  <br />
                  <Text as={'span'} color={'teal.400'}>
                     Champion Finalists
                  </Text>
               </Heading>
               <Text color={'gray.500'} fontSize="xl">
                  WEST C.I.C. were shortlisted as finalists for the Engineering
                  Innovation Chamption in the business sector for improving
                  gender equality and social inclusion in Nigeria in
                  collaboration with project partners
                  <span>&nbsp;</span>
                  <Link href="https://pyrogenesys.com/" isExternal>
                     PyroGenesys.
                  </Link>
                  <span>&nbsp;</span>
                  <Link href="/projects">
                     Learn more about this project <ExternalLinkIcon mx="2px" />
                  </Link>
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
                  // rounded={'lg'}
                  boxShadow={'2xl'}
                  height={'full'}
                  overflow={'hidden'}
               >
                  <Image
                     alt={'feature image'}
                     src={
                        'https://res.cloudinary.com/westcic/image/upload/v1655829983/innovation_awards_ybieih.png'
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

export const Blob = (props: IconProps) => {
   return (
      <Icon
         width={'100%'}
         viewBox="0 0 578 440"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
            fill="currentColor"
         />
      </Icon>
   )
}
