import { ChakraProvider, CSSReset, Stack } from '@chakra-ui/react'
import theme from '../src/theme'
import Navbar from '../components/Navbar/Navbar'
import Navbar1 from '../components/Navbar/Navbar1'
import Footer from '../components/Footer/Footer1'
function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme} resetCSS={false}>
         <CSSReset />
         {/* <Navbar /> */}
         <Navbar1 />
         <Footer />
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
