import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Footer from 'components/Footer/Footer'
import { AppProps } from 'next/app'
import customTheme from '../styles/theme'
import 'animate.css/animate.min.css'
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <ChakraProvider theme={customTheme} resetCSS={false}>
         <CSSReset />
         <ParallaxProvider>
            <Component {...pageProps} />
            {/* <Footer /> */}
         </ParallaxProvider>
      </ChakraProvider>
   )
}

export default MyApp
