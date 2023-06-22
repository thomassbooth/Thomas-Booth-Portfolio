'use client'

import { motion } from 'framer-motion'

interface listProps {
    children: React.ReactNode
    title: string
    direction: 'up' | 'down'
}

const List: React.FC<listProps> = ({ children, title, direction }) => {

  return (
    <div className = 'flex flex-col items-center'>
        <h3 className = 'font-medium tracking-wider text-lg'>{title}</h3>
        <motion.ul 
            initial = 'hidden'
            whileInView="visible"
            viewport={{ once: true }}
            variants = {{
              hidden: (direction === 'up') ? {opacity: 0, y: '-40%'} : {opacity: 0, y: '40%'},
              visible: {opacity: 1, y: '0'}
            }}
            transition = {{delay: 0.8}}
            className = 'mt-5 flex flex-col border-l-2 border-pastel-brown-dark gap-5'>
            {children}
        </motion.ul>
    </div>
  )
}

export default List