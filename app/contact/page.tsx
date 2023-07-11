import React from 'react'
import PageTransition from '../../components/PageTransition'
import Title from '../../components/Title'
import { MdContentCopy } from 'react-icons/md'
import Email from '@/components/contact/Email'
import Contact from '@/components/contact/Contact'

export const metadata = {
  title: 'Contact - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const ContactPage = () => {


  return (
    <PageTransition width = 'w-4/5'>
      <Title title = {'Lets Connect!'} pageNo = {'04'} />
      <div className = 'w-full flex justify-center mt-20'>
        <div className = 'w-4/5 text-center text-xl'>
          <Contact />
          <Email/>
        </div>
      </div>
      
      
    </PageTransition>
  )
}

export default ContactPage