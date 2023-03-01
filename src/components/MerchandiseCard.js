import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const StoreCard = ({
    heading
}) => {
    // console.log(img)
    return (
        <Link href="/merchstore">
            <div className="my-10 mx-5 border-2 border-gray-600 rounded-2xl shadow-lg custom-gray cursor-pointer hover:shadow-lg hover:bg-gray-700 transition duration-500 ease-in">
                {/* <div className="rounded overflow-hidden h-full"> */}
                <div className="flex justify-center items-center">
                    <Image className="rounded-xl" src="https://www.cryptoarena.com/assets/img/20141216_New_Team_LA_Store_Opening_Slide-a2f4653a1c.jpg" width={400} height={100} />

                </div>
                <div className="px-6 py-4">
                    <div className="text-white mb-2 text-2xl font-bold px-2
                        font-Poppins
                    ">
                        {heading}
                    </div>
                    <p className="mb-3 px-2 text-gray-400">
                        An all in one merchandise brought to you by the official merchandiser of the tournament with a 20% discount if you purchase with ICC tokens.
                    </p>
                </div>

                {/* </div> */}
            </div>
        </Link>
    )
}

export default StoreCard

