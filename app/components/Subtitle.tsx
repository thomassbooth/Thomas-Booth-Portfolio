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
            className = 'font-semibold tracking-wider text-xl m-2'
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