





"use client"
import React, { Children } from 'react'
import { ThemeProvider } from 'next-themes'
import TopNav from './navigation/TopNav'

const Themes = ({Children}) => {
  return (
    <ThemeProvider  enableSystem={true} attribute="class" >
      <div>
      <TopNav/>
      
      {Children}
      </div>
     
    </ThemeProvider>
   
  )
}

export default Themes