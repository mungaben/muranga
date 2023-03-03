

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

            <div className="shadow-xl rounded-b-lg border-b-2 border-b-black  w-full fixed top-4 z-50 " >
                <div className=' flex  justify-between items-center mx-2  bg-transparent  '>
                    {/* left nav */}
                    <div className=" border-none ml-2 mt-2 rounded-full   ">
                        <Image src="/Logo.jpeg"
                            width={70}
                            height={70}
                            priority
                            alt='UNIVERSITY LOGO'
                        />


                    </div>


                    {/* right nav drop down */}
                    <div className=' flex ml-4 shadow-sm  border-l-4 border-l-black hover:border-l-8 hover:dark:bg-white '>
                        <div className=' flex  justify-start  space-x-4 divide-y-reverse '>
                            {/* <div className=' w-64 h-1 hover:dark:to-blue-100 bg-slate-300 absolute m-auto  underline  decoration-black decoration-y-4 decoration-wavy right-4 mt-3 border-y-2   opacity-40  border-slate-600 shadow-lg   '>

                                <br className=' bg-black ' />
                            </div> */}
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