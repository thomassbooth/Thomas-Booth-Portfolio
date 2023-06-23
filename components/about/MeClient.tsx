'use client'

import { useScroll, motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'
import Cities from './Cities';



const MeClient = () => {

  const { scrollY, scrollYProgress } = useScroll()
  return (
    <section>
      <div className = 'flex text-lg'>
        <div className = 'leading-relaxed px-4'>
          <p className = 'mb-4'>
              My name is Thomas Booth and I am a full stack Software Engineer from the UK currently relocating to Dubai.
          </p>
          <p>
          I have gained extensive expertise in various technology domains, including front-end development, back-end development, and cloud infrastructure. I am currently leveraging Next.js, React, Node.js, Django, and a wide range of AWS services in my work. My skillset transcends the boundaries of the technology industry. During my tenure at Cardiff University, I successfully obtained a First-class degree in Physics and Mathematics. Interestingly, my professional journey commenced at an early stage. Since the age of 13, I have been pursuing my career as a freelance graphic designer and have accomplished numerous large-scale projects for various businesses and YouTube personalities.
          </p>
        </div>
        <div className = 'relative group'>
          <div className = 'group-hover:translate-y-1 group-hover:translate-x-1 transition-all absolute border-2 rounded-md border-pastel-brown-light transform translate-x-2 translate-y-2 -z-10'/>
            <Image src = '/images/dummyMe.jpg' 
            className = 'shadow-sm'
            alt = 'Pick of me :D'
            width={500}
            height={500}/>
        </div>
      </div>
      
      <div className = 'flex flex-col w-screen text-6xl opacity-10'>
        <Cities />
      </div>
    </section>
  )
}

export default MeClient