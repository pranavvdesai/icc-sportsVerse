import React from 'react'
import Image from "next/image";

const MyTicket = () => {
    return (
        <div className="py-3 pr-5 w-[400px] h-[600px] border-2 border-slate-700 rounded-xl m-5 custom-gray">
            {/* Generate a random qr code here */}
            <div className="flex justify-center py-5 ml-5 items-center">
                <Image src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" width={200} height={200} />
            </div>
            {/* <div className="flex flex-col justify-center items-center"> */}
            <h4 className="text-xl text-gray-400 font-semibold mx-5 mt-5">
                Final
            </h4>
            <h2 className="text-xl text-white font-semibold mx-5 mt-2">
                India vs Australia
            </h2>
            {/* </div> */}
            <div className="border-b border-white w-full m-2" />

            <div className="flex mt-3">

                <div className="flex flex-col">
                    <div className="my-2">
                        <h3 className="text-white font-semibold mx-5">
                            Date:
                        </h3>

                        <p className="text-white font-semibold mx-5">
                            12th April 2021
                        </p>
                    </div>
                    <div className="my-2">
                        <h3 className="text-white font-semibold mx-5">
                            Stand:
                        </h3>
                        <p className="text-white font-semibold mx-5">
                            Pavilion
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="my-2 mx-5">
                        <h3 className="text-white font-semibold mx-5">
                            Time:
                        </h3>

                        <p className="text-white font-semibold mx-5">
                            7:00 PM
                        </p>
                    </div>
                    <div className="my-2 mx-5">
                        <h3 className="text-white font-semibold mx-5">
                            ID:
                        </h3>
                        <p className="text-white font-semibold mx-5">
                            123456789
                        </p>
                    </div>
                </div>
            </div>
            {/* Put a bottom border here */}
            {/* div to display prize of the ticket */}
            <div className="flex justify-between my-8 mx-3">
                <button className="bg-sky-700 text-white font-semibold py-2 px-4 mx-2 rounded-full">
                    Redeem Tokens
                </button>
                <button className="bg-sky-700 text-white font-semibold py-2 px-4 rounded-full">
                    Save image
                </button>
            </div>
        </div >
    )
}

export default MyTicket