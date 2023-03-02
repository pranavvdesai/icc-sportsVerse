import React, { useEffect, useState } from "react";
import { TfiWallet } from "react-icons/ti";
import { RiWallet3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import Accordion from "../components/Accordion";
import TopNav from "../components/TopNav";
import axios from "axios";
import { rpcURLnetwork, authArcana } from "../../src/utils/authArcana";
import { BsBoxArrowUpRight } from "react-icons/bs";

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
  const [transactions, setTransactions] = useState([]);

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
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/get-transactions/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setTransactions(res.data);
      });
  }, []);
  console.log(profile);
  console.log(transactions);
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
              <BsBoxArrowUpRight className="ml-1 text-custom-blue1 text-sm" />
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
          <h1 className="text-custom-white font-Poppins text-2xl">
            Transactions
          </h1>
          {transactions.length > 0 ? (
            <table className="table-auto w-full mt-4 mb-8">
              <thead>
                <tr className="text-custom-white bg-[#206fbf] rounded-md">
                  <th className="text-left px-4 py-2 border-b border-slate-400">
                    Transaction Hash
                  </th>
                  <th className="text-left px-4 py-2 border-b border-slate-400">
                    Note
                  </th>
                  <th className="text-left px-4 py-2 border-b border-slate-400">
                    Time
                  </th>
                  <th className="text-left px-4 py-2 border-b border-slate-400">
                    Buyer
                  </th>
                  <th className="text-left px-4 py-2 border-b border-slate-400">
                    Amount
                  </th>
                  <th className="text-leftpx-4 py-2 border-b border-slate-400">
                    Seller
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction}
                    className="text-custom-white custom-gray rounded-md"
                  >
                    <td className=" border-b border-slate-400 px-4 py-2 overflow-clip overflow-ellipsis">
                      {transaction.transaction_hash}
                    </td>
                    <td className="border-b border-slate-400 px-4 py-2">
                      <p className="bg-white text-black w-fit py-1 rounded-md px-4 ">
                        {transaction.note}
                      </p>
                    </td>
                    <td className="border-b border-slate-400 py-2 px-4">
                      {transaction.timestamp}
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400">
                      {transaction.transaction_hash}
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400">
                      {transaction.amount} ICC-TX
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400">
                      {transaction.transaction_hash}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-custom-white text-xl mt-4 mb-6">
              No transactions yet
            </div>
          )}

          <Accordion
            title="What can i do with these tokens, how do i get additional tokens"
            desc={acc2}
          />
        </div>
      </div>
    </>
  );
}
