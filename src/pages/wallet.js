import React, { useEffect, useState } from "react";
import { TfiWallet } from "react-icons/ti";
import { RiWallet3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import Accordion from "../components/Accordion";
import TopNav from "../components/TopNav";
import axios from "axios";
import { rpcURLnetwork, authArcana } from "../../src/utils/authArcana";
import { BsBoxArrowUpRight } from 'react-icons/bs'

const acc2 = `
  <p><span class="text-lg mr-2">o</span>Win contests</p>
  <p><span class="text-lg mr-2">o</span>Interacting with icc products such as ICC TV, criio, crictos </p>
  <p><span class="text-lg mr-2">o</span>Shopping on icc store</p>
  <p><span class="text-lg mr-2">o</span>View time on icc TV</p>
  <p><span class="text-lg mr-2">o</span>Buying tickets</p>
`;
export default function Wallet() {
  const [profile, setProfile] = React.useState([]);
    const [userInfo, setUserInfo] = useState({});

  useEffect(() => {

    authArcana.getUser().then((res) => {
      console.log("inside res");
      console.log(res);
      setUserInfo(res);
    });
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      });
  }, []);
  console.log(profile);
  return (
    <>
      <TopNav />
      <div className="mt-10 mx-10 text-custom-white">
        <div className="flex w-full">
          <div className=" w-[50%] relative  px-4 py-4 mt-4 custom-gray">
            <div class="font-bold mb-2 text-xl flex items-center">
              <RiWallet3Fill className=" mr-2" />
              <p className=" font-Poppins text-custom-white">Wallet Balance</p>
              <a
                href={`https://goerli.etherscan.io/address/${userInfo?.address}`}
                target="_blank"
                className="text-custom-blue1 text-sm ml-2 underline underline-offset-2"
              >
                {userInfo?.address}
              </a>
              <BsBoxArrowUpRight className="ml-1 text-custom-blue1 text-sm"/>
            </div>
            <div className="text-3xl mb-4 mt-4">
              {profile.balance}{" "}
              <span className="text-custom-blue1">ICC Tokens</span>
            </div>
            <hr className="my-2 custom-gray"></hr>
            <div className="flex flex-col mb-6">
              <div className="flex text-white justify-between">
                <p>Withdrawable balance</p>
                <h1>{profile.balance}</h1>
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
          <Accordion title="Transactions" />
          <Accordion title="What can i do with these tokens, how do i get additional tokens" desc={acc2} />
        </div>
      </div>
    </>
  );
}
