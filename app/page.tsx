import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeClient from './HomeClient'
import { MdFacebook } from 'react-icons/md'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex flex-col text-center items-center">
      <div className = 'w-3/5'>
        <HomeClient/>
        <p className = 'text-center mt-5'>
          Welcome to my online abode! Im, a seasoned software engineer passionately committed 
          to weaving the web one design at a time. I create digital spaces that not only look beautiful
          but are underpinned by seamless functionality, intuitive interfaces, and designs that embody the 
          brand spirit of each client.
        </p>
        <div>
          <MdFacebook/>
        </div>
      </div>
      
    </main>
  )
}
