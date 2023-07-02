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
          <Image className = '-z-10 opacity-10 absolute' src = '/polygon-scatter-haikei.svg' width = {640} height = {500} alt = ''/>
          <Title  line1 = {'Hi.'} line2 = 'I&#39;m Thomas Booth.' />
          <p className = 'text-left mt-5 text-lg'>
          Welcome to my digital hub! As an experienced software engineer, I passionately craft functional, intuitive, and visually appealing digital spaces that encapsulate each client&#39;s brand spirit.
          </p>
          <div className = 'flex gap-10'>
            <Link href = '/contact' className = ' text-[#F9F3EE] flex px-4 py-2 bg-pastel-blue-light hover:bg-pastel-blue-dark/80 hover:scale-[1.02] transition-all items-center gap-2 mt-8 font-medium text-lg '>
              Contact Me
            </Link>
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
          </div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default HomeClient