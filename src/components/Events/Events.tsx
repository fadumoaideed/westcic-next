import { Flex, Link, Text } from '@chakra-ui/layout'

export function Upcoming() {
   return (
      <div>
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
            <Flex display="flex" flexDirection={'row'} boxShadow={'md'}>
               <Flex
                  display={'flex'}
                  flexDirection={'column'}
                  borderRadius={'3px 0px 0px 3px'}
                  bg={'#f9a7b0'}
                  color={'white'}
                  fontWeight={'bold'}
                  h={'100px'}
                  w={'100px'}
                  minWidth={'100px'}
                  minHeight={'100px'}
               >
                  <Flex
                     flexDirection={'row'}
                     alignItems={'center'}
                     justifyContent={'center'}
                     fontFamily={'cursive'}
                  >
                     <Text fontSize={['4xl', '5xl']}>13</Text>
                     <Text as={'sup'} fontSize={['xl']}>
                        th
                     </Text>
                  </Flex>
                  <Text
                     alignSelf={'center'}
                     justifyItems={'center'}
                     fontSize={'md'}
                  >
                     July 2023
                  </Text>
               </Flex>
               <Flex
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                  pl={'10px'}
                  alignSelf={'center'}
                  justifyContent={'center'}
               >
                  <Text color={'teal.700'} fontSize={['sm', 'md', 'xl']}>
                     STEM Sisterhood is an online event that highlights the
                     importance of networks of women in STEM.
                  </Text>
               </Flex>
            </Flex>
         </Link>
      </div>
   )
}

export default Upcoming
