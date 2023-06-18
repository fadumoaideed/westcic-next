import {
   Box,
   chakra,
   Container,
   Stack,
   Text,
   useColorModeValue,
   VisuallyHidden
} from '@chakra-ui/react'
import { FaInstagram, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'
import { ReactNode } from 'react'
import Image from 'next/image'

const SocialButton = ({
   children,
   label,
   href
}: {
   children: ReactNode
   label: string
   href: string
}) => {
   return (
      <chakra.button
         bg={'transparent'}
         color={'white'}
         rounded={'full'}
         w={10}
         h={10}
         cursor={'pointer'}
         as={'a'}
         href={href}
         display={'inline-flex'}
         alignItems={'center'}
         justifyContent={'center'}
         transition={'background 0.3s ease'}
         _hover={{
            bg: '#D5DDDF',
            color: 'black'
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   )
}

export default function SmallWithLogoLeft() {
   return (
      <Box
         bg={'#227671'}
         color={useColorModeValue('gray.700', 'gray.200')}
         width={'100%'}
         bottom={'0'}
         className="footer"
      >
         <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
         >
            <Image
               src="/images/logo/WESTCIC_Logo_White.png"
               alt="WEST CIC Logo (Women in Engineering, Science and Technology)"
               width={150}
               height={70}
               loading={'eager'}
            />
            <Text align={'center'} color="white">
               WEST C.I.C. All rights reserved. {new Date().getFullYear()} Ⓒ
            </Text>
            <Stack direction={'row'} spacing={6}>
               <SocialButton label={'Email'} href={'#'}>
                  <FaEnvelope size={25} />
               </SocialButton>
               <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram size={25} />
               </SocialButton>
               <SocialButton label={'LinkedIn'} href={'#'}>
                  <FaLinkedinIn size={25} />
               </SocialButton>
            </Stack>
         </Container>
      </Box>
   )
}
