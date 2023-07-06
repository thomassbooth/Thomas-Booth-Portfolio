
interface projectProps {
    imgSrc: string
    alt: string 
    projectName: string
    techUsed: Array<string>
}

import Image from 'next/image'
import React from 'react'

const Project: React.FC<projectProps> = ({imgSrc, alt, projectName, techUsed = []}) => {
  return (
    <div className = 'w-5/6'>
        <div className = 'group overflow-hidden relative'>
            <div className = 'w-full h-1/4 rounded-lg text-white flex flex-col p-5 justify-center opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/40 to-white/0 transition-all duration-300 bottom-0 absolute'>
                <h2 className = 'text-shadow font-semibold'>
                    {projectName}
                </h2>
                <div className = 'flex gap-2'>
                {
                    techUsed.map((tech, index) => {
                        return (
                            <div key = {index}
                                className = 'text-shadow text-xs px-2 py-1 bg-pastel-blue-dark/40 rounded-full'>
                                {tech}
                            </div>
                        )
                    })
                }
                </div>
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