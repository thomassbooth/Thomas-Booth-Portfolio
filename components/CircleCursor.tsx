'use client'

import { useEffect } from "react"
import { motion } from 'framer-motion'
import { useGlobalContext } from "@/app/Providers/GlobalProvider"

const CircleCursor = () => {
      
      const { mouseCircleEnabled, loading, mousePosition, setMousePosition, cursorVariant } = useGlobalContext()
      
      useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
        window.addEventListener('mousemove', mouseMove)
  
        return () => {
          window.removeEventListener('mousemove', mouseMove)
        }
      }, [])
      
      const mouseVariants = {
        default: {
          x: mousePosition.x - 24,
          y: mousePosition.y - 24
        },
        text: {
          height: 100,
          width: 100,
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          backgroundColor: '#F9F3EE',
        }
      }
  
  return !loading && mouseCircleEnabled &&(
    <>
        <motion.div 
        className = 'hidden md:block bg-[#F9F3EE] mix-blend-difference pointer-events-none h-12 w-12 rounded-full z-20 fixed top-0 left-0'
        // @ts-ignore
        variants = {mouseVariants} 
        animate = {cursorVariant}/>
    </>
  )
}

export default CircleCursor