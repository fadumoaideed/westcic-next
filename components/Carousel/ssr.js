import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./Carousel'), {
   ssr: false
})
export default DynamicComponentWithNoSSR
