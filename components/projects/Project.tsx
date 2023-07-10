'use client'

import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface projectProps {
    imgSrc: string
    alt: string 
    projectName: string
    techUsed: Array<string>
    className?: string
    githubRepo: string
    hosted: string
    left: boolean
}

import Image from 'next/image'
import React from 'react'
import { useGlobalContext } from '@/app/Providers/GlobalProvider'

const Project: React.FC<projectProps> = ({className = '', left, imgSrc, alt, projectName, githubRepo, hosted, techUsed = []}) => {
  
    const { textEnter, textLeave } = useGlobalContext()
    let hiddenVariant = left ? {x: '-60%'} : {x: '+60%'}
    return (
    <div className = {`w-5/6 ${className}`}>
        <motion.div 
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: hiddenVariant,
                visible: {opacity: 1, x: '0%', y: '0%'}
            }}
            className = 'group hover:-translate-y-2 shadow-lg cursor-pointer transition-all duration-500 overflow-hidden relative'
            onClick = {() => {window.open(hosted)}}
            onMouseEnter = {textEnter} onMouseLeave = {textLeave}>
            <div className = 'w-full h-1/4 rounded-xl text-white flex p-5 justify-between items-end opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/50 to-white/0 transition-all duration-300 bottom-0 absolute'>
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
                <div>
                    <FaGithub className = 'hover:text-white transition-all text-gray-300 text-shadow hover:scale-105' onClick = {() => window.open(githubRepo)} size = {30}/>
                </div>
            </div>
            <Image 
                className = 'rounded-xl'
                src = {imgSrc}
                alt = {alt} 
                priority
                width = {2000}
                height = {2000}/>
        </motion.div>
    </div>
  )
}

export default Project