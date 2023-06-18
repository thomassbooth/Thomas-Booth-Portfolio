import React from 'react'
import PageTransition from '../components/PageTransition'
import Title from '../components/Title'
import AboutClient from './AboutClient'


const AboutPage = () => {
  return (
    <PageTransition width = 'w-4/5'>
       <Title title = 'About me' pageNo = {'02'} slideDirection = {'right'}/>
       <AboutClient/>
    </PageTransition>
  )
}

export default AboutPage