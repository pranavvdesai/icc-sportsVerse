import React from "react";
import TopNav from "../components/TopNav";
import ContestCard from "../components/ContestCard";
import Image from "next/image";
const contests = () => {
  return (
    <>
      <TopNav />
      <div className="text-6xl extra-bold text-custom-white font-Poppins mx-10 my-5 ">PLAY</div>
      <div className="text-xl bold text-custom-gray mx-10 ">
        Own moments and player cards to experience cricket like never before.
        Submit your sets to win cash rewards and other goodies in the world’s
        best cricket strategy game!
      </div>
      <div className=" mt-10 text-custom-white mx-10">
        {/* {
                    data.map((item) => {
                        return (
                            <ContestCard item={item} />
                        )
                    })
                } */}
        {/* <ContestCard /> */}
        <div className="grid grid-cols-3 gap-4">
          <div className="relative custom-gray rounded-md border border-slate-500">
            <div className="p-4">
              <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                Free to play
              </div>
              <h1 className="font-Poppins text-custom-white text-3xl mb-10">
                Fantasy
              </h1>
              <p>REWARDS</p>
              <p>200 ICTX</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default contests;
