import React from 'react'
import ListItem from './ListItem'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs, FaReact } from 'react-icons/fa'

interface listProps {
    children: React.ReactNode
    title: string
}

const List: React.FC<listProps> = ({ children, title }) => {

  return (
    <div className = 'flex flex-col items-center'>
        <p className = 'font-bold text-lg'>{title}</p>
        <ul className = 'mt-5 flex flex-col border-l-2 border-pastel-brown-dark gap-5'>
            {children}
        </ul>
    </div>
  )
}

export default List