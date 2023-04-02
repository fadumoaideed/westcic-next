import { ReactElement, useEffect, useState } from 'react'
import { keyframes } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'

const loopArr = ['background', 'ethnicity', 'gender', 'age']

export default function TextAnimation(): ReactElement {
   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => {
            // reset index if current index is greater than array size
            return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0
         })
      }, 3000)
      return () => clearInterval(interval)
   })

   return (
      <Box>
         <W>
            <span className="hello">{loopArr[index]}</span>
         </W>
      </Box>
   )
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-5px); }
  25% { opacity: 1; transform: translateY(0px); }
  50% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(5px); }
`

// const Wrapper = styled.span`
//    display: inline-block;

//    span {
//       opacity: 0;
//       display: inline-block;
//       animation-name: ${animation};
//       animation-duration: 3s;
//       /* animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); */
//       /* animation-fill-mode: forwards; */
//       animation-iteration-count: infinite;
//    }
// `
const W = chakra('span', {
   baseStyle: {
      opacity: 0,
      display: 'inline-block',
      animationName: `${animation}`,
      animationDuration: '3s',
      animationIterationCount: 'infinite'
   }
})
