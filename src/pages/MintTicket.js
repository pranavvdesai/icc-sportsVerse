import { React, useEffect } from "react";
import ICC from "../../src/blockchain/artifacts/contracts/ICC.sol/ICC.json";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { contractAddress } from "../../src/blockchain/config";
import { rpcURLnetwork, authArcana } from "../utils/authArcana";
import { useAuth } from "@arcana/auth-react";

export default function MintTicket() {
  const router = useRouter();
  console.log(router.asPath.split("/")[1].split("?")[1]);
  const amount = parseInt((router.asPath.split("/")[1].split("?")[1])/100);
  console.log(amount);
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useAuth();
  useEffect(() => {
    async function MintNFT(amount) {
      await authArcana.init();
      const Provider = new ethers.providers.Web3Provider(provider);
      const signer = Provider.getSigner();

      const icc = new ethers.Contract(contractAddress, ICC.abi, signer);
      const res = await icc.buyTicket(amount);
      console.log(res);
      window.location.href = "http://localhost:3000/Myticket";
    }
    MintNFT(amount);
  });

  
  return (
    <div className="text-white mx-auto mt-10">
      redirecting ....
    </div>
  );
}
