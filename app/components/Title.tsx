'use client'

import { Inter, Roboto, Roboto_Mono } from 'next/font/google'
import { motion } from 'framer-motion'
const RobotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] })

const inter = Inter({weight: ['500'], subsets: ['latin'] })

interface titleProps {
    title: string
    pageNo: string
    slideDirection?: 'left' | 'right' | 'up' | 'down'
}


const Title: React.FC<titleProps> = ({title, pageNo, slideDirection}) => {

  let initialAnimation = {}

  switch (slideDirection) {
    case 'left':
      initialAnimation = { opacity: 0, x: '10%'}
      break;
    case 'right':
      initialAnimation = { opacity: 0, x: '-10%'}
      break;
    case 'up':
      initialAnimation = { opacity: 0 , y: '20%'}
      break;
    case 'down':
      initialAnimation = { opacity: 0 , y: '-20%'}
      break;
    default:
      initialAnimation = { opacity: 0 }
      break;
  }
  return (
    <>
        <motion.h1 
          className = {`${inter.className} font-black text-4xl mb-10 flex items-center gap-4`}
            initial = {initialAnimation}
            animate = {{opacity: 1, x: '0%', y: '0%'}}
            transition = {{ delay: 1}}>
            <span className = {`${RobotoMono.className} opacity-40 font-bold text-4xl`}>
                {pageNo}.
            </span>
            {title}
        </motion.h1>

    </>
  )
}

export default Title