import {
   Container,
   Heading,
   Text,
   Stack,
   List,
   ListItem,
   Link,
   ListIcon,
   Box,
   Flex
} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { IoMdSquare } from 'react-icons/io'

function LatestProject() {
   return (
      <Container maxW={'8xl'} className="project-container">
         <Stack
            align={'center'}
            spacing={'20px'}
            direction={['column', 'row']}
            mx={['10px', '20px', '30px', '45px']}
            my="60px"
         >
            <Stack flex={1} spacing={['10px', '15px']}>
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
               <Text
                  color={'gray.500'}
                  fontSize={['md', 'lg']}
                  lineHeight={'25px'}
               >
                  WEST C.I.C. worked with an international consortium on
                  projects to bring clean energy to rural communities in Nigeria
                  (funded by UKRI). Our role was to empower women in cassava
                  food production using human centred design, by studying the
                  impact of new patented innovative technology delivered by
                  project partners PyroGenesys Ltd. Learn more about the project{' '}
                  <Link
                     isExternal
                     href="https://pyrogenesys.com/portfolio/rivet/"
                     fontWeight={'semibold'}
                  >
                     here. here.
                  </Link>
                  <span>&nbsp;</span>
               </Text>
               <Text fontSize={'xl'} color={'gray.500'} fontWeight={'semibold'}>
                  Project outcome:
               </Text>
               <List m={'3px'} color={'gray.500'} fontSize="md" pl={'30px'}>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Used surveys and group activities in three rural
                     communities to understand the gender dynamics and
                     livelihoods of women in the community.
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Implemented inclusive innovation through iterative design
                     processes with mechanical engineers
                  </ListItem>
                  <ListItem>
                     <ListIcon as={IoMdSquare} color="teal.500" />
                     Delivered a report highlighting potential unintended
                     negative consequences due to the introduction of this
                     innovation and actions to mitigate against them.
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

export default LatestProject
