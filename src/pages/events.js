import React from "react";
import TopNav from "../components/TopNav";
import ContestCard from "../components/ContestCard";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const events = () => {
  return (
    <>
      <TopNav />
      <div className="text-4xl extra-bold text-custom-white font-Poppins mx-10 my-5 ">
        Get access to exclusive events using your avatar
      </div>
      <div className="text-xl bold text-custom-gray mx-10 ">
        Your avatar acts as a entry point to ICC exclusive events. A few lucky
        winners among these can get a chance to:
      </div>
      <div className="grid grid-cols-2 gap-4 m-10">
        <div className="grid grid-cols-3 gap-4 ">
          <div class="relative custom-gray shadow-lg rounded-lg py-5 overflow-hidden">
            <div class=" h-full w-full absolute bottom-0 opacity-40">
              <Image
                src="/england.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                alt="profile"
              />
            </div>
            <div class="relative pt-[4.25rem] pb-14 px-5">
              <h3 class="text-2xl font-extrabold text-indigo-50 leading-snug mb-2">
                Meet and greet with favorite cricketers
              </h3>
            </div>
            <div class="relative text-right px-5">
              <a
                class="inline-flex w-11 h-11 justify-center items-center bg-[#206fbf] hover:bg-[#10569c] text-pink-50 hover:text-white rounded-full transition duration-150"
                href="/events"
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div class="relative custom-gray shadow-lg rounded-lg py-5 overflow-hidden">
            <div class=" h-full w-full absolute bottom-0 opacity-40">
              <Image
                src="/dhoni.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                alt="profile"
              />
            </div>
            <div class="relative pt-[4.25rem] pb-14 px-5">
              <h3 class="text-2xl font-extrabold text-indigo-50 leading-snug mb-2">
                Get a signed ball from captain cool
              </h3>
            </div>
            <div class="relative text-right px-5">
              <a
                class="inline-flex w-11 h-11 justify-center items-center bg-[#206fbf] hover:bg-[#10569c] text-pink-50 hover:text-white rounded-full transition duration-150"
                href="/events"
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div class="relative custom-gray shadow-lg rounded-lg py-5 overflow-hidden">
            <div class=" h-full w-full absolute bottom-0 opacity-40">
              <Image
                src="/ground.jpeg"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                alt="profile"
              />
            </div>
            <div class="relative pt-[4.25rem] pb-14 px-5">
              <h3 class="text-2xl font-extrabold text-indigo-50 leading-snug mb-2">
                Access to the grounds and VIP area
              </h3>
            </div>
            <div class="relative text-right px-5">
              <a
                class="inline-flex w-11 h-11 justify-center items-center bg-[#206fbf] hover:bg-[#10569c] text-pink-50 hover:text-white rounded-full transition duration-150"
                href="/events"
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div class="relative custom-gray shadow-lg rounded-lg py-5 overflow-hidden">
          <div class=" h-full w-full absolute bottom-0 opacity-40">
            <Image
              src="/commentary.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
              alt="profile"
            />
          </div>
          <div class="relative pt-[4.25rem] pb-14 px-5">
            <h3 class="text-2xl font-extrabold text-indigo-50 leading-snug mb-2">
              Chat with commentators
            </h3>
          </div>
          <div class="relative text-right px-5">
            <a
              class="inline-flex w-11 h-11 justify-center items-center bg-[#206fbf] hover:bg-[#10569c] text-pink-50 hover:text-white rounded-full transition duration-150"
              href="/events"
            >
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
