import Head from 'next/head'
import React from 'react'
import DynamicComponentWithNoSSR from '../components/Carousel/ssr'

export default function Home() {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <DynamicComponentWithNoSSR />
    </div>
   )
}
