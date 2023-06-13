import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeClient from './HomeClient'
import { MdFacebook } from 'react-icons/md'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/Ai'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex flex-col text-center items-center">
      <div className = 'w-3/5'>
        <HomeClient/>  
      </div>
      
    </main>
  )
}
