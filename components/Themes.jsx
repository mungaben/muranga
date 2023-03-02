





"use client"
import { ThemeProvider } from 'next-themes'

const Themes = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" >
      {children}

    </ThemeProvider>

  )
}

export default Themes