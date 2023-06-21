'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

interface contextProps {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<contextProps>({
    loading: true,
    setLoading: (): boolean => true
})

export const GlobalContextProvider = ({ children } : { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)

    return (
        <GlobalContext.Provider value = {{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)