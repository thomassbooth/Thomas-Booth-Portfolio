'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const HomeClient = () => {

    const line1 = 'HI.'
    const line2 = 'IM THOMAS BOOTH.'

    const sentenceTransition = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    }
    const letterTransition = {
        hidden: { opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0
        }

    }

    const bounceTransition = {
        x: {
            duration: 0.4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut'
        }
    }
  return (
    <div>
        <motion.article
            className = 'text-center'
            initial={{ x: '50%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            transition={{type: 'spring', when: 'beforeChildren', duration: 0.5, staggerChildren: 0.2}}>
            <motion.h3
                className = 'font-bold'
                variants = {sentenceTransition}
                initial = 'hidden'
                animate = 'visible'>
                {line1.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-5xl'
                            key = {char + i}
                            variants = {letterTransition}
                        >
                            {char}
                        </motion.span>
                    )
                })}
                <br />
                {line2.split('').map((char, i) => {
                    return (
                        <motion.span 
                            className = 'text-3xl'
                            key = {char + i}
                            variants = {letterTransition}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h3>
        </motion.article>
        <p className = 'text-center mt-5'>
          Welcome to my online abode! Im, a seasoned software engineer passionately committed 
          to weaving the web one design at a time. I create digital spaces that not only look beautiful
          but are underpinned by seamless functionality, intuitive interfaces, and designs that embody the 
          brand spirit of each client.
        </p>
        <Link href = '/about' className = 'flex items-center gap-2 mt-10 hover:underline'>
            Find out more
            <motion.span 
                className = 'gap-2 cursor-pointer'
                transition = {bounceTransition}
                animate = {{
                    x: ['5%', '-5%']
                }}>
                <FaArrowRight/>
                
            </motion.span>
        </Link>
        <div className = 'flex gap-5 mt-5'>
          <FaTwitter onClick = {() => {window.open('https://twitter.com/thomassbooth')}} className = 'hover:text-gray-700 hover:scale-105 transition-all cursor-pointer'/>
          <FaLinkedin onClick = {() => {window.open('https://www.linkedin.com/in/thomas-booth-08baa6151/')}} className = 'hover:text-gray-700 hover:scale-105 transition-all cursor-pointer'/>
          <FaGithub onClick = {() => {window.open('https://github.com/thomassbooth')}} className = 'hover:text-gray-700 hover:scale-105 transition-all cursor-pointer'/>
          <FiInstagram onClick = {() => {window.open('https://www.instagram.com/thomassboothh/')}} className = 'hover:text-gray-800 hover:scale-105 transition-all cursor-pointer'/>
        </div>

    </div>
  )
}

export default HomeClient