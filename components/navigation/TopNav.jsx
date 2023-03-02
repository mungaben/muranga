

"use client"






import Image from 'next/image'
import { Link } from 'react-scroll'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useTheme } from "next-themes";
import { useState } from 'react'
import {
    RiMenu2Fill,
    RiMoonFill,
    RiMoonLine,
    RiSunFill,
    RiSunLine,
    RiCloseLine,
    
  } from "react-icons/ri";


const TopNav = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [color, setcolor] = useState(false)
    const currentTheme = theme === "system" ? systemTheme : theme;
    


    return (
        <div>

            <div class="shadow-xl rounded-b-lg border-b-2 border-b-black  w-full fixed top-0 z-50 " >
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
            <div className=' bg-green-300'>
                <div className=' fixed  bottom-4 right-3'>
                    heloo
                    {currentTheme === "dark" ? (
                        <button onClick={() => setTheme("light")}>
                            <RiSunLine size={25} />
                        </button>
                    ) : (
                        <button onClick={() => setTheme("dark")}>
                            <RiMoonLine size={25} />
                        </button>
                    )}

                </div>



            </div>
        </div>


    )
}

export default TopNav