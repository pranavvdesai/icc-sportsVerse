import React from "react";
import Image from "next/image";
export default function HomeTokens() {
  return (
    <div className="grid grid-cols-2 mt-10 relative">
      <div className=" font-Poppins text-custom-white ">
        <h1 className=" text-2xl mb-3">The All new ICC-TX Tokens are here</h1>
        <div className=" relative flex h-40 w-full rounded-md items-center mr-10">
          <div className="absolute h-[100%] w-full ">
            <Image
              src="/iccshop.png"
              layout="fill"
              objectFit="cover"
              className="rounded-md "
              alt="profile"
            />
          </div>
          <div className="p-4 absolute text-white font-Poppins backdrop-blur-3xl">
            <h1 className="text-2xl font-Poppins">Buy NFT match Tickets</h1>
            <p className="mt-1 text-sm">
              Buy match tickets and get ICC Tokens on a 1:1 ratio.
            </p>
            <button className=" bg-white text-black px-4 py-2 rounded-md mt-2">
              Buy Tickets
            </button>
          </div>
        </div>
        <div className=" relative flex h-40 w-full rounded-md items-center mr-10 mt-4">
          <div className="absolute h-[100%] w-full ">
            <Image
              src="/iccshop.png"
              layout="fill"
              objectFit="cover"
              className="rounded-md "
              alt="profile"
            />
          </div>
          <div className="p-4 absolute text-white font-Poppins backdrop-blur-3xl">
            <h1 className="text-2xl font-Poppins">Shop & Play</h1>
            <p className="mt-1 text-sm backdrop-blur-3xl">
              Buy merch, goodies, participate in contests and level up your
              avatar.
            </p>
            <button className=" bg-white text-black px-4 py-2 rounded-md mt-2">
              Take me there
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-96 ml-10">
        <Image
          src="/btc.png"
          layout="fill"
          objectFit="cover"
          className="rounded-md "
          alt="profile"
        />
      </div>
    </div>
  );
}
