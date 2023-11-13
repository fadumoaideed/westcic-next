import { Flex, Heading } from '@chakra-ui/layout'
import { Button, Input, Textarea } from '@chakra-ui/react'

function Contact() {
   return (
      <Flex
         w="100vw"
         h="100vh"
         direction={['column', 'row']}
         justifyItems={'center'}
         alignItems={'center'}
      >
         <Flex
            p="30px"
            justifyContent={['flex-start', 'flex-start']}
            alignContent={['flex-start', 'flex-start']}
            flex={['0', '0.5', '0.6', '1.5']}
            h="100vh"
            bg={['', 'green']}
         >
            <Heading>Get in touch</Heading>
         </Flex>
         <Flex
            direction={'column'}
            flex={['0', '1', '1', '1.5']}
            w="300px"
            mx={['0', '30px', '50px', '100px', '100px']}
         >
            <Flex
               direction={['column', 'row']}
               justifyContent="space-between"
               mb="10px"
            >
               <Input
                  placeholder="Name"
                  size="md"
                  mb={['10px', '0px']}
                  mr={['0px', '10px']}
               />
               <Input type="email" placeholder="Email" mb={['10px', '0px']} />
            </Flex>
            <Textarea placeholder="Here is a sample placeholder" />

            <Button
               colorScheme="teal"
               size="md"
               type="submit"
               borderRadius="15px"
               mt="20px"
               display={'flex'}
               alignSelf="center"
            >
               Submit
            </Button>
         </Flex>
      </Flex>
   )
}

export default Contact
