'use client'

import { MdContentCopy } from 'react-icons/md'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Email = () => {

  const copyToClip = () => {
    navigator.clipboard.writeText('thomasbooth26@gmail.com');
    toast.success('copied to clipboard')
  }

  return (
    <motion.p 
      initial={{ x: '-50%', opacity: 0 }}
      animate={{ x: '0%', opacity: 0.7 }}
      transition={{delay: 1.5, type: 'spring', duration: 1}}
      className = 'text-sm'>
        Dont like pop ups? Find me at:
        <br/>
        <span className ='flex justify-center items-center font-medium'>
            thomasbooth26@gmail.com
            <MdContentCopy size = {20} onClick = {() => copyToClip()} className = 'hover:scale-105 transition-all duration-300 ml-2 cursor-pointer text-gray-800'/>
        </span>
    </motion.p>
  )
}

export default Email