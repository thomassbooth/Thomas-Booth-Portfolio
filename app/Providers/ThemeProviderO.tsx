'use client'

import { ThemeProvider } from 'next-themes'

interface ThemeProviderOProps {
  children: React.ReactNode
}
const ThemeProviderO: React.FC<ThemeProviderOProps> = ({children}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default ThemeProviderO