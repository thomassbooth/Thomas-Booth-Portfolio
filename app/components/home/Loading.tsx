'use client'

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import {useAnimate} from 'framer-motion'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'

    
function useSlideShowAnimation(setLoading: Dispatch<SetStateAction<boolean>>){
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animation = async () => {
            await animate([
                [
                    '#HELLO', { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { duration: 2 }
                ],
                ['#HELLO', { transform: 'scale(1)'}, {duration: 2}],
                [
                    '#HELLO', { transform: "scale(1)", opacity: 0, filter: "blur(0px)" },
                    { duration: 2}
                ],
                [
                    '#ITSME', { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { duration: 2 }
                ],
                ['#ITSME', { transform: 'scale(1)'}, {duration: 2}],
                [
                    '#ITSME', { transform: "scale(1)", opacity: 0, filter: "blur(0px)" },
                    { duration: 2}
                ],
            ])
            setLoading(false)
        }
        animation()
        
    }, [])
        
    return scope
}

const Loading = () => {

    const { setLoading } = useGlobalContext()
    const scope = useSlideShowAnimation(setLoading)


  return (

    <div ref = {scope} className = 'w-screen h-screen flex items-center justify-center text-2xl'>
        <span id = 'HELLO'>
            YO
        </span>
        <span id = 'ITSME'>
            WUDDUP
        </span>
    </div>
  )
}

export default Loading