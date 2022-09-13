// /* Real imapct happens through itteration
//    Waterfall vs agile but applied in innovation
//    */
// //learn more about HCD
// broaden understanding (bird wings spreading)
import { Box, Text, SimpleGrid, Image } from '@chakra-ui/react'

function Impact() {
   return (
      <SimpleGrid
         columns={[1, 1, 2, 3]}
         spacing={10}
         pt="10px"
         pb="80px"
         px={['20px', '50px', '50px', '50px', '200px']}
         justifyItems={['left']}
      >
         <Box>
            <Image alt="alt" src="" />
            <Text color={'gray.500'} fontSize="xl">
               Broaden understanding of your target audience
            </Text>
         </Box>

         <Box>
            <Image alt="alt" src="" />
            <Text color={'gray.500'} fontSize="xl">
               Improve the human experience of your innovation.
            </Text>
         </Box>

         <Box>
            <Image alt="alt" src="" />
            <Text color={'gray.500'} fontSize="xl">
               Align your values with ethos-conscious client and collaborators.
            </Text>
         </Box>
      </SimpleGrid>
   )
}

export default Impact
