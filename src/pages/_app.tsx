import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import Footer from 'components/Footer/Footer'
import { AppProps } from 'next/app'
import customTheme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <ChakraProvider theme={customTheme} resetCSS={false}>
         <CSSReset />
         {/* <Footer /> */}
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
