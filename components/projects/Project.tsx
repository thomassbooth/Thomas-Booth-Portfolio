'use client'

import { FaGithub } from 'react-icons/fa'

interface projectProps {
    imgSrc: string
    alt: string 
    projectName: string
    techUsed: Array<string>
    className?: string
    githubRepo: string
}

import Image from 'next/image'
import React from 'react'

const Project: React.FC<projectProps> = ({className = '', imgSrc, alt, projectName, githubRepo, techUsed = []}) => {
  return (
    <div className = {`w-5/6 ${className}`}>
        <div className = 'group hover:-translate-y-2 shadow-lg border-8 rounded-xl border-black/10 cursor-pointer transition-all duration-500 overflow-hidden relative'>
            <div className = 'w-full h-1/4 rounded-lg text-white flex p-5 justify-between items-end opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 to-white transition-all duration-300 bottom-0 absolute'>
                <div className = 'flex flex-col justify-evenly'>

                
                    <h2 className = 'text-shadow font-semibold'>
                        {projectName}
                    </h2>
                    
                    <div className = 'flex gap-2 mt-2'>
                    {
                        techUsed.map((tech, index) => {
                            return (
                                <div key = {index}
                                    className = 'text-shadow text-xs px-2 py-1 bg-pastel-blue-dark/70 rounded-full'>
                                    {tech}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <FaGithub className = 'hover:text-white text-gray-300 text-shadow' onClick = {() => window.open(githubRepo)} size = {30}/>
            </div>
            <Image 
                className = 'rounded-lg'
                src = {imgSrc}
                alt = {alt} 
                width = {2000}
                height = {2000}/>
        </div>
    </div>
  )
}

export default Project