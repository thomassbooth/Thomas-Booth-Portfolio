'use client'

import { useScroll, motion } from 'framer-motion';
import Image from 'next/image'
import React from 'react'
import Cities from './Cities';
import { Link } from 'react-scroll';
import { useGlobalContext } from '@/app/Providers/GlobalProvider';



const MeClient = () => {

  return (
    <section>
      <div className = 'flex lg:flex-nowrap flex-wrap text-lg items-center'>
        <div className = 'flex flex-col gap-4 leading-relaxed px-4'>
          <p>
              My name is Thomas Booth and I am a full stack Software Engineer from <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold line-through'>London</span> currently relocating to <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Dubai.</span>
          </p>
          <p>
          I have gained extensive expertise in various <Link className = 'cursor-pointer font-semibold text-pastel-blue-light hover:underline' to = 'techstack' smooth = {true} duration = {1000} offset = {-80}>Technology Domains</Link>, including <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>front-end</span> development, <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>back-end</span> development, and <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>cloud</span> infrastructure. 
          </p>
          <p>
          My skillset transcends the boundaries of the technology industry. During my tenure at Cardiff University, I successfully obtained a First-class degree in <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Physics</span> and <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>Mathematics.</span>
          </p>
          <p>
          Interestingly, my <Link className = 'cursor-pointer font-semibold text-pastel-blue-light hover:underline' to = 'professionaljourney' smooth = {true} duration = {1500}>Professional Journey</Link> commenced at an early stage. Since the age of 13, I had been pursuing a career freelance graphic designer and have accomplished numerous large-scale projects for various businesses and YouTube personalities.
          </p>
        </div>
          <Image src = '/images/thomasbooth01.jpeg' 
              className = 'translate-x-10 shadow-lg m-5 border-8 border-black/10 rounded-xl grayscale hover:grayscale-0 hover:translate-y-2 transition-all duration-500'
              alt = 'Pick of me :D'
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