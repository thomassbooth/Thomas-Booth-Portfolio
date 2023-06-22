'use client'

import Image from 'next/image'
import React from 'react'

const MeClient = () => {
  return (
    <div className = 'flex h-[70vh] 2xl:h-[75vh] font-medium text-lg'>
      <div className = 'leading-relaxed px-4'>
        <p className = 'mb-4'>
            My name is Thomas Booth and I am a full stack Software Engineer from the UK currently relocating to Dubai.
        </p>
        <p>
          Ive amassed considerable experience in diverse tech areas, encompassing front-end, back-end, and cloud infrastructure. My present work involves utilizing technologies like Nextjs, React, Nodejs, Django, and a broad spectrum of AWS tools.

          My proficiency extends beyond the tech sector. I earned a solid First class degree in Physics and Mathematics during my tenure at Cardiff University. And interestingly, my foray into the professional world started early. From the age of 13, I embarked on my journey as a freelance graphic designer, successfully completing large-scale projects for businesses and YouTube personalities.
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
  )
}

export default MeClient