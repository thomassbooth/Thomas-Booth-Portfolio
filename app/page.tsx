
import { Inter } from 'next/font/google'
import HomeClient from '../components/home/HomeClient'
import PageTransition from '../components/PageTransition'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <PageTransition width = {'w-4/6'}>
        <HomeClient/>
    </PageTransition>
  )
}
