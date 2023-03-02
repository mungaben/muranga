import React from 'react'



import Image from "next/image"

const Hotincampus = () => {
  return (
    <div className=' bg-transparent'>
        <div className=' mx-2 p-1 mt-4 flex flex-col'>
            <h1>Hotincampus</h1>
             <div className=' flex mx-2'>
                 <div>
                    <Image src="/imagen.jpg"
                    width={400}
                    height={400}
                    alt="hot in campus"
                    />
                 </div>
                 <div className=' mx-2 flex flex-col justify-start items-center'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci similique fugit sed laborum. Perspiciatis soluta iste, dignissimos id asperiores, eveniet necessitatibus quod commodi incidunt earum accusamus enim alias et ipsa, rem maxime. Molestiae eveniet minus accusantium accusamus nesciunt impedit tempora, 
                    sint totam, omnis quibusdam explicabo vel, ipsum debitis iste fuga!
                    
                 </div>
             </div>
             
        </div>
    </div>
  )
}

export default Hotincampus