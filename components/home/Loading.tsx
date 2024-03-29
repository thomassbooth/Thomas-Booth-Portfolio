'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {useAnimate, motion} from 'framer-motion'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'

    
function useSlideShowAnimation(setLoading: Dispatch<SetStateAction<boolean>>){
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animation = async () => {
            await animate([
                [
                    '#HELLO', { y: '-40%', opacity: 0, filter: "blur(0px)" },
                    { duration: 0 }
                ],
                [
                    '#HELLO', { y: '0%', opacity: 1, filter: "blur(0px)" },
                    { delay: 0.2, duration: 2 }
                ],
                [
                    '#HELLO', { y: '40%', opacity: 0, filter: "blur(0px)" },
                    { delay: 0.5, duration: 2}
                ],
                [
                    'div', {width: 0},
                    { duration: 0.7, ease: 'easeOut'}
                ]
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
    <div ref = {scope} >
        <div className = 'bg-black opacity-95 w-screen h-screen flex flex-col items-center text-center justify-center font-semibold text-2xl'
            >
            <span id = 'HELLO' className = 'opacity-0 text-pastel-white -translate-y-38'>
            exploring infinite possibilities, together...
            </span>
        </div>
    </div>
  )
}

export default Loading