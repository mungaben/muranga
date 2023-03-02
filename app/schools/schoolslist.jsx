"use client"
import React from 'react'


const Schoolslist = () => {
    const lists = [
        {
            name: "B.Tech",
            image: "url",
            description: "B.Tech is a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It",
        },
        {
            name: "B.Tech",
            image: "url",
            description: "B.Tech is a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It",
        },
        {

            name: "B.Tech",
            image: "url",
            description: "B.Tech is a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It's a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It's a free, open-source, cross-platform, responsive, HTML5-based",

        },
        {

            name: "B.Tech",
            image: "url",
            description: "B.Tech is a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It's a free, open-source, cross-platform, responsive, HTML5-based, responsive front-end framework for building responsive websites. It's a free, open-source, cross-platform, responsive, HTML5-based",

        },
    ]
    return (
        <div className='  grid  md:grid-cols-2 rounded-lg gap-4 shadow-lg font-mono text-sm font-bold hover:bg-green-700 hover:animate-pulse'  >
            {
                lists.map((item, index) => (

                    <div key={index} className='opacity-100  md:m-2 p-1 rounded-md hover:bg-green-800 hover:animate-pulse '>
                        <button>{item.name} </button>
                    </div>
                )

                )
            }
        </div>
    )
}

export default Schoolslist