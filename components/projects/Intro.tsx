'use client'

import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div 
        initial={{ x: '50%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{delay: 1 , type: 'spring', when: 'beforeChildren', duration: 1, staggerChildren: 0.2}}
        className = 'flex flex-col gap-4 text-lg leading-relaxed px-4'>
        <p>
            Dive into my technical journey showcased through these projects: a self-developed portfolio, a doppelgänger of Instagram, and an Airbnb mirror, each demonstrating my varied software engineering skills.
        </p>
        
    </motion.div>
  )
}

export default Intro