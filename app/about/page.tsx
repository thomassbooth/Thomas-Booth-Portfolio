import React from 'react'
import PageTransition from '../components/PageTransition'
import Title from '../components/Title'
import TechClient from '../components/about/TechClient'
import Image from 'next/image'
import Subtitle from '../components/Subtitle'
import MeClient from '../components/about/MeClient'


const AboutPage = () => {
  return (
  <PageTransition width = 'w-4/5'>
    <Title title = 'About me' pageNo = {'02'} slideDirection = {'right'}/>
    <MeClient/>
    <h2 className = 'font-bold text-xl m-5'>My Tech Stack</h2>
    <TechClient/>
    <Subtitle title = {'Where Ive Worked'}/>
    {/* <HistoryClient/> */}
  </PageTransition>
  )
}

export default AboutPage