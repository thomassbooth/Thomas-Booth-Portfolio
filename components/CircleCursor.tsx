'use client'

import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { useGlobalContext } from "@/app/Providers/GlobalProvider"

const CircleCursor = () => {
      
      const { mousePosition, setMousePosition, cursorVariant } = useGlobalContext()
      
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
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        },
        text: {
          height: 100,
          width: 100,
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          backgroundColor: '#F9F3EE',
          mixBlendMode: 'difference'
        }
      }
  
  return (
    <>
        <motion.div 
        className = 'bg-pastel-brown-dark pointer-events-none h-8 w-8 rounded-full z-20 fixed top-0 left-0'
        // @ts-ignore
        variants = {mouseVariants} 
        animate = {cursorVariant}/>
    </>
  )
}

export default CircleCursor