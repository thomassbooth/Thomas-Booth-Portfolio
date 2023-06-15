'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

  const breathing = {
    scale: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeOut'
    }
  }
const Logo = () => {
    const router = useRouter()
  return (
    <>
      <motion.a
        drag
        className = 'text-3xl font-black'
        animate = {{ scale: [1, 1.1]}}
        transition = {breathing}
        dragConstraints={{ left: 0, right: 300, top: -60, bottom: 60 }}
        href="/"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}   
      >
        T B
      </motion.a>
    </>
  )
}

export default Logo