'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'

interface TitleProps {
    line1: string
    line2: string
}

const sentenceTransition = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}
const letterTransition = {
    hidden: { opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0
    }

}

const inter = Inter({weight: ['700'], subsets: ['latin'] })

const Title: React.FC<TitleProps>  = ({ line1, line2}) => {

    const { textEnter, textLeave } = useGlobalContext()

  return (
    <>
        <motion.article
            className = {`${inter.className}  leading-[60px] tracking-wider text-left`}
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{delay: 0.6, type: 'spring', when: 'beforeChildren', duration: 0.5, staggerChildren: 0.2}}>
            <motion.h3
                className = 'font-bold'
                variants = {sentenceTransition}
                initial = 'hidden'
                animate = 'visible'>
                {line1.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-6xl'
                            key = {char + i}
                            variants = {letterTransition}
                            onMouseEnter = {() => textEnter}
                            onMouseLeave = {() => textLeave}
                        >
                            {char}
                        </motion.span>
                    )
                })}
                <br className = 'my-5'/>
                {line2.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-6xl'
                            key = {char + i}
                            variants = {letterTransition}
                            onMouseEnter = {() => textEnter}
                            onMouseLeave = {() => textLeave}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h3>
        </motion.article>
    </>
  )
}

export default Title