'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const bounceTransition = {
    x: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut'
    }
}

const Outro = () => {
  return (
    <motion.div
        initial = 'hidden'
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            hidden: {opacity: 0, x: '60%'},
            visible: {opacity: 1, x: '0%', y: '0%'}
        }}
        className = 'mt-10'>
        <span>Like what you see?</span>
        <Link href = '/contact' className = 'text-pastel-blue-light flex items-center gap-2 font-medium text-lg hover:underline'>
            Contact me!
            <motion.span 
                className = 'gap-2 cursor-pointer'
                transition = {bounceTransition}
                whileHover={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%"
                    }}
                animate = {{
                    x: ['30%', '-10%']
                }}>
                <FaArrowRight/>
            </motion.span>
        </Link>
    </motion.div>
  )
}

export default Outro