


import React from 'react'
import {GiLoveMystery} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
    <div className=' flex md:justify-between  justify-between mx-10 '>
        <div>links </div>
        <div> associations </div>
        <div>socials</div>
    </div>
    <div className=' flex justify-center items-center '> created with <span className=' text-red-500 mx-4  '> <GiLoveMystery/></span> from  <span className='hover:uppercase mx-2'>Muranga</span> </div>
    </footer>
  )
}

export default Footer