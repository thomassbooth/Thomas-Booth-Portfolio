'use client'

import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes';
  
const DarkmodeIcon = () => {
    
  return (
    <div>
      <MdDarkMode className = 'hover:text-pastel-blue-dark-100 duration-500'/>
    </div>
    
  )
}

export default DarkmodeIcon