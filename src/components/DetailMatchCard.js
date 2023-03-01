import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'




const DetailMatchCard = ({ matchId }) => {
  const [noOfTickets, setNoOfTickets] = useState(0)
  const [tier, setTier] = useState('')
  const [match, setMatch] = useState({})
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getMatch() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/matches/${matchId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(res.data)
      setMatch(res.data)

    }
    getMatch();
  }, []);

  console.log(match);

  const handleSubmitTicket = () => {
    let price_now;
    if (tier === "Bronze") {
      price_now = noOfTickets * 100 + 12.87;
    } else if (tier === "Silver") {
      price_now = noOfTickets * 500 + 12.87;
    } else if (tier === "Gold") {
      price_now = noOfTickets * 1000 + 12.87;
    }
    console.log("Submit Ticket");
    console.log(noOfTickets);
    console.log(tier);


    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/pay?amount=${price_now * 100
      }&user=${match.userId}&tickets=${noOfTickets}&tier=${tier}`;
  };

  return (
    <>
      <div className="py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 custom-gray">
        <div className="flex flex-col justify-between flex-grow pl-5">
          <div className="flex justify-between">
            <h4 className="text-xl font-bold text-white">{match.venue}</h4>
          </div>
          <div className="border-b w-full pt-2" />
          {/* Team div */}
          <div className="flex mt-6">
            <div className="flex flex-grow flex-col mt-3 px-5">
              <Image src={match.home_team_logo} width={70} height={70} />
              <h1 className="text-2xl text-white font-semibold mt-3">
                {match.home_team}
              </h1>
            </div>
            {/* Put a div to write vs here */}
            <div className="flex flex-grow flex-col mt-3">
              <h1 className="text-2xl text-white font-semibold mt-3">vs</h1>
              <h1 className="text-xl -mx-2 text-white font-semibold mt-8">
                {match.title}
              </h1>
              <h1 className="text-xl -mx-8 text-gray-400 font-semibold mt-5">
                {match.time} IST
              </h1>
            </div>

            <div className="flex flex-col mt-3 px-5">
              <Image src={match.away_team_logo} width={70} height={70} />
              <h1 className="text-2xl text-white font-semibold mt-3">
                {match.away_team}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 custom-gray">
        {/* Have radio buttons to select the ticket tier and then display the price */}
        <div className="flex justify-between">
          <div className="flex">
            <div className="mx-3 text-white">
              <input
                type="radio"
                id="test1"
                name="radio-group"
                onClick={() => setTier("Gold")}
              />
              <label className="px-3" for="test1">
                Gold
              </label>
            </div>
            <div className="mx-3 text-white">
              <input
                type="radio"
                id="test1"
                name="radio-group"
                onClick={() => setTier("Silver")}
              />
              <label className="px-3" for="test1">
                Silver
              </label>
            </div>
            <div className="mx-3 text-white">
              <input
                type="radio"
                id="test1"
                name="radio-group"
                onClick={() => setTier("Bronze")}
              />
              <label className="px-3" for="test1">
                Bronze
              </label>
            </div>
          </div>
          <div className=" text-white justify-end justify-self-end">
            <label className="px-3" htmlFor="test1">
              Tickets:
            </label>
            <input
              min={1}
              max={5}
              className="w-20 bg-gray-400 text-black px-2 rounded-full"
              type="number"
              id="no_of_tickets"
              value={noOfTickets}
              onChange={(e) => setNoOfTickets(e.target.value)}
            />
            {/* <button
              className="text-black px-3 text-sm py-1 bg-white rounded-md ml-4"
              onClick={viewTicket}
            >
              Proceed
            </button> */}
          </div>

          {/* {
                        noOfTickets > 0 ?
                            <div className="mx-3 text-white">
                                <h1 className='px-3' for="test1">Price: {price}</h1>
                            </div>
                            :
                            <div className="mx-3 text-white">
                                <h1 className='px-3' for="test1">Price: 0</h1>
                            </div>
                    } */}

          {/* Display the total prize here which has to be sent to backend server */}
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={viewTicket}
                >
                    Proceed
                </button>
                <button
                    onClick={handleSubmitTicket}
                    type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                </button> */}
      </div>
      <div className="pt-3 pr-5 border-2 border-slate-700 rounded-xl m-5 custom-gray">
        <div className="flex flex-col mb-6 mx-4">
          <div className="flex text-white justify-between">
            <p>Ticket Details</p>
            <h1>
              {tier === "Gold"
                ? 1000
                : tier === "Silver"
                ? 500
                : tier === "Bronze"
                ? 100
                : 0}{" "}
              * {noOfTickets > 0 ? noOfTickets : 0}
            </h1>
          </div>
          <div className="flex text-white justify-between mt-4">
            <p>Total Amount </p>
            <h1>
              {noOfTickets > 0
                ? tier === "Gold"
                  ? 1000 * noOfTickets
                  : tier === "Silver"
                  ? 500 * noOfTickets
                  : tier === "Bronze"
                  ? 100 * noOfTickets
                  : 0
                : 0}
            </h1>
          </div>
          <div className="flex text-[#9a9999] text-base justify-between">
            <p>Service charges + GST</p>
            <h1>0.87+12</h1>
          </div>
          <div className="flex text-white justify-between mt-4">
            <p>Adjust from wallet: 20CTX </p>
            <input type="checkbox" name="adjust" value="20" />
          </div>
          <hr className="my-4 custom-gray"></hr>
          <div className="flex text-white justify-between">
            <p className="text-xl">Total to be Paid </p>
            <h1>
              {noOfTickets > 0
                ? tier === "Gold"
                  ? 1000 * noOfTickets + 0.87 + 12
                  : tier === "Silver"
                  ? 500 * noOfTickets + 0.87 + 12
                  : tier === "Bronze"
                  ? 100 * noOfTickets + 0.87 + 12
                  : 0
                : 0}
            </h1>
          </div>
          <div className="flex text-[#9a9999] text-base justify-between">
            <p>Tokens to be received in wallet</p>
            <h1>
              {noOfTickets > 0
                ? tier === "Gold"
                  ? 1000 * noOfTickets + 0.87 + 12
                  : tier === "Silver"
                  ? 500 * noOfTickets + 0.87 + 12
                  : tier === "Bronze"
                  ? 100 * noOfTickets + 0.87 + 12
                  : 0
                : 0}{" "}
              ICTX
            </h1>
          </div>
          <button
            className="text-black px-3 text-sm py-1 mt-4 w-32 bg-white rounded-md"
            onClick={handleSubmitTicket}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailMatchCard;
