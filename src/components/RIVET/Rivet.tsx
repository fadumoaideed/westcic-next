import {
   Flex,
   SimpleGrid,
   Text,
   Stack,
   Heading,
   Container,
   Box,
   Center
} from '@chakra-ui/layout'
import {
   Avatar,
   AvatarBadge,
   AvatarGroup,
   useColorModeValue
} from '@chakra-ui/react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { ParallaxBanner } from 'react-scroll-parallax'
import Image from 'next/image'

export function Rivet() {
   return <Container id="rivet" maxW={'1600px'} py={12}></Container>
}

export default Rivet
