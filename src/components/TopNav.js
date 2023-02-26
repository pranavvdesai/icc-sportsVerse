import React from 'react'
import Router from 'next/router';
import Link from 'next/link';
function TopNav() {
    return (
        <>
            <header className="top-0 z-50 grid grid-cols-2 bg-black	drop-shadow-md p-5 md:px-10">
                {/* left */}
                <Link href="/">
                    < div className="relative flex items-center h-15 cursor-pointer my-auto" >
                        <h1 className="text-3xl font-bold text-white">ICC App</h1>
                    </div >
                </Link>
                {/* right */}
                < div className="flex space-x-4 items-center justify-end text-gray-500" >
                    <button
                        onClick={() => Router.push('/matches')}
                        className="hidden md:inline-flex bg-[#0284c7] text-white text-lg px-5 py-2 rounded-xl">
                        Matches
                    </button>
                    <button
                        onClick={() => Router.push('/profile')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl">
                        Profile
                    </button>

                </div >
            </header >
        </>
    )
}

export default TopNav