import { ChakraProvider, CSSReset, Stack } from '@chakra-ui/react'
import theme from '../src/theme'
import Navbar from '../components/Navbar/Navbar.tsx'
import Footer from '../components/Footer/Footer.tsx'
function MyApp({ Component, pageProps }) {
   return (
      <ChakraProvider theme={theme} resetCSS={false}>
         <CSSReset />
         <Navbar />
         {/* <Footer /> */}
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
