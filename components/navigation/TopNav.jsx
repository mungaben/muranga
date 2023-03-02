

"use client"

import React from 'react'






import Image from 'next/image'
import { Link } from 'react-scroll'
import {CSSTransition,TransitionGroup } from 'react-transition-group'


const TopNav = () => {
    return (

        <div class="shadow-xl rounded-b-lg border-b-2 border-b-black  w-full fixed top-0 z-50" >
            <div className=' flex  justify-between items-center mx-2  bg-transparent  '>
                {/* left nav */}
                <div class=" border-none ml-2 mt-2 rounded-full   ">
                    <Image src="/Logo.jpeg"
                        width={70}
                        height={70}
                        priority
                    />

                </div>


                {/* right nav drop down */}
                <div className=' flex '>
                    <div className=' flex  justify-start  space-x-4'>
                        <div>
                            <Link
                                className=''
                                to='home'
                            >
                                About
                            </Link>
                        </div>
                        <div>
                            <Link
                                className=''
                                to='home'
                            >
                                Academics
                            </Link>

                        </div>
                        <div>
                            <Link
                                className=''
                                to='home'
                            >
                                Student life
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    )
}

export default TopNav