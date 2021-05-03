import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme}>
         <Navbar />
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
