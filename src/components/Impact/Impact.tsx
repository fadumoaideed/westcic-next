// /* Real imapct happens through itteration
//    Waterfall vs agile but applied in innovation
//    */
// //learn more about HCD

import { Box, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react'

function Impact() {
   return (
      <SimpleGrid
         columns={[1, 1, 2, 3]}
         spacing={10}
         pt="10px"
         pb="80px"
         px={['50px', '50px', '50px', '50px', '70px']}
         justifyItems={'center'}
      >
         <Box>
            <Image alt="private" src="" />
            <Heading color={'gray.700'}>Private and secure</Heading>
            <Text color={'gray.500'} fontSize="xl">
               Broaden understanding of your target audience
            </Text>
         </Box>

         <Box>
            <Image alt="cloud" src="" />
            <Heading color={'gray.700'}>Zero setup overhead</Heading>
            <Text color={'gray.500'} fontSize="xl">
               Improve the human experience of your innovation.
            </Text>
         </Box>

         <Box>
            <Image alt="vendor" src="" />
            <Heading color={'gray.700'}>No vendor lock-in</Heading>
            <Text color={'gray.500'} fontSize="xl">
               Align your values with ethos-conscious client and collaborators.
            </Text>
         </Box>
      </SimpleGrid>
   )
}

export default Impact
