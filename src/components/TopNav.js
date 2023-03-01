import React from 'react'
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
function TopNav() {
    return (
        <>
            <header className="top-0 z-50 grid grid-cols-2 bg-black	drop-shadow-2xl p-5 md:px-10">
                <Link href="/home">
                    {/* left most corner */}
                    {/* Show Logo */}
                    <div className="flex items-center space-x-2" >
                        < Image src="/icc1.png" width={50} height={50} alt="ICC" />


                        < div className="flex items-center space-x-2" >
                            <h1 className="text-3xl font-bold text-white">ICC App</h1>
                        </div >
                    </div >
                </Link>
                < div className="flex space-x-4 items-center justify-end text-gray-500" >
                    <button
                        onClick={() => Router.push('/matches')}
                        // On hover change the color of the button
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        Matches
                    </button>
                    <button
                        onClick={() => Router.push('/Myticket')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        My Tickets
                    </button>
                    <button
                        onClick={() => Router.push('/contests')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        Contests
                    </button>
                    <button
                        onClick={() => Router.push('/store')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        Store
                    </button>
                    <button
                        onClick={() => Router.push('/wallet')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        Wallet
                    </button>
                    <button
                        onClick={() => Router.push('/profile')}
                        className="hidden md:inline-flex bg-transparent text-white text-lg px-5 py-2 border border-white-500 rounded-xl hover:text-black hover:bg-white">
                        Profile
                    </button>
                </div >
            </header >
        </>
    )
}

export default TopNav