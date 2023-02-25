/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Accordion from "../components/Accordion";

export default function profile() {
  return (
    <div className="mt-20 text-custom-white">
      <div className="flex w-full">
        <div className=" w-[50%] relative mx-10">
          {/* <Image
            src="https://picsum.photos/600"
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
            alt="profile"
          /> */}
          <div class="  w-full h-full rounded overflow-hidden shadow-lg">
            {/* <img
              class="w-full"
              src="https://picsum.photos/200"
              alt="Sunset in the mountains"
            /> */}
            <div className="relative h-96 w-full">
              <Image
                src="https://media.giphy.com/media/10fS0TJxfFRDLW/giphy.gif"
                layout="fill"
                objectFit="cover"
                className="rounded-md "
                alt="profile"
              />
            </div>

            <div class="px-2 py-4 mt-4 custom-gray">
              <div class="font-bold text-xl mb-2">Avatar lvl.</div>
              <p class="text-[#9a9999] text-base pb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <div className="flex align-middle items-center">
                <div className="w-[90%]">
                  <ProgressBar
                    completed="50"
                    bgColor="#206FBF"
                    height="10px"
                    isLabelVisible={false}
                    baseBgColor="#E4E4E4"
                  />
                </div>

                <p className=" w-[10%] px-2">50/100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] mr-10">
          <p className="text-custom-blue1 text-xl py-2">0x573923034938248274</p>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-Poppins py-2">Pranav Desai</h1>
            <div className="flex">
              <BsTwitter className="text-white text-2xl mr-3" />
              <AiFillLinkedin className="text-white text-2xl mr-3" />
              <BsInstagram className="text-white text-2xl" />
            </div>
          </div>
          <h1 className="text-xl">Wallet balance: 44 ICCTX</h1>
          <div className="my-4 mt-6">

          <Accordion />
          <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}
