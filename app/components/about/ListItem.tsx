'use client'

import { IconType } from "react-icons"
import { motion } from 'framer-motion'

interface listItemProps {
    tech: string
    icon?: IconType
}

const ListItem: React.FC<listItemProps> = ({ tech, icon: Icon }) => {
  return (
    <>
        <motion.li 
          initial = {{opacity: 0, x: '20%'}}
          animate = {{opacity: 1, x: '0%'}}
          transition = {{delay: 1}}
          className = 'flex group'>
            <div className = 'group-hover:scale-125 group-hover:ring-pastel-brown-light duration-300 transition-all rounded-full translate-x-[-4.8px] bg-pastel-white ring-pastel-brown-dark ring-2 w-2 h-2'/>
            <span className = '-translate-y-2 flex ml-4 items-center gap-2'>
                {Icon && <Icon size = {30}/>}
                <span className = 'ml-2'>{tech}</span>
            </span>
        </motion.li>
    </>
  )
}

export default ListItem