
import { Inter } from 'next/font/google'
import HomeClient from './HomeClient'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className="flex flex-col items-center">
      <div className = 'w-3/5'>
        <HomeClient/>  
      </div>
    </main>
  )
}
