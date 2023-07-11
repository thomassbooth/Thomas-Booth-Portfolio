'use client'

import { useGlobalContext } from "@/app/Providers/GlobalProvider"
import { motion } from 'framer-motion'

const Contact = () => {

    const { textEnter, textLeave } = useGlobalContext()
  return (
    <>
      <motion.p
        initial={{ x: '50%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{delay: 1, type: 'spring', duration: 0.5, }}>
          Ready to <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>talk</span> about <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold' >your</span> next big idea or just fancy a <span onMouseEnter = {textEnter} onMouseLeave = {textLeave} className = 'font-semibold'>chat</span>?
      </motion.p>
      <a href="mailto:thomasbooth26@gmail.com">
        <div className = 'inline-block text-[#F9F3EE] px-5 py-3 bg-pastel-blue-light hover:bg-pastel-blue-dark/80 hover:scale-[1.02] transition-all items-center gap-2 my-12 font-medium text-2xl'>
          Get In Touch
        </div>
      </a>  
    </>
  )
}

export default Contact