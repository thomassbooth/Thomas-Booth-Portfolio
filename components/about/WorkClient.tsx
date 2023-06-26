'use client'

import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] })
const experience = [
    {
        id: 0,
        company: 'TSL Media',
        title: 'Full stack software engineer',
        date: '',
        active: true,
        description: 'WORKED AT TSL'
    },
    {
        id: 1,
        company: 'Codelocks',
        title: 'Software Engineer',
        date: '',
        active: false,
        description: 'WORKED AT CODELOCKS'
    },
    {
        id: 2,
        company: 'SureCloud',
        title: 'Application Developer',
        date: '',
        active: false,
        description: 'WORKED AT SURECLOUD'
    },
    {
        id: 3,
        company: 'Trace2o',
        title: 'Chemical Production Technician',
        date: '',
        active: false,
        description: 'WORKED AT TRACE2O'
    },
    {
        id: 4,
        company: 'Freelance',
        title: 'Graphic Designer',
        date: '',
        active: false,
        description: 'WORKED AS FREELANCE GRAPHIC DESIGNER'
    }
]


const WorkClient = () => {
    const [current, setCurrent] = useState(0)

    const changeJob = useCallback((index: number) => {
        setCurrent(index)
    }, [])

  return (
    <div className = 'mt-16 flex'>
        <ul className = 'flex flex-col ml-4 border-l-2 border-pastel-brown-light/20'>
            {experience.map((job, index) => {
                return (
                    <li onClick = {() => changeJob(index)} 
                        key = {index} 
                        className = '-translate-x-0.5 h-10 hover:bg-pastel-brown-light/10 transition-all flex items-center w-40 cursor-pointer'>
                        {current === index && <motion.div 
                            layoutId="selected"
                            className = ' bg-pastel-brown-dark h-10 w-[2px] rounded-full'/>}
                        <h3 className = {`${RobotoMono.className} ${current === index ? 'text-pastel-brown-dark' : 'text-pastel-brown-light/50'} tracking-normal ml-5 text-sm transition-all`}>
                            {job.company}
                        </h3>
                    </li>
                    )
                })}
        </ul>
        <div>
            {experience[current].description}
        </div>

    </div>
  )
}

export default WorkClient