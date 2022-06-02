import { Heading, Text, Stack } from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function SplitWithImage() {
   return (
      <>
         <Stack spacing={'20px'}>
            <AnimationOnScroll
               animateOnce={false}
               animateIn="animate__slideInLeft"
            >
               <Heading fontSize={'6xl'}>Lorem Ipsum</Heading>
            </AnimationOnScroll>
            <AnimationOnScroll
               animateOnce={false}
               animateIn="animate__slideInLeft"
            >
               <Text color={'gray.500'} fontSize={'xl'} pr="10px">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore.
               </Text>
            </AnimationOnScroll>
         </Stack>
      </>
   )
}
