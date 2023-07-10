'use client'

import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div 
        initial={{ x: '50%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{delay: 2, type: 'spring', when: 'beforeChildren', duration: 1, staggerChildren: 0.2}}
        className = 'flex flex-col gap-4 leading-relaxed px-4'>
        <p>
        Uncover my coding prowess through these key projects: my own portfolio, a recreation of Instagram, and a replicated Airbnb platform, each exhibiting unique facets of my technical capabilities.
        </p>
        
    </motion.div>
  )
}

export default Intro