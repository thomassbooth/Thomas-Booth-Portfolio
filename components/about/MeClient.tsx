'use client'

import { useScroll, motion } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'
import Cities from './Cities';
import { Link } from 'react-scroll';
import { useGlobalContext } from '@/app/Providers/GlobalProvider';


const MeClient = () => {

  const { textEnter, textLeave } = useGlobalContext()

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  }) 

  
  return (
    <section ref = {container}>
      <div className = 'flex lg:flex-nowrap flex-wrap text-lg items-center'>
        <motion.div 
          initial={{ x: '50%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{delay: 1, type: 'spring', when: 'beforeChildren', duration: 1, staggerChildren: 0.2}}
          className = 'flex flex-col gap-4 leading-relaxed px-4'>
          <p>
              A Software Engineer with 8 years of coding experience total, 2 years professionally from <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold line-through'>London</span> currently relocating to <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Dubai.</span>
          </p>
          <p>
            Highly skilled in various <Link className = 'cursor-pointer font-semibold text-pastel-blue-light hover:underline' to = 'techstack' smooth = {true} duration = {1000} offset = {-80}>Technology Domains</Link>, including <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>front-end</span>, <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>back-end</span> development, and <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>cloud</span> infrastructure. 
          </p>
          <p>
            A First-class degree holder in <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Mathematics</span> and <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Physics</span> from Cardiff University.
          </p>
          <p>
            My <Link className = 'cursor-pointer font-semibold text-pastel-blue-light hover:underline' to = 'professionaljourney' smooth = {true} duration = {1500}>Professional Journey</Link> began at 13, as a <span className = 'font-semibold'>freelance graphic designer</span> handling major projects for businesses and YouTube personalities.
          </p>
        </motion.div>
          <Image src = '/images/thomasbooth01.jpeg' 
              className = 'translate-x-10 shadow-lg m-5 border-8 border-black/10 rounded-xl grayscale hover:grayscale-0 hover:translate-y-2 transition-all duration-500'
              alt = 'Pic of me'
              priority
              width={400}
              height={400}/>
      </div>
      <div className = 'flex-col z-0 w-screen text-7xl text-pastel-brown-dark opacity-20 hidden lg:flex'>
        <Cities />
      </div>
    </section>
  )
}

export default MeClient