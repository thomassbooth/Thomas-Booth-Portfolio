'use client'

import React, { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'
import WorkDescription from './WorkDescription'

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
        link: 'https://tslmedia.co.uk/',
        date: 'May 2023 - Present',
        active: true,
        description: [
            'Architechting and developing a client management system.',
            'Involved in lead generation projects automating turning user data into legal cases for numerous solicitors.',
            'Typescript, Python, React, NextJS, Redux, FastAPI, AWS, Terraform'
        ]
    },
    {
        id: 1,
        company: 'Codelocks',
        title: 'Software Engineer',
        link: 'https://www.codelocks.co.uk/',
        date: 'Mar 2022 - May 2023',
        active: false,
        description: [
            'Architechted and built a scalable API for a BLE lock management app, securing over £1 mil in product presales.',
            'Developed and integrated a near real-time serverless billign system for web apps and high volume api customers, increasing web portal revenue by 30%.',
            'Development on an inhouse CMS building and administration system for the company intranet.',
            'Facilitated the seamless upgrade of an app backend from python 2 to 3 and decoupling crutial encryption algorithms to serverless functions.',
            'NodeJS, Typescript, Python, PHP, Laravel, React, Django, Laravel, AWS'
        ]
    },
    {
        id: 2,
        company: 'SureCloud',
        title: 'Application Developer',
        link: 'https://www.surecloud.com/',
        date: 'Sept 2021 - Mar 2022',
        active: false,
        description: [
            'Designed and developed user interfaces for GRC management tracking tools for clients such as M&S, Carrefour and BMW.',
            'Lead the design and development mentoring 2 junior developers on an internal IT Assests management tracker application.',
            'Took part in Project, Risk management and GRC training.',
            'React, NodeJS, Vanilla Javascript'
        ]
    },
    {
        id: 3,
        company: 'Trace2o',
        title: 'Chemical Production Technician',
        link: 'https://www.trace2o.com/',
        date: '2017 - Sept 2021',
        active: false,
        description: [
            'Research project with UNICEF x Global Good Foundation, using photo detectors to detect e-coli in water.',
            'General lab work and chemical testing.'
        ]
    },
    {
        id: 4,
        company: 'Freelance',
        title: 'Graphic Designer',
        link: 'https://www.behance.net/thomasboot034a/projects',
        date: '2010 - 2017',
        active: false,
        description: [
            'Delivered many design projects to youtube personalities and companies.',
            'Portfolio in the link above!'
        ]
    }
]


const WorkClient = () => {
    const [current, setCurrent] = useState(0)

    const changeJob = useCallback((index: number) => {
        setCurrent(index)
    }, [])

  return (
    <div className = 'mt-16 flex gap-4'>
        <div>
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
        </div>
        <AnimatePresence mode = 'wait'>
            <motion.div
                key={current}
                whileInView="in"
                viewport={{ once: true }}
                initial="initial"
                animate="in"
                exit="out"
                variants={variants}>
                <h2 className = 'text-2xl'><span className = 'font-semibold'>{experience[current].title}</span> <span className = 'font-medium hover:underline text-pastel-blue-dark cursor-pointer' 
                    onClick = {() => window.open(experience[current].link)}>
                    @{experience[current].company}
                </span></h2>
                <h3 className = {`${RobotoMono.className} text-sm text-pastel-brown-light mt-1`}>{experience[current].date}</h3>
                <div className = 'flex flex-col gap-4 mt-5 font-medium'>
                    {experience[current].description.map((desc, index) => {
                        return (<WorkDescription key = {index} description = {desc}/>
                        )
                    })}
                </div>
            </motion.div>
        </AnimatePresence>

    </div>
  )
}

export default WorkClient