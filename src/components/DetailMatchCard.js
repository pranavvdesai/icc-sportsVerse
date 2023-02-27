import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'




const DetailMatchCard = ({ matchId }) => {
    const [noOfTickets, setNoOfTickets] = useState(0)
    const [tier, setTier] = useState('')
    const [price, setPrice] = useState(0)
    const [match, setMatch] = useState({})
    // const router = useRouter()
    useEffect(() => {
        async function getMatch() {
            const res = await axios.get(`https://iccbackend.up.railway.app/matches/${matchId}`)
            console.log(res.data)
            setMatch(res.data)

        }
        getMatch()
    }, [])
    const viewTicket = () => {
        console.log('View Ticket')
        if (tier === 'Bronze') {
            setPrice(noOfTickets * 100)
        }
        else if (tier === 'Silver') {
            setPrice(noOfTickets * 500)
        }
        else if (tier === 'Gold') {
            setPrice(noOfTickets * 1000)
        }
        console.log(price)

    }
    console.log(match)

    const handleSubmitTicket = () => {
        console.log('Submit Ticket')
        console.log(noOfTickets)
        console.log(tier)
        console.log(price)
        window.location.href = `https://iccbackend.up.railway.app/razorpay/pay?amount=${price}&user=1&tickets=${noOfTickets}&tier=${tier}`
    }

    return (
        <>
            <div className="py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 custom-gray">
                <div className='flex flex-col justify-between flex-grow pl-5'>
                    <div className='flex justify-between'>
                        <h4 className="text-xl font-bold text-white">
                            {match.venue}
                        </h4>
                    </div>
                    <div className="border-b w-full pt-2" />
                    {/* Team div */}
                    <div className="flex mt-6">
                        <div className="flex flex-grow flex-col mt-3 px-5">
                            <Image src={
                                match.home_team_logo
                            } width={70} height={70} />
                            <h1 className="text-2xl text-white font-semibold mt-3">
                                {
                                    match.home_team
                                }
                            </h1>
                        </div>
                        {/* Put a div to write vs here */}
                        <div className="flex flex-grow flex-col mt-3">
                            <h1 className="text-2xl text-white font-semibold mt-3">
                                vs
                            </h1>
                            <h1 className="text-xl -mx-5 text-white font-semibold mt-8">
                                {
                                    match.title
                                }
                            </h1>
                            <h1 className="text-xl -mx-5 text-gray-400 font-semibold mt-5">
                                {
                                    match.time
                                } IST
                            </h1>
                        </div>

                        <div className="flex flex-col mt-3 px-5">
                            <Image src={
                                match.away_team_logo
                            } width={70} height={70} />
                            <h1 className="text-2xl text-white font-semibold mt-3">
                                {
                                    match.away_team
                                }
                            </h1>
                        </div>
                    </div>
                </div>
            </div >
            <div className="py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 custom-gray">
                {/* Have radio buttons to select the ticket tier and then display the price */}
                <div className="flex">
                    <div className="mx-3 text-white">
                        <input type="radio" id="test1" name="radio-group"
                            onClick={() => setTier('Gold')}
                        />
                        <label className='px-3' for="test1">Gold</label>
                    </div>
                    <div className="mx-3 text-white">
                        <input type="radio" id="test1" name="radio-group"
                            onClick={() => setTier('Silver')}
                        />
                        <label className='px-3' for="test1">Silver</label>
                    </div>
                    <div className="mx-3 text-white">
                        <input type="radio" id="test1" name="radio-group"
                            onClick={() => setTier('Bronze')}
                        />
                        <label className='px-3' for="test1">Bronze</label>
                    </div>
                    <div className="mx-14 text-white">
                        <label className='px-3' htmlFor="test1">Tickets:</label>
                        <input
                            min={1}
                            max={5}
                            className="w-20 bg-gray-400 text-white px-2" type="number" id="no_of_tickets"
                            value={noOfTickets}
                            onChange={(e) => setNoOfTickets(e.target.value)}
                        />
                    </div>
                    {
                        noOfTickets > 0 ?
                            <div className="mx-3 text-white">
                                <h1 className='px-3' for="test1">Price: {price}</h1>
                            </div>
                            :
                            <div className="mx-3 text-white">
                                <h1 className='px-3' for="test1">Price: 0</h1>
                            </div>
                    }



                    {/* Display the total prize here which has to be sent to backend server */}

                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={viewTicket}
                >
                    Proceed
                </button>
                <button
                    onClick={handleSubmitTicket}
                    type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                </button>
            </div >
        </>
    )
}

export default DetailMatchCard