import { useGlobalContext } from '@/app/Providers/GlobalProvider'
import React from 'react'

import { BsCircleFill, BsCircle } from 'react-icons/bs'

const CircleToggle = () => {

    const { setMouseCircleEnabled, mouseCircleEnabled } = useGlobalContext()
  return (
    <div>
    {
        mouseCircleEnabled 
        ? <BsCircleFill className = 'transition-all' onClick = {() => setMouseCircleEnabled(!mouseCircleEnabled)}/>
        : <BsCircle className = 'transition-all' onClick = {() => setMouseCircleEnabled(!mouseCircleEnabled)}/>
    }
    </div>
  )
}

export default CircleToggle