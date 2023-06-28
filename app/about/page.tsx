import React from 'react'
import PageTransition from '../../components/PageTransition'
import Title from '../../components/Title'
import TechClient from '../../components/about/TechClient'
import Image from 'next/image'
import Subtitle from '../../components/Subtitle'
import MeClient from '../../components/about/MeClient'
import WorkClient from '@/components/about/WorkClient'


export const metadata = {
  title: 'About - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const AboutPage = () => {
  return (
  <PageTransition width = 'w-4/5'>
    <Title title = 'About me' pageNo = {'02'} slideDirection = {'up'}/>
    <MeClient/>
    <Subtitle title = {'My Tech Stack'} visable = {{y: '0%'}} hidden = {{y: '30%'}}/>
    <TechClient/>
    <Subtitle title = {'My Professional Journey'} visable = {{x: '0%'}} hidden = {{x: '30%'}}/>
    <WorkClient/>
    <Subtitle title = {'Education'} visable = {{x: '0%'}} hidden = {{y: '40%'}}/>
  </PageTransition>
  )
}

export default AboutPage