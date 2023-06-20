'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import Title from './HomeTitle'

const HomeClient = () => {

    const line1 = 'HI.'
    const line2 = 'IM THOMAS BOOTH.'

    const bounceTransition = {
        x: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut'
        }
    }
  return (
    <div>
        <Title line1 = {'HI.'} line2 = {'IM THOMAS BOOTH.'} />
        <p className = 'text-center mt-5'>
          Welcome to my online abode! Im, a seasoned software engineer passionately committed 
          to weaving the web one design at a time. I create digital spaces that not only look beautiful
          but are underpinned by seamless functionality, intuitive interfaces, and designs that embody the 
          brand spirit of each client.
        </p>
        <motion.div
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <Link href = '/about' className = 'flex items-center gap-2 mt-10 hover:underline'>
            Find out more
            <motion.span 
                className = 'gap-2 cursor-pointer'
                transition = {bounceTransition}
                whileHover={{
                    scale: 0.8,
                    rotate: -360,
                    borderRadius: "100%"
                  }}
                animate = {{
                    x: ['10%', '-10%']
                }}>
                <FaArrowRight/>
            </motion.span>
        </Link>
        </motion.div>
        

    </div>
  )
}

export default HomeClient