import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./KzuSlider'), {
   ssr: false
})
export default DynamicComponentWithNoSSR
