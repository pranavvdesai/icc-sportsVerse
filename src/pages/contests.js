import React from "react";
import TopNav from "../components/TopNav";
import ContestCard from "../components/ContestCard";
import Image from "next/image";
import Link from "next/link";
const contests = () => {
  return (
    <>
      <TopNav />
      <div className="text-6xl extra-bold text-custom-white font-Poppins mx-10 my-5 ">
        PLAY
      </div>
      <div className="text-xl bold text-custom-gray mx-10 ">
        Own moments and player cards to experience cricket like never before.
        Submit your sets to win cash rewards and other goodies in the world’s
        best cricket strategy game!
      </div>
      <div className=" mt-10 text-custom-white mx-10">
        <div className="grid grid-cols-3 gap-4">
          <Link href="/leagues">
            <div className="relative custom-gray rounded-md border border-slate-500 cursor-pointer">
              <div className="p-4">
                <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                  Free to play
                </div>
                <h1 className="font-Poppins text-custom-white text-3xl mb-10">
                  Fantasy
                </h1>
                <p>REWARDS</p>
                <p>200 ICTX + 3 Avatar lvl</p>
              </div>
              <div className="absolute bottom-10 right-10 w-32 h-32 p-4 opacity-80">
                <Image
                  src="/wt20wc.svg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                  alt="profile"
                />
              </div>
            </div>
          </Link>
          <div className="relative custom-gray rounded-md border border-slate-500">
            <div className="p-4">
              <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                Free to play
              </div>
              <h1 className="font-Poppins text-custom-white text-3xl mb-10">
                Predict winner
              </h1>
              <p>REWARDS</p>
              <p>20 ICTX + 1 Avatar lvl</p>
            </div>
            <div className="absolute bottom-6 right-6 w-40 h-40 p-4 opacity-80">
              <Image
                src="/wtcf.png"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div>
          </div>

          <div className="relative custom-gray rounded-md border border-slate-500">
            <div className="p-4">
              <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                Free to play
              </div>
              <h1 className="font-Poppins text-custom-white text-3xl mb-10">
                Vote Now
              </h1>
              <p>REWARDS</p>
              <p>1000 ICTX + 2 Avatar lvl</p>
            </div>
            <div className="absolute bottom-5 right-10 w-28 h-36 p-4 opacity-80">
              <Image
                src="/nets.svg"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div>
          </div>

          <div className="relative custom-gray rounded-md border border-slate-500 mb-6">
            <div className="p-4">
              <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                Free to play
              </div>
              <h1 className="font-Poppins text-custom-white text-3xl mb-10">
                Social media contest
              </h1>
              <p>REWARDS</p>
              <p>1000 ICTX + 2 Avatar lvl</p>
            </div>
            {/* <div className="absolute bottom-5 right-10 w-28 h-36 p-4 opacity-80">
              <Image
                src="/nets.svg"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div> */}
          </div>

          <div className="relative custom-gray rounded-md border border-slate-500 col-span-2 mb-6">
            <div className="p-4">
              <div className="bg-green-200 border-green-500 rounded-md p-1 text-black w-fit px-2 mb-4">
                Free to play
              </div>
              <h1 className="font-Poppins text-custom-white text-3xl mb-2">
                Social media contest
              </h1>
              <p className="mb-8 text-custom-gray text-lg">Post your best moments during the match using your customised avatars AR/VR fliters and stand a chance to win free icc tickets.</p>
              
            </div>
            {/* <div className="absolute bottom-0 right-10 w-96 h-52 p-4 opacity-40">
              <Image
                src="/arvrimg.png"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default contests;
