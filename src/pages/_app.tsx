import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import customTheme from '../styles/theme'
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <ChakraProvider theme={customTheme} resetCSS={false}>
         <CSSReset />
         <ParallaxProvider>
            <Component {...pageProps} />
         </ParallaxProvider>
      </ChakraProvider>
   )
}

export default MyApp
