'use client'

import { TbBrandNextjs } from 'react-icons/tb'
import { SiDjango, SiFastapi } from 'react-icons/si'
import { FaNodeJs, FaReact, FaLaravel, FaDocker, FaAws } from 'react-icons/fa'
import ListItem from '../components/about/ListItem'
import List from '../components/about/List'

const AboutClient = () => {
  return (
    <div>
        <p>
            My name is Thomas Booth and I am a full stack Software Engineer from the UK currently relocating to Dubai.
        </p>
        <p>
            I have worked with a wide variety of different technologies; front-end, back-end and cloud infastructure.
        </p>
        <h2 className = 'font-bold text-xl m-5'>Technology </h2>
        <article className = 'flex flex-row justify-evenly'>
            <List title = 'Typescript & Javascript'>
                <ListItem tech = 'NextJS' icon = {TbBrandNextjs}/>
                <ListItem tech = 'NodeJS' icon = {FaNodeJs}/>
                <ListItem tech = 'ReactJS' icon = {FaReact}/>
            </List>
            <List title = 'Python'>
                <ListItem tech = 'Django' icon = {SiDjango}/>
                <ListItem tech = 'FastAPI' icon = {SiFastapi}/>
            </List>
            <List title = 'PHP'>
                <ListItem tech = 'Laravel' icon = {FaLaravel}/>
            </List>
            <List title = 'Cloud and Infastructure'>
                <ListItem tech = 'Docker' icon = {FaDocker}/>
                <ListItem tech = 'AWS' icon = {FaAws}/>
            </List>
        </article>
    </div>
  )
}

export default AboutClient