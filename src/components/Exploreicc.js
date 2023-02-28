import React from 'react'
import Image from 'next/image'

export default function Exploreicc() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-28 w-full ">
        <Image
          src="/img1.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-md "
          alt="profile"
        />
      </div>
      <p className="text-white align-middle mx-auto justify-self-center">
        Lorem ipsum dolor.
      </p>
    </div>
  );
}
