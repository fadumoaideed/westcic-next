import { useState, useEffect } from 'react'

interface Window {
   width: number
   height: number
}

function getWindowDimensions(): Window {
   const { innerWidth: width, innerHeight: height } = window
   return {
      width,
      height
   }
}

export default function useWindowDimensions() {
   const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
   )

   useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return windowDimensions
}
