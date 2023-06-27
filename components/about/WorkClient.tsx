'use client'

import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] })

const variants = {
    initial: { x: -50, opacity: 0 },
    in: { x: 0, opacity: 1 },
    out: { x: 50, opacity: 0 }
  };

const experience = [
    {
        id: 0,
        company: 'TSL Media',
        title: 'Full stack software engineer',
        link: '',
        date: 'May 2023 - Present',
        active: true,
        description: {
            
        }
    },
    {
        id: 1,
        company: 'Codelocks',
        title: 'Software Engineer',
        link: '',
        date: 'Mar 2022 - May 2023',
        active: false,
        description: {
            
        }
    },
    {
        id: 2,
        company: 'SureCloud',
        title: 'Application Developer',
        date: 'Sept 2021 - Mar 2022',
        active: false,
        description: {
            
        }
    },
    {
        id: 3,
        company: 'Trace2o',
        title: 'Chemical Production Technician',
        link: '',
        date: '2017 - Sept 2021',
        active: false,
        description: {
            
        }
    },
    {
        id: 4,
        company: 'Freelance',
        title: 'Graphic Designer',
        link: '',
        date: '',
        active: false,
        description: {
            
        }
    }
]


const WorkClient = () => {
    const [current, setCurrent] = useState(0)

    const changeJob = useCallback((index: number) => {
        setCurrent(index)
    }, [])

  return (
    <div className = 'mt-16 flex '>
            <ul className = 'flex flex-col ml-4 mt-16 border-l-2 border-pastel-brown-light/20'>
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
        
        <AnimatePresence mode = 'wait'>
            <motion.div
                key={current}
                whileInView="in"
                viewport={{ once: true }}
                initial="initial"
                animate="in"
                exit="out"
                variants={variants}
                className = 'text-xl'>
                <h2><span className = 'font-semibold'>{experience[current].title}</span> <span className = 'font-medium hover:underline text-pastel-blue-dark cursor-pointer'>@{experience[current].company}</span></h2>
                <h3 className = {`${RobotoMono.className} text-sm text-pastel-brown-light mt-1`}>{experience[current].date}</h3>
            </motion.div>
        </AnimatePresence>

    </div>
  )
}

export default WorkClient