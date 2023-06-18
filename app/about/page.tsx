import React from 'react'
import PageTransition from '../components/PageTransition'
import Title from '../components/Title'
import TechClient from './TechClient'


const AboutPage = () => {
  return (
    <PageTransition width = 'w-9/12'>
       <Title title = 'About me' pageNo = {'02'} slideDirection = {'right'}/>
       <p>
            My name is Thomas Booth and I am a full stack Software Engineer from the UK currently relocating to Dubai.
        </p>
        <p>
            I have worked with a wide variety of different technologies; front-end, back-end and cloud infastructure.
        </p>
        <h2 className = 'font-bold text-xl m-5'>Recent technologies I&apos;ve been working with:</h2>
        <TechClient/>
    </PageTransition>
  )
}

export default AboutPage