
" use client "
import React from 'react'
import { Bar } from 'react-chartjs-2'

const Barchart = ({chartdata}) => {
  return (
    <Bar data={chartdata}/>
  )
}

export default Barchart