import { React, useEffect } from "react";
import ICC from "../../src/blockchain/artifacts/contracts/ICC.sol/ICC.json";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { contractAddress } from "../../src/blockchain/config";
import { rpcURLnetwork, authArcana } from "@/utils/authArcana";

export default function MintTicket() {
  useEffect(() => {
    async function MintNFT() {
      const router = useRouter();
      await authArcana.init();
      const provider = new ethers.providers.JsonRpcProvider(rpcURLnetwork);

      const icc = new ethers.Contract(contractAddress, ICC.abi, provider);
      const res = await icc.buyTicket();
    }
    MintNFT();
  });

  const getTokenId = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcURLnetwork);
    const icc = new ethers.Contract(contractAddress, ICC.abi, provider);
    const res = await icc.tokenId();
    console.log(res);
  };
  const getTokenBalances = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcURLnetwork);
    const icc = new ethers.Contract(contractAddress, ICC.abi, provider);
    const res = await icc.nftTokenBalances(
      "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
    );
    console.log(res);
  };
  return (
    <div>
      <button onClick={getTokenId}>See tokenId count</button>
      <button onClick={getTokenBalances}>
        see tokens associated with poerson
      </button>
    </div>
  );
}
