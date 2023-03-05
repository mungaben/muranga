"use client";

import { useState } from "react";

import Schoolslist from "@/app/schools/schoolslist";

const Noneplayer = () => {
  const [showschls, setshowschls] = useState(false);
  const [hoverart, sethoverart] = useState(false);
  return (
    <div className=" z-40 bg-transparent rounded-lg shadow-lg border-b-4 border-b-black ">
      {/* <Suspense fallback={<div> loading vedio</div>} > */}
      <div className=" mx-2 mt-24 relative ">
        <video
          className={` w-full object-cover bg-black aspect-auto `}
          loop
          autoPlay={true}
          muted
          width="100%"
          height="100%"
        >
          <source src="/collagevid.mp4" />
        </video>
        <div></div>
        <div className=" absolute md:top-1/4 md:bottom-1/4 md:ml-10 md:mr-10 flex justify-center items-center md:right-1/4 md:left-1/4   hover:opacity-100  opacity-0 top-0 mx-10">
          <div className=" w-full flex flex-col justify-center items-center p-2 m-2 shadow-2xl  border-b-2 border-b-black rounded-b-2xl">
            <div className=" m-4 p-2 text-center text-2xl font-semibold text-white">
              Take a tour
            </div>
            <div className=" m-4 p-2 text-white">hello</div>
          </div>
        </div>
        <div
          className={`md:absolute  bottom-0 md:ml-10 mt-4  md:flex justify-center md:items-start items-center flex-col md:right-2 hover:opacity-100 opacity-100`}
        >
          <div className=" w-full md:flex md:flex-col justify-center items-center md:p-2 md:m-2 shadow-2xl  md:border-b-2 border-b-black rounded-b-2xl">
            <div className=" m-1 text-center text-2xl font-semibold text-white flex md:mt-6">
              {/* <Servercomp1> */}

              {<Schoolslist />}
            </div>
            {/* <div className=" m-4 p-2 text-white">hello</div> */}
          </div>
        </div>
      </div>
      {/* </Suspense>  */}
    

    </div>
  );
};

export default Noneplayer;
