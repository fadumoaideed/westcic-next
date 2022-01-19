import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import customTheme from '../styles/index'
import "../styles/global.css";

// import Navbar from '../styles/componentStyles/Navbar/Navbar.tsx'
// import Footer from '../styles/componentStyles/Footer/Footer.tsx'
const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <ChakraProvider theme={customTheme} resetCSS={false}>
         <CSSReset />
         {/* <Navbar /> */}
         {/* <Footer /> */}
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
