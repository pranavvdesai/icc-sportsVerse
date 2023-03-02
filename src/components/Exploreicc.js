import React from "react";
import Image from "next/image";

export default function Exploreicc({ text, src }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-28 w-full ">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="rounded-md "
          alt="profile"
        />
      </div>
      <p className="text-white align-middle mx-auto justify-self-center mt-4">
        {text}
      </p>
    </div>
  );
}
