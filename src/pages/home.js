import React from "react";
import TopNav from "../components/TopNav";
import Image from "next/image";
import Exploreicc from "../components/Exploreicc";
import ParticipateContests from "../components/ParticipateContests";
import HomeAvatar from "../components/HomeAvatar";
import HomeTokens from "../components/HomeTokens";

export default function home() {
  return (
    <div>
      <TopNav />
      <div className="mt-10 mx-20">
        <div className=" relative flex h-48 w-full rounded-md items-center">
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
            <h1 className="text-4xl font-Poppins">ICC STORE</h1>
            <p className="mt-1">
              Buy with ICC-TX and get 30% off on all products.
            </p>
            <button className=" bg-white text-black px-4 py-2 rounded-md mt-2">
              View Store
            </button>
          </div>
        </div>

        <HomeAvatar />   
        <HomeTokens />
        <h1 className="text-2xl font-Poppins text-custom-white mt-10">
          Latest Trending
        </h1>

        {/* latest trending */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="relative hover:backdrop-blur-xl cursor-pointer ">
            <div className="relative h-full w-full hover:opacity-70">
              <Image
                src="/img2.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div>
            <div className="absolute bottom-0 mx-10">
              <div className="flex flex-row mb-2">
                <div className="relative h-10 w-10 rounded-full">
                  <Image
                    src="/icctvlogo.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>
                <h1 className=" text-white rounded-xl ml-2">ICC TV</h1>
              </div>
              <div className="text-3xl text-white mb-6 tracking-wide leading-relaxed font-semibold">
                India wins the T20 World Cup after 6 years. Kohli hits a 100 and
                takes the cup home.
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {/* <img
              className="w-full"
              src="https://picsum.photos/200"
              alt="Sunset in the mountains"
            /> */}
              <div className="relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/img3.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="absolute bottom-0 px-2 py-4 backdrop-blur-lg bg-black/40  w-full">
                  <div className=" mb-2 flex flex-row items-center">
                    <div className="relative h-8 w-8">
                      <Image
                        src="/wt20wc.svg"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full "
                        alt="profile"
                      />
                    </div>
                    <p className="ml-2 text-custom-white font-Poppins">
                      Icc Womens World Cup
                    </p>
                  </div>
                  <p className="text-white text-base pb-2">
                    Kohli gets Mom award for 5th time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="absolute bottom-0 px-2 py-4 backdrop-blur-lg bg-black/40  w-full">
                  <div className=" mb-2 flex flex-row items-center">
                    <div className="relative h-8 w-8">
                      <Image
                        src="/icctvlogo.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full "
                        alt="profile"
                      />
                    </div>
                    <p className="ml-2 text-custom-white font-Poppins">
                      Icc Mens World Cup
                    </p>
                  </div>
                  <p className="text-white text-base pb-2">
                    Kohli gets Mom award for 5th time.
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
              <div className="relative">
                <div className="relative h-full w-full">
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="absolute bottom-0 px-2 py-4 backdrop-blur-lg bg-black/40  w-full">
                  <div className=" mb-2 flex flex-row items-center">
                    <div className="relative h-8 w-8">
                      <Image
                        src="/icctvlogo.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full "
                        alt="profile"
                      />
                    </div>
                    <p className="ml-2 text-custom-white font-Poppins">
                      Icc Mens World Cup
                    </p>
                  </div>
                  <p className="text-white text-base pb-2">
                    Kohli gets Mom award for 5th time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-72 w-full">
                  <Image
                    src="/img4.jpeg"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md "
                    alt="profile"
                  />
                </div>

                <div className="absolute bottom-0 px-2 py-4 backdrop-blur-lg bg-black/40  w-full">
                  <div className=" mb-2 flex flex-row items-center">
                    <div className="relative h-8 w-8">
                      <Image
                        src="/crictoslogo.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full "
                        alt="profile"
                      />
                    </div>
                    <p className="ml-2 text-custom-white font-Poppins">
                      Crictos
                    </p>
                  </div>
                  <p className="text-white text-base pb-2">
                    Rohit sharma launches an NFT collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* explore icc */}
        <h1 className="text-2xl font-Poppins text-custom-white mt-10">
          Explore ICC
        </h1>
        <div className="grid grid-cols-6 gap-4 mt-4">
          <Exploreicc />
          <Exploreicc />
          <Exploreicc />
          <Exploreicc />
          <Exploreicc />
          <Exploreicc />
        </div>

        {/* explore events */}
        <h1 className=" font-Poppins text-2xl text-custom-white mt-10">
          Explore events
        </h1>
        <div className=" relative flex h-48 w-full rounded-md items-center mt-4">
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
            <h1 className="text-4xl font-Poppins">Meet and Greet with Dhoni</h1>
            <p className="mt-1">
              Check your avatar level and get a chance to meet Dhoni
            </p>
            <button className=" bg-white text-black px-4 py-2 rounded-md mt-2">
              Go to event
            </button>
          </div>
        </div>

        {/* participate in contests */}
        <h1 className=" font-Poppins text-2xl text-custom-white mt-10">
          Participate in contests
        </h1>
        <div className="grid grid-cols-4 gap-6 mt-4 mb-10">
          <ParticipateContests title="lorem ipsum" img="/contesthome1.png" />
          <ParticipateContests title="lorem ipsum" img="/contesthome1.png" />
          <ParticipateContests title="lorem ipsum" img="/contesthome1.png" />
          <ParticipateContests title="lorem ipsum" img="/contesthome1.png" />
        </div>
      </div>
    </div>
  );
}
