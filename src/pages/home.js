import React from "react";
import TopNav from "../components/TopNav";
import Image from "next/image";

export default function home() {
  return (
    <div>
      <TopNav />
      <div className="mt-10 mx-20">
        <div className="bg-red-500 w-full p-4 py-8 rounded-md">
          <h1 className="text-2xl font-Poppins">Random</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="relative h-full w-full">
            <Image
              src="https://www.zerowicket.com/wp-content/uploads/2015/11/497335744.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-md "
              alt="profile"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {/* <img
              className="w-full"
              src="https://picsum.photos/200"
              alt="Sunset in the mountains"
            /> */}
              <div>
                <div className="relative h-28 w-full">
                  <Image
                    src="https://www.zerowicket.com/wp-content/uploads/2015/11/497335744.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="px-2 py-4 custom-gray">
                  <div className="font-bold text-xl mb-2">Avatar lvl.</div>
                  <p className="text-[#9a9999] text-base pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative h-28 w-full">
                  <Image
                    src="https://www.zerowicket.com/wp-content/uploads/2015/11/497335744.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="px-2 py-4 custom-gray">
                  <div className="font-bold text-xl mb-2">Avatar lvl.</div>
                  <p className="text-[#9a9999] text-base pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* <img
              className="w-full"
              src="https://picsum.photos/200"
              alt="Sunset in the mountains"
            /> */}
              <div>
                <div className="relative h-28 w-full">
                  <Image
                    src="https://www.zerowicket.com/wp-content/uploads/2015/11/497335744.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="px-2 py-4 custom-gray">
                  <div className="font-bold text-xl mb-2">Avatar lvl.</div>
                  <p className="text-[#9a9999] text-base pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div>
                <div className="relative h-28 w-full">
                  <Image
                    src="https://www.zerowicket.com/wp-content/uploads/2015/11/497335744.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="px-2 py-4 custom-gray">
                  <div className="font-bold text-xl mb-2">Avatar lvl.</div>
                  <p className="text-[#9a9999] text-base pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
