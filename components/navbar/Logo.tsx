'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'

const Logo = () => {
    const router = useRouter()
    const { textEnter, textLeave } = useGlobalContext()
  return (
    <>
      <motion.a
        drag
        className = 'text-3xl font-black'
        dragConstraints={{ left: 0, right: 300, top: -60, bottom: 60 }}
        href="/"
        onMouseEnter = {textEnter} onMouseLeave = {textLeave}
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