'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface subtitleProps {
    title: string
    visable?: {}
    hidden?: {}
}

const Subtitle: React.FC<subtitleProps> = ({title, visable, hidden}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
  return (
    <>
        <motion.h2 ref = {ref}
            className = 'font-bold text-xl m-5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
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