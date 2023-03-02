import axios from 'axios';
import React from 'react'

const ModalConfirm = ({
    walletBalance,
    open,
    setOpen,
    amount
}) => {
    console.log(walletBalance);
    const handleBuyMerch = () => {
        console.log("Buy Merch");
        axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/razorpay/buy/`, {
            amount: amount,
            note: "merchandise",
            seller: 2
        },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        )
            .then((res) => {
                console.log(res.data);
                setOpen(false);
            }
            )
    }
    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm ">
            <div className="relative w-auto my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[48rem] bg-[#1a1e27] outline-none focus:outline-none ">
                    {/* <div className="flex items-end justify-end p-5">
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setOpen(false)}
                        >
                            <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-400 py-0 rounded-full">
                                x
                            </span>
                        </button>
                    </div> */}
                    <div className="relative p-3 flex-auto">
                        {/* <p className="my-4 text-lg leading-relaxed text-gray-400">
                            Current Balance: {walletBalance}
                        </p> */}
                        <div class="p-6 text-center">
                            <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to buy this product?</h3>
                            <button
                                onClick={handleBuyMerch}
                                data-modal-hide="popup-modal" type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>

                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>

    )
}

export default ModalConfirm