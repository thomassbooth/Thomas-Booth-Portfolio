'use client'

import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes';

const DarkmodeIcon = () => {
    const { theme, setTheme } = useTheme()
    
  return (
    <div>
      {(theme === undefined || theme === 'light' )? <MdDarkMode className = 'transition-all' onClick = {() => {setTheme('dark')}}/> : <MdOutlineDarkMode className = 'transition-all' onClick = {() => {setTheme('light')}}/>}
    </div>
    
  )
}

export default DarkmodeIcon