'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
  return (
    <>
      <motion.a
        drag
        className = 'text-3xl font-black'
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