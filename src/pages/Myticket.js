import React, { useEffect } from "react";
import TopNav from "../components/TopNav";
import MyTicket from "../components/MyTicket";
// import ICC from "../blockchain/artifacts/contracts/ICC.sol/ICC.json";
// import { ethers } from "ethers";
// import { useRouter } from "next/router";
// import { contractAddress } from "../blockchain/config";
// import { rpcURLnetwork, authArcana } from "../utils/authArcana";
// import { useAuth } from "@arcana/auth-react";
import axios from "axios";
export default function Myticket() {
  const [tickets, setTickets] = React.useState([]);
  const [pastTickets, setPastTickets] = React.useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMyTicket() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/myTickets`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Segregate past and upcoming tickets
      const past = res.data.filter((ticket) => {
        const date = new Date(ticket.match.date);
        const today = new Date();
        return date < today;
      });
      const upcoming = res.data.filter((ticket) => {
        const date = new Date(ticket.match.date);
        const today = new Date();
        return date > today;
      });
      setTickets(upcoming);
      setPastTickets(past);
    }
    getMyTicket();
  }, []);
  console.log(tickets);
  return (
    <>
      <TopNav />
      {
        tickets.length > 0 ? (
          <>
            <h1 className="text-3xl text-white font-semibold mx-10 mt-10">
              Current Tickets
            </h1>
            <div className="grid grid-cols-4 gap-4 mx-10">
              {tickets.length > 0 ? (
                tickets.map((ticket) => {
                  return (
                    <MyTicket
                      key={ticket.user}
                      ticket={ticket}
                      sell={false}
                      transfer={true}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <h1 className="text-3xl text-white font-bold mx-12 mt-5">
            No Current Tickets
          </h1>
        )}
      {pastTickets.length > 0 ? (
        <>
          <h1 className="text-3xl text-white font-semibold mx-10 mt-10">
            Past Tickets
          </h1>
          <div className="grid grid-cols-4 gap-4 mx-10">
            {pastTickets.length > 0 ? (
              pastTickets.map((ticket) => {
                return (
                  <MyTicket
                    key={ticket.user}
                    ticket={ticket}
                    sell={true}
                    transfer={false}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <h1 className="text-3xl text-white font-bold mx-12 mt-5">
          No Past Tickets
        </h1>
      )}

    </>
  );
}
