'use client'

import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

type mousePosition = {
    x: number
    y: number
}

interface contextProps {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    mousePosition: mousePosition
    setMousePosition: Dispatch<SetStateAction<mousePosition>> 
    cursorVariant: string
    setCursorVariant: Dispatch<SetStateAction<string>>
    mouseCircleEnabled: boolean
    setMouseCircleEnabled: Dispatch<SetStateAction<boolean>>
    textEnter: () => void
    textLeave: () => void
}

const GlobalContext = createContext<contextProps>({
    loading: true,
    setLoading: (): boolean => true,
    mousePosition: {x: 0, y: 0},
    setMousePosition: () => {},
    cursorVariant: '',
    setCursorVariant: () => '',
    mouseCircleEnabled: false,
    setMouseCircleEnabled: () => true,
    textEnter: () => '',
    textLeave: () => ''
})

export const GlobalContextProvider = ({ children } : { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [loading, setLoading] = useState(pathname === '/' ? true: false )
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
      })
    const [cursorVariant, setCursorVariant] = useState('default')
    const [mouseCircleEnabled, setMouseCircleEnabled] = useState(false)
    const textEnter = () => {
        setCursorVariant('text')}
    const textLeave = () => setCursorVariant('default')

    return (
        <GlobalContext.Provider value = {{ mouseCircleEnabled, setMouseCircleEnabled, textEnter, textLeave, loading, setLoading, mousePosition, setMousePosition, cursorVariant, setCursorVariant }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)