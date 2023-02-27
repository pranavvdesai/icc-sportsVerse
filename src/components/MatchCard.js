import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const MatchCard = ({ item }) => {
    // console.log(item)
    // convert the date to a readable format
    const date = new Date(item.date).toDateString();
    const id = 1234;
    return (
        <div className="flex py-3 pr-5 border-2 border-slate-700 rounded-xl m-5">
            {/* Just for image div-LHS */}
            {/* Content div-RHS */}
            <div className='flex flex-col justify-between flex-grow pl-5'>
                {/* Div to display date and time on the right hand side of the card */}
                <div className='flex justify-between'>
                    <h4 className="text-2xl font-bold">
                        {
                            item.title
                        }
                    </h4>
                    <h5 className='text-white text-lg'>
                        {
                            date
                        }
                    </h5>
                </div>
                <div className='flex justify-between'>
                    <h4 className="text-lg text-gray-400">
                        {
                            item.venue
                        }
                    </h4>
                    <h5 className='text-white text-lg'>
                        {
                            item.time
                        } IST
                    </h5>
                </div>
                <div className="border-b w-full pt-2" />
                {/* Team div */}
                <div className="flex items-center mt-6">
                    <Image src={
                        item.home_team_logo
                    } width={70} height={70} />
                    <h1 className="text-2xl text-white font-bold mx-3">{
                        item.home_team
                    }</h1>
                </div>
                <div className="flex items-center mt-6">
                    <Image src={
                        item.away_team_logo
                    } width={70} height={70} />
                    <h1 className="text-2xl text-white font-bold mx-3">{
                        item.away_team
                    }</h1>
                </div>
                {/* Price div */}
                <div className="flex justify-between items-end mt-8">
                    {/* Buttons to edit project and view project */}
                    <div className="flex space-x-4 items-center justify-end text-gray-500">
                        <Link href={`/matches/${id}`}>
                            <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            ">Buy Tickets</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default MatchCard