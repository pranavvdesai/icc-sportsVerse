/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Avatar, { genConfig } from "react-nice-avatar";

export default function HomeAvatar() {
const avatar = {
  sex: "man",
  faceColor: "#F9C9B6",
  earSize: "small",
  eyeStyle: "circle",
  noseStyle: "round",
  mouthStyle: "laugh",
  shirtStyle: "polo",
  glassesStyle: "none",
  hairColor: "#000",
  hairStyle: "thick",
  hatStyle: "none",
  hatColor: "#000",
  eyeBrowStyle: "up",
  shirtColor: "#9287FF",
  bgColor: "#F4D150",
  shape: "rounded",
};
  return (
    <div className="grid grid-cols-2 mt-10">
      <div>
        <div
          className="relative h-full w-full rounded-lg"
          style={{ backgroundColor: avatar.bgColor }}
        >
          <Avatar className=" h-full w-[60%] mx-auto" {...avatar} />
        </div>
      </div>
      <div className=" font-Poppins text-custom-white ml-10">
        <h1 className=" text-2xl mb-3">
          Level Up your Avatars and get a chance to
        </h1>
        <div className="grid grid-cols-3 gap-4">
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
                Meet and greet with cricketers
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
      </div>
    </div>
  );
}
