





"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
import TopNav from './navigation/TopNav'
import Noneplayer from './navigation/Noneplayer'
import Hotincampus from './Hotincampus'
import Servercomp1 from './Servercomp1'

const Themes = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" >

      {/* <TopNav />
      <Noneplayer />
      <Servercomp1/> */}
      {/* <Hotincampus /> */}
      {children}

    </ThemeProvider>

  )
}

export default Themes