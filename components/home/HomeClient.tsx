'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import Title from './HomeTitle'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'
import Image from 'next/image'

const HomeClient = () => {

    const { loading } = useGlobalContext()

    const bounceTransition = {
        x: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeOut'
        }
    }
  return (
    <AnimatePresence>
      {loading ? (
        
          <Loading />
        
      ) : (
        
      <motion.div
        animate = {{opacity: 1}}>
          <Image className = '-z-10 opacity-10 absolute md:top-0 2xl:top-auto' priority src = '/polygon-scatter-haikei.svg' width = {900} height = {675} alt = ''/>
          <Title line1 = {'Hi.'} line2 = 'I&#39;m Thomas Booth.' />
          <p className = 'text-left mt-5 text-lg'>
          Welcome to my digital hub! As an experienced software engineer, I passionately craft functional, intuitive, and visually appealing digital spaces that encapsulate each client&#39;s brand spirit.
          </p>
          <motion.div
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Link href = '/about' className = 'text-pastel-blue-light flex items-center gap-2 mt-10 font-medium text-lg hover:underline'>
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
                      x: ['30%', '-10%']
                  }}>
                  <FaArrowRight/>
              </motion.span>
          </Link>
          </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HomeClient