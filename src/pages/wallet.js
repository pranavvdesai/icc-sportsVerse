import React from "react";
import { TfiWallet } from "react-icons/ti";
import { RiWallet3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import Accordion from "../components/Accordion";

export default function wallet() {
  return (
    <div className="mt-20 mx-10 text-custom-white">
      <div className="flex w-full">
        <div className=" w-[50%] relative  px-4 py-4 mt-4 custom-gray">
          <div class="font-bold mb-2 text-xl flex items-center">
            <RiWallet3Fill className=" mr-2" />
            <p className=" font-Poppins text-custom-white">Wallet Balance</p>
          </div>
          <div className="text-3xl mb-4">
            100 <span className="text-custom-blue1">ICC-TX</span>
          </div>
          <hr className="my-2 custom-gray"></hr>
          <div className="flex flex-col mb-6">
            <div className="flex text-white justify-between">
              <p>Withdrawable balance</p>
              <h1>0</h1>
            </div>
            <div className="flex text-[#9a9999] text-base justify-between">
              <p>Rewards balance</p>
              <h1>0</h1>
            </div>
            <div className="flex text-[#9a9999] text-base justify-between">
              <p>NFT balance</p>
              <h1>0</h1>
            </div>
          </div>
          <hr className="my-2 custom-gray"></hr>
          <div className="flex flex-col">
            <div className="flex text-white justify-between">
              <p>Non Withdrawable balance</p>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="w-[50%] ml-10 mt-4 flex flex-col ">
          <div className="bg-[#206FBF] flex items-center p-4 mb-4">
            <AiFillPlusCircle className="text-3xl text-custom-white mx-3 my-2" />
            <p className="text-custom-white text-xl my-2">
              Add ICC-TX to your wallet
            </p>
          </div>
          <div className="custom-gray flex items-center p-4">
            <BsBank2 className="text-3xl text-custom-white mx-3 my-2" />
            <p className="text-custom-white text-xl my-2">
              Withdraw ICC-TX to your bank
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 mt-6">
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
}
