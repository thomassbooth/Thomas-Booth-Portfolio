'use client'

import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import useDarkMode from "@/app/hooks/useDarkMode";

const DarkmodeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    
  return (
    <div>
      {!darkTheme ? <MdDarkMode className = 'transition-all' onClick = {handleMode}/> : <MdOutlineDarkMode className = 'transition-all' onClick = {handleMode}/>}
    </div>
    
  )
}

export default DarkmodeIcon