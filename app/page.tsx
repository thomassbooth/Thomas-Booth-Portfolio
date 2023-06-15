
import { Inter } from 'next/font/google'
import HomeClient from './HomeClient'
import PageTransition from './components/PageTransition'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <PageTransition>
    <main className="flex flex-col items-center">
      <div className = 'w-3/5'>
        <HomeClient/>  
      </div>
    </main>
    </PageTransition>
  )
}
