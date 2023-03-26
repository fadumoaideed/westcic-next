import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import customTheme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <ChakraProvider theme={customTheme} resetCSS={false}>
         <CSSReset />
         <Component {...pageProps} />
      </ChakraProvider>
   )
}

export default MyApp
