import React, { useEffect } from "react";
import TopNav from "../components/TopNav";
import MyTicket from "../components/MyTicket";
// import ICC from "../blockchain/artifacts/contracts/ICC.sol/ICC.json";
// import { ethers } from "ethers";
// import { useRouter } from "next/router";
// import { contractAddress } from "../blockchain/config";
// import { rpcURLnetwork, authArcana } from "../utils/authArcana";
// import { useAuth } from "@arcana/auth-react";

export default function Myticket() {

  // const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
  //   useAuth();

  // const getTokenId = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(rpcURLnetwork);
  //   const icc = new ethers.Contract(contractAddress, ICC.abi, provider);
  //   const res = await icc.tokenId();
  //   console.log(res);
  // };
  // const getTokenBalances = async () => {
  //   console.log(user);
  //   const provider = new ethers.providers.JsonRpcProvider(rpcURLnetwork);
  //   const icc = new ethers.Contract(contractAddress, ICC.abi, provider);
  //   const res = await icc.nftTokenBalances(user.address);
  //   console.log(res);
  // };
  return (
    <>
      {/* <button onClick={getTokenId} className="bg-white">
        See tokenId count
      </button>
      <button onClick={getTokenBalances} className="bg-white">
        see tokens associated with poerson
      </button> */}
      <TopNav />
      <div className="flex justify-center items-center">
        <MyTicket />
      </div>
    </>
  );
}
