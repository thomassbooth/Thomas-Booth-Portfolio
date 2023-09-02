'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { useGlobalContext } from '../app/Providers/GlobalProvider'

const OuterContainer = ({ children }: { children: React.ReactNode}) => {

    const { loading } = useGlobalContext()

    useEffect(() => {
      const lenis = new Lenis()
      
      function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
    }, [])
  return (
    <>
    { !loading 
    ? (<div className = 'pb-20 relative transition-colors text-pastel-brown-dark sm:px-6 md:px-20 2xl:px-32'>
        {children}
        </div>)
    : (<>
        {children}
    </>)
    }
    </>
    
  )
}

export default OuterContainer