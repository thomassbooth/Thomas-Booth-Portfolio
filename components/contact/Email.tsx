'use client'

import { MdContentCopy } from 'react-icons/md'
import toast from 'react-hot-toast'

const Email = () => {

  const copyToClip = () => {
    navigator.clipboard.writeText('thomasbooth26@gmail.com');
    toast.success('copied to clipboard')
  }

  return (
    <p className = 'text-sm opacity-40'>
        Dont like pop ups? Find me at:
        <br/>
        <span className ='flex justify-center items-center font-medium'>
            thomasbooth26@gmail.com
            <MdContentCopy size = {20} onClick = {() => copyToClip()} className = 'hover:scale-105 transition-all duration-300 ml-2 cursor-pointer text-gray-800'/>
        </span>
    </p>
  )
}

export default Email