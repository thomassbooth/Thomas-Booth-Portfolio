'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface subtitleProps {
    title: string
}

const Subtitle: React.FC<subtitleProps> = ({title}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
  return (
    <>
        <motion.h2 ref = {ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}>
                {title}
        </motion.h2>
    </>
  )
}

export default Subtitle