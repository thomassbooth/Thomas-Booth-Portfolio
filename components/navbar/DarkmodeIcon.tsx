'use client'

import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes';

const DarkmodeIcon = () => {
    
  return (
    <div>
      <MdDarkMode className = 'transition-all'/>
    </div>
    
  )
}

export default DarkmodeIcon