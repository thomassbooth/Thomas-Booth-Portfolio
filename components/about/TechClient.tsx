'use client'

import { TbBrandNextjs } from 'react-icons/tb'
import { SiDjango, SiExpress, SiFastapi, SiKubernetes, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si'
import { FaNodeJs, FaReact, FaLaravel, FaDocker, FaAws } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ListItem from './ListItem'
import List from './List'
import Image from 'next/image'

const TechClient = () => {
  return (
    <div  className = 'mt-8 mb-40 md:h-[70vh]'>
        <motion.p 
            initial = {{opacity: 0, x: '-20%'}}
            animate= {{opacity: 1, x: '0%'}}
            transition = {{delay: 0.5, duration: 0.5}}
            className = 'mb-8 text-lg'>
            Although my experience spans a broad range of technologies, I have honed my expertise predominantly in the following key areas:
        </motion.p>
        <article className = 'flex flex-wrap flex-row justify-between '>
            <List title = 'Typescript & Javascript' direction = 'up'>
                <ListItem tech = 'NextJS' icon = {TbBrandNextjs}/>
                <ListItem tech = 'NodeJS' icon = {FaNodeJs}/>
                <ListItem tech = 'ReactJS' icon = {FaReact}/>
                <ListItem tech = 'ExpressJS' icon = {SiExpress}/>
            </List>
            <List title = 'Python' direction = 'down'>
                <ListItem tech = 'Django' icon = {SiDjango}/>
                <ListItem tech = 'FastAPI' icon = {SiFastapi}/>
            </List>
            <List title = 'PHP' direction = 'down'>
                <ListItem tech = 'Laravel' icon = {FaLaravel}/>
            </List>
            <List title = 'Cloud + Infastructure' direction = 'up'>
                <ListItem tech = 'Docker' icon = {FaDocker}/>
                <ListItem tech = 'AWS' icon = {FaAws}/>
                <ListItem tech = 'PostgreSQL' icon = {SiPostgresql} />
                <ListItem tech = 'MongoDB' icon = {SiMongodb} />
                <ListItem tech = 'Redis' icon = {SiRedis} />
                <ListItem tech = 'Kubernetes' icon = {SiKubernetes} />
            </List>
        </article>
        <Image className = 'hidden md:block translate-y-20 opacity-20 -z-20' src = '/wave-haikei.svg' alt = 'wave' fill />
    </div>
  )
}

export default TechClient