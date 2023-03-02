
"use client"


import React, { Suspense } from 'react'





import ReactPlayer from 'react-player'

const Noneplayer = () => {
    return (
        <div className=' z-40  hover:bg-black'>

            {/* <Suspense fallback={<div> loading vedio</div>} > */}
                <div className=' mx-2 mt-24 relative '>
                    <ReactPlayer
                    className='w-full object-cover bg-black aspect-video  '
                        url="/collagevid.mp4"
                        width="100%"
                        height="100%"
                        playing={true}

                        autoPlay={true}
                        loop={true}
                        muted={true}
                        volume={0.5}

                        onEnd={() => {
                            console.log('end')
                        }}
                        onPlay={() => {
                            console.log('play')
                           
                        }}
                        onPause={() => {
                            console.log('pause')
                        }}
                        // onProgress={() => {
                        //     console.log('progress')
                        // }}
                        // onTimeUpdate={() => {
                        //     console.log('time update')
                        // }}
                        onVolumeChange={() => {
                            console.log('volume change')
                        }}
                        onError={() => {
                            console.log('error')
                        }}
                        onLoadedMetadata={() => {
                            console.log('loaded metadata')
                        }}
                        onLoadedData={() => {
                            console.log('loaded data')
                        }}



                    />
                    <div>

                    </div>

                </div>
            {/* </Suspense>  */}
            <div className=' absolute top-1/4 bottom-1/4 ml-10 mr-10 flex justify-center items-center right-1/4 left-1/4  hover:opacity-100 opacity-10' >
                <div className=' w-full flex flex-col justify-center items-center p-2 m-2 shadow-2xl  border-b-2 border-b-black rounded-b-2xl'>
                    <div className=' m-4 p-2 text-center text-2xl font-semibold text-white' >
                        Take a tour

                    </div>
                    <div className=' m-4 p-2 text-white'>
                        hello 

                    </div>
    
                </div>

            </div>

        </div>
    )
}

export default Noneplayer