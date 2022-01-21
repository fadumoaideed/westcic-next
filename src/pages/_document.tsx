// import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
// const APP_NAME = 'next-chakra-westcic'

// export default class Document extends NextDocument {
//    render(): ReactElement {      return (
//          <Html lang="en">
//             <Head>
//                <meta name="application-name" content={APP_NAME} />
//                <meta name="apple-mobile-web-app-capable" content="yes" />
//                <meta
//                   name="apple-mobile-web-app-status-bar-style"
//                   content="default"
//                />
//                <meta name="apple-mobile-web-app-title" content={APP_NAME} />
//                <meta name="format-detection" content="telephone=no" />
//                <meta name="mobile-web-app-capable" content="yes" />
//                <meta name="theme-color" content="#FFFFFF" />
//             </Head>
//             <body>
//                <Main />
//                <NextScript />
//             </body>
//          </Html>
//       )
//    }
// }

import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext
} from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)

      return initialProps
   }
   //   render() {
   //    return (
   //      <Html>
   //        <Head>
   //          <meta name="viewport" content="width=device-width, initial-scale=1" />
   //          <style>
   //            {`#__next {
   //                height: ${this.props.shouldShow ? "100%" : "0"}
   //              }`}
   //          </style>
   //        </Head>
   //        <body>
   //          <Main />
   //          <NextScript />
   //        </body>
   //      </Html>
}

export default MyDocument
