import React, { useEffect, useState } from "react";
import { TfiWallet } from "react-icons/ti";
import { RiWallet3Fill } from "react-icons/ri";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import Accordion from "../components/Accordion";
import TopNav from "../components/TopNav";
import axios from "axios";
import { useAuth } from "@arcana/auth-react";
import { rpcURLnetwork, authArcana } from "../../src/utils/authArcana";
import { BsBoxArrowUpRight } from "react-icons/bs";

const acc2 = `
  <p><span class="text-lg mr-2">o</span>Shopping</p>
  <p><span class="text-lg mr-2">o</span>Participate in contests, win and get tokens</p>
  <p><span class="text-lg mr-2">o</span>Buy tickets</p>
  <p><span class="text-lg mr-2">o</span>Get discounts on icc products</p>
`;
export default function Wallet() {
  const [profile, setProfile] = React.useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = React.useState(false);
  const [price_now, setPrice] = useState(0);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } = useAuth();
  const onConnect = async () => {
    await authArcana.init();
    authArcana.getUser().then((res) => {
      console.log("inside res");
      console.log(res);
      setUserInfo(res);
    });
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/me/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      });
    await axios
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
  }

  useEffect(() => {
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };

  }, [provider]);
  console.log(profile);
  console.log(transactions);
  function addToWallet() {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL
      }/razorpay/convert?amount=${price_now * 100}&user=${profile.user}`;
    console.log("add to wallet");
  }
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
              {profile.balance !== undefined &&
              profile.balance !== null &&
              profile.balance !== "" &&
              profile.balance !== NaN ? (
                profile.balance
              ) : (
                <>
                  <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>
                </>
              )}{" "}
              <span className="text-custom-blue1">ICC Tokens</span>
            </div>
            <hr className="my-2 custom-gray"></hr>
            <div className="flex flex-col mb-6">
              <div className="flex text-white justify-between">
                <p>Withdrawable balance</p>
                <h1>
                  {profile.balance !== undefined &&
                  profile.balance !== null &&
                  profile.balance !== "" &&
                  profile.balance !== NaN ? (
                    profile.balance
                  ) : (
                    <>
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      ></div>
                    </>
                  )}
                </h1>
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
            <button
              className="bg-[#206FBF] flex items-center p-4 mb-4 cursor-pointer"
              onClick={handleShow}
            >
              <AiFillPlusCircle className="text-3xl text-custom-white mx-3 my-2" />
              <p className="text-custom-white text-xl my-2 cursor-pointer">
                Add ICC-TX to your wallet
              </p>
            </button>
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
            <table className="table-fixed w-full mt-4 mb-8">
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
                      {/* Convert the timestamp to date and time */}
                      {transaction.timestamp}
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400 overflow-clip overflow-ellipsis">
                      {transaction.buyer}
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400">
                      {transaction.amount } ICC-TX
                    </td>
                    <td className="border-b px-4 py-2 border-slate-400 overflow-clip overflow-ellipsis">
                      {transaction.seller}
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
          {show && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="custom-gray w-[40%] h-[40%] rounded-xl relative">
                <div className="flex  justify-end right-0">
                  <button
                    onClick={handleClose}
                    className="bg-gray-500 rounded-full p-2 m-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className=" mx-10 justify-center align-middle">
                  <h1 className="font-Poppins text-2xl text-custom-white">
                    Enter Amount
                  </h1>
                  <input
                    type="number"
                    className="w-full h-12 rounded-md mt-4 text-black p-2"
                    placeholder="Enter Amount"
                    value={price_now}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <button
                    className="bg-[#206FBF] w-full h-12 rounded-md mt-4"
                    onClick={addToWallet}
                  >
                    Add to wallet
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
