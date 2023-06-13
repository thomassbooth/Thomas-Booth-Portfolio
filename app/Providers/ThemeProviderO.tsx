'use client'

import { ThemeProvider } from 'next-themes'

const ThemeProviderO = ({children}) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default ThemeProviderO