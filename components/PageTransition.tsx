'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobalContext } from '../app/Providers/GlobalProvider'

const PageTransition = ({ children, width }: {
    children: React.ReactNode
    width?: string
  }) => {
    const { loading } = useGlobalContext()
  return (
    <>
        
          { !loading 
          ? (
          <AnimatePresence>
          <motion.div
                className = 'flex flex-col items-center'
                initial = {{ opacity: 0, y: 20}}
                animate = {{ opacity: 1, y: 0}}
                transition = {{ delay: 0.25}}
                exit = {{ opacity: 0, y: 20}}>
                  <div className = {width}>
                    {children}
                  </div>
            </motion.div>
            </AnimatePresence>
            ): <>{children}</>}
        
        
    </>
  )
}

export default PageTransition