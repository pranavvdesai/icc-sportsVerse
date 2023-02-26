import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const MatchCard = () => {
    return (
        <div className="flex py-3 pr-5 border-2 border-slate-700 rounded-xl m-5 hover:opacity-90 hover:shadow-lg pr-4 transition duration-500 ease-in">
            {/* Just for image div-LHS */}
            {/* Content div-RHS */}
            <div className='flex flex-col justify-between flex-grow pl-5'>
                {/* Div to display date and time on the right hand side of the card */}
                <div className='flex justify-between'>
                    <h4 className="text-2xl font-bold">
                        Final
                    </h4>
                    <h5 className='text-white text-lg'>
                        23rd March, 2021
                    </h5>
                </div>
                <div className='flex justify-between'>
                    <h4 className="text-lg text-gra-400">
                        Wankhede Stadium, Mumbai
                    </h4>
                    <h5 className='text-white text-lg'>
                        7:30 PM IST
                    </h5>
                </div>
                <div className="border-b w-full pt-2" />
                {/* Team div */}
                <div className="flex items-center mt-6">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png" width={70} height={70} />
                    <h1 className="text-2xl font-bold mx-3">IND</h1>
                </div>
                <div className="flex items-center mt-6">
                    <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png" width={70} height={70} />
                    <h1 className="text-2xl font-bold mx-3">AUS</h1>
                </div>
                {/* Price div */}
                <div className="flex justify-between items-end mt-8">
                    {/* Buttons to edit project and view project */}
                    <div className="flex space-x-4 items-center justify-end text-gray-500">
                        <Link href='/wallet'>
                            <button className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl
                            hover:bg-white hover:text-black
                            ">Buy Tickets</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MatchCard