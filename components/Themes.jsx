





"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
import TopNav from './navigation/TopNav'
import Noneplayer from './navigation/Noneplayer'
import Hotincampus from './Hotincampus'

const Themes = () => {
  return (
    <ThemeProvider enableSystem={true} attribute="class" >

      <TopNav />
      <Noneplayer />
      <Hotincampus />

    </ThemeProvider>

  )
}

export default Themes