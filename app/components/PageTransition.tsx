'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }: {
    children: React.ReactNode
  }) => {
  return (
    <>
        <AnimatePresence>
            <motion.div
                initial = {{ opacity: 0, y: 20}}
                animate = {{ opacity: 1, y: 0}}
                transition = {{ delay: 0.25}}
                exit = {{ opacity: 0, y: 20}}>
                {children}
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default PageTransition