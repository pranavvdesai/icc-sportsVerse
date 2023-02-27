import React from 'react'
import Image from 'next/image'

export default function ParticipateContests({title, img, entryCost, rewards, startsIn}) {
  return (
    <div className=" relative flex flex-col">
      <div className=" relative h-96 w-[100%]  ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-md "
          alt="profile"
        />
      </div>
      <h1 className="absolute top-0 text-custom-white text-2xl font-Poppins ml-3 mt-5 justify-self-start">
        {title}
      </h1>
      
      <h1 className="absolute bottom-5 text-lg text-custom-white font-Poppins ml-4 mb-4">
        Rewards
      </h1>
      <h1 className="absolute bottom-0 text-sm text-custom-white font-Poppins ml-4 mb-4">
        1000 ICTX
      </h1>
      <h1 className="absolute text-md bottom-5 right-0 text-custom-white font-Poppins mr-4 mb-4">
        STARTS IN
      </h1>
      <p className="absolute text-sm bottom-0 right-0 text-custom-white font-Poppin mr-4 mb-4">
        00:00:00 hrs
      </p>
    </div>
  );
}
