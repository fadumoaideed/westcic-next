import { Heading, Text, Stack, StackDivider } from '@chakra-ui/react'

export default function SplitWithImage() {
   return (
      <>
         <Stack spacing={'20px'}>
            <Heading fontSize={'6xl'}>Lorem Ipsum</Heading>
            <Text color={'gray.500'} fontSize={'xl'} pr="10px">
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
               nonumy eirmod tempor invidunt ut labore consetetur sadipscing
               elitr, sed diam nonumy eirmod tempor invidunt ut labore
               consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore consetetur sadipscing elitr, sed diam nonumy
               eirmod tempor invidunt ut labore.
            </Text>
            <Stack
               spacing={10}
               divider={<StackDivider borderColor={'green'} />}
            ></Stack>
         </Stack>
      </>
   )
}
