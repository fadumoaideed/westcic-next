import { ReactElement, useEffect, useState } from 'react'
import { keyframes } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

const loopArr = [
   'age',
   'gender',
   'disability',
   'sexuality',
   'ethnicity',
   'religion',
   'income'
]

export default function TextAnimation(): ReactElement {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => {
            // reset index if current index is greater than array size
            return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0
         })
      }, 2000)

      return () => clearInterval(interval)
   })

   return (
      <W>
         <span className="text-animation-value">{loopArr[index]}</span>
      </W>
   )
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-5px); }
  25% { opacity: 1; transform: translateY(-1px); }
  50% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(1px); }
`

const W = chakra('span', {
   baseStyle: {
      opacity: 0,
      display: 'inline-block',
      animationName: `${animation}`,
      // animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      animationDuration: '2s',
      animationIterationCount: 'infinite'
   }
})
