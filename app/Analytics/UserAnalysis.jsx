"use client";

import Barchart from "./Barchart";
import Linechart from "./Linechart";

const UserAnalysis = () => {
  return (
    <div className="   m-4 ">
      <h2 className=" flex  text-center justify-center items-center p-3 m-3 font-serif text-2xl uppercase"> analytics </h2>
      <div className=" md:grid md:grid-cols-3 flex flex-col items-center justify-center divide-y-0">
        <div className=" flex justify-center items-center m-2 ">
          <Barchart />
        </div>
        <div className=" flex justify-center items-center m-2">
          <Linechart />
        </div>

      </div>
    </div>
  );
};

export default UserAnalysis;
