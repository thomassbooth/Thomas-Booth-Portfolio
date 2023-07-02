'use client'

import { useGlobalContext } from '@/app/Providers/GlobalProvider'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface subtitleProps {
    id?: string
    title: string
    visable?: {}
    hidden?: {}
}

const Subtitle: React.FC<subtitleProps> = ({id, title, visable, hidden}) => {

    const { textEnter, textLeave } = useGlobalContext()

  return (
    <>
        <motion.h2 id = {id}
            className = 'font-bold text-4xl mb-10 flex items-center tracking-wider gap-4'
            onMouseEnter = {textEnter} 
            onMouseLeave = {textLeave}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              visible: { opacity: 1, ...visable},
              hidden: { opacity: 0, ...hidden}
            }}>
                {title}
        </motion.h2>
    </>
  )
}

export default Subtitle