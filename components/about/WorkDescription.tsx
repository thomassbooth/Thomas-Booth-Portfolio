'use client'

import { MdKeyboardArrowRight } from 'react-icons/md'

interface workdescriptionProps {
    description: string
}

const WorkDescription: React.FC<workdescriptionProps> = ({ description }) => {
  return (
    <div>
        <div className = 'flex items-center gap-4'>
            <span className = 'text-pastel-blue-dark text-base'>{'-'}</span>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WorkDescription