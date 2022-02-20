import { ReactElement } from 'react'
import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react'
import {
   Box,
   SimpleGrid,
   Icon,
   Text,
   Stack,
   Flex,
   Heading,
   Center
} from '@chakra-ui/react'
import { FcAssistant, FcInTransit } from 'react-icons/fc'
import { MdLightbulb } from 'react-icons/md'

interface FeatureProps {
   title: string
   text: string
   icon: ReactElement
}
const spin = keyframes`
  0%  { transform: rotate(0deg); }
  10% { transform: rotate(-20deg); }
  20% { transform: rotate(20deg); }
  30% { transform: rotate(-20deg); }
  40% { transform: rotate(20deg); }
  50% { transform: rotate(-20deg); }
  60% { transform: rotate(20deg); }
  70% { transform: rotate(-20deg); }
  80% { transform: rotate(20deg); }
  90% { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
`

const Feature = ({ title, text, icon }: FeatureProps) => {
   
   return (
      <Stack>
         <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={'gray.100'}
            mb={1}
         >
            {icon}
         </Flex>
         <Text fontWeight={600}>{title}</Text>
         <Text color={'gray.600'}>{text}</Text>
      </Stack>
   )
}

export default function SimpleThreeColumns() {
   const prefersReducedMotion = usePrefersReducedMotion()
   const animation = prefersReducedMotion
   ? undefined
   : `${spin} infinite 5s ease-in-out`
   return (
      <Box px={''}>

         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={'10'} px="100px">
            <Feature
               icon={<Icon as={FcAssistant} w={10} h={10} />}
               title={'Lorem ipsum'}
               text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
               }
            />
            <Feature
               icon={
                  <Icon
                     as={MdLightbulb}
                     w={10}
                     h={10}
                     color={'grey'}
                     bg={'transparent'}
                     _hover={{animation, color:'grey'}}
                  />
               }
               title={'Lorem ipsum'}
               text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
               }
            />
            <Feature
               icon={<Icon as={FcInTransit} w={10} h={10} />}
               title={'Lorem ipsum'}
               text={
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
               }
            />
         </SimpleGrid>
      </Box>
   )
}
