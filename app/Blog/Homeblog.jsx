
"use client"
import React, { useState } from 'react'
import Image from "next/image";
import UserAnalysis from '../Analytics/UserAnalysis';

const Homeblog = () => {
    const [hoverart, sethoverart] = useState(false)

    return (
        <div>
            <div className=" mx-2 p-1 mt-4 flex flex-col dark:bg-black">
                <div className=" flex items-center justify-center">
                    <h1 className=" text-3xl font-bold  hover:underline ">Hot and New</h1>
                </div>

                {/* FROM BACKEND ATLEAST 3 BLOGS MD SM:1  */}
                <div className=" grid md:grid-cols-3 mx-4 text-left items-center justify-center mt-6    ">
                    <div className=' '>
                        <div>
                            <Image
                                className={`rounded-lg p-1 m-2 ${hoverart && "bg-black"} w-32 h-32 `}
                                onMouseEnter={() => sethoverart(!hoverart)}

                                src="/imagen.jpg"
                                width={300}
                                height={300}
                                alt="hot in campus"
                                priority
                            />
                        </div>
                        <div className=" mx-2 flex flex-col justify-start items-center line-clamp-2 mr-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                            similique fugit sed laborum. Perspiciatis soluta iste, dignissimos
                            id asperiores, eveniet necessitatibus quod commodi incidunt earum
                            accusamus enim alias et ipsa, rem maxime. Molestiae eveniet minus
                            accusantium accusamus nesciunt impedit tempora, sint totam, omnis
                            quibusdam explicabo vel, ipsum debitis iste fuga!
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                className={`rounded-lg p-1 m-2 ${hoverart && "bg-black"} w-32 h-32 `}
                                onMouseEnter={() => sethoverart(!hoverart)}
                                src="/imagen.jpg"
                                width={300}
                                height={300}
                                alt="hot in campus"
                            />
                        </div>
                        <div className=" mx-2 flex flex-col justify-start items-center line-clamp-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                            similique fugit sed laborum. Perspiciatis soluta iste, dignissimos
                            id asperiores, eveniet necessitatibus quod commodi incidunt earum
                            accusamus enim alias et ipsa, rem maxime. Molestiae eveniet minus
                            accusantium accusamus nesciunt impedit tempora, sint totam, omnis
                            quibusdam explicabo vel, ipsum debitis iste fuga!
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image
                                className={`rounded-lg p-1 m-2 ${hoverart && "bg-white"} w-32 h-32 `}
                                onMouseEnter={() => sethoverart(!hoverart)}
                                src="/imagen.jpg"
                                width={300}
                                height={300}
                                alt="hot in campus"
                            />
                        </div>
                        <div className=" mx-2 flex flex-col justify-start items-center line-clamp-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                            similique fugit sed laborum. Perspiciatis soluta iste, dignissimos
                            id asperiores, eveniet necessitatibus quod commodi incidunt earum
                            accusamus enim alias et ipsa, rem maxime. Molestiae eveniet minus
                            accusantium accusamus nesciunt impedit tempora, sint totam, omnis
                            quibusdam explicabo vel, ipsum debitis iste fuga!
                        </div>
                    </div>
                </div>
            </div>
            <div className=' grid grid-cols-3 bg-black justify-center m-5 mx-20 mr-48  p-0.5 content-center'/>
               <UserAnalysis/>
 
           
        </div>
    )
}

export default Homeblog