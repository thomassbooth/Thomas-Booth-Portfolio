import { useGlobalContext } from '@/app/Providers/GlobalProvider'
import React from 'react'

import { BsCircleFill, BsCircle } from 'react-icons/bs'
import { FiCircle } from 'react-icons/fi'

const CircleToggle = () => {

    const { setMouseCircleEnabled, mouseCircleEnabled } = useGlobalContext()
  return (
    <div>
      <label className = 'absolute text-xs  w-20 -translate-y-5 -translate-x-2 rotate-12'>click me</label>
    {
        mouseCircleEnabled 
        ? <BsCircleFill className = 'transition-all hover:text-pastel-blue-dark-100 duration-500' onClick = {() => setMouseCircleEnabled(!mouseCircleEnabled)}/>
        : <FiCircle className = 'transition-all hover:text-pastel-blue-dark-100 duration-500' onClick = {() => setMouseCircleEnabled(!mouseCircleEnabled)}/>
    }
    </div>
  )
}

export default CircleToggle