import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'
export default function Home() {
   return (
      <div>
         <Head>
            <title>WEST C.I.C.</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Carousel />
      </div>
   )
}
