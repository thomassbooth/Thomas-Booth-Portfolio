import React from 'react'
import PageTransition from '../../components/PageTransition'
import Title from '../../components/Title'
import { MdContentCopy } from 'react-icons/md'
import Email from '@/components/contact/Email'

export const metadata = {
  title: 'Contact - Thomas Booth',
  description: 'Professional portfolio designed and written by Thomas Booth.',
}

const ContactPage = () => {

  const copyToClip = () => {
    navigator.clipboard.writeText('thomasbooth26@gmail.com');
  }
  return (
    <PageTransition width = 'w-4/5'>
      <Title title = {'Lets Connect!'} pageNo = {'04'} />
      <div className = 'w-full flex justify-center mt-20'>
        <div className = 'w-4/5 text-center text-xl'>
          <p>
            Ready to <span className = 'font-semibold'>talk</span> about your next big idea or just fancy a <span className = 'font-semibold'>chat</span>?
          </p>
          <a href="mailto:thomasbooth26@gmail.com">
            <div className = 'inline-block text-[#F9F3EE] px-5 py-3 bg-pastel-blue-light hover:bg-pastel-blue-dark/80 hover:scale-[1.02] transition-all items-center gap-2 my-12 font-medium text-lg'>
              Get In Touch
            </div>
          </a>
          <Email/>
        </div>
      </div>
      
      
    </PageTransition>
  )
}

export default ContactPage