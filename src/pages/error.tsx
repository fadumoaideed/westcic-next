import { Heading, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function NotFound() {
   return (
      <Flex
         textAlign="center"
         py={10}
         px={6}
         direction="column"
         alignItems="center"
         justifyContent={'center'}
         h="100vh"
      >
         <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, teal.400, teal.600)"
            backgroundClip="text"
         >
            Page Not Found
         </Heading>

         <Link href={'/'}>
            <Button
               colorScheme="teal"
               bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
               color="white"
               variant="solid"
               w="150px"
               mt="10px"
            >
               Go to Home
            </Button>
         </Link>
      </Flex>
   )
}
